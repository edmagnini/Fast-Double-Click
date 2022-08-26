import { ClickDataRepository } from "../../business/clickData/ClickDataRepository";
import { CustomError } from "../../error/CustomError";
import { ClickDataInputDTO, ClickSearchInputDTO } from "../../model/clickData/ClickData";
import { prismaClient } from "../BaseDatabase";

export class ClickDataDatabase implements ClickDataRepository {

    create = async (clickDataInput: ClickDataInputDTO) => {
        const { click } = clickDataInput
        try {
            await prismaClient.clickTime.create({
                data: {
                    click: click
                }
            })
        } catch (error) {
            if (error instanceof CustomError) {
                throw new Error(error.message)
            }
        }
    }
    get = async (clickSearchInputDTO: ClickSearchInputDTO) => {
        const { order, type } = clickSearchInputDTO
        if (order === "click") {
            try {
                const response = await prismaClient.clickTime.findMany({
                    orderBy: {
                        click: type
                    }
                })
    
                return response
            } catch (error) {
                if (error instanceof CustomError) {
                    throw new Error(error.message)
                }
            }
        } else if (order === "click_date") {
            try {
                const response = await prismaClient.clickTime.findMany({
                    orderBy: {
                        click_date: type
                    }
                })
    
                return response
            } catch (error) {
                if (error instanceof CustomError) {
                    throw new Error(error.message)
                }
            }
        }
        
    }
}