import { ClickTime } from "@prisma/client";
import { Request, Response } from "express";
import { ClickDataBusiness } from "../../business/clickData/ClickDataBusiness";
import { ClickDataDatabase } from "../../data/cickData/ClickDataDatabase";
import { ClickDataInputDTO, ClickSearchInputDTO } from "../../model/clickData/ClickData";

export default class ClickDataController {
    private clickDataBusiness: ClickDataBusiness
    constructor() {
        this.clickDataBusiness = new ClickDataBusiness(new ClickDataDatabase)
    }

    create = async (req: Request, res: Response) => {
        const { click } = req.body

        const clickDataInput: ClickDataInputDTO = {
            click
        }
        try {
            await this.clickDataBusiness.create(clickDataInput)
            res.status(201).send("Click has been created!")
        } catch (error) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }

    get = async (req: Request, res: Response) => {
        const { order, type } = req.params as ClickSearchInputDTO

        const searchInput: ClickSearchInputDTO = {
            order,
            type
        }
        try {
            const response = await this.clickDataBusiness.get(searchInput)
            res.status(200).send({clickData: response})
        } catch (error) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
}