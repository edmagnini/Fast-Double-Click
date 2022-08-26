import { CustomError } from "../../error/CustomError";
import { ClickDataInputDTO, ClickSearchInputDTO } from "../../model/clickData/ClickData";
import { ClickDataRepository } from "./ClickDataRepository";

export class ClickDataBusiness {
    private clickData: ClickDataRepository
    constructor(clickDataImplamentation: ClickDataRepository) {
        this.clickData = clickDataImplamentation
    }

    create = async (clickDataInput: ClickDataInputDTO) => {
        const { click } = clickDataInput

        if (!click) {
            throw new CustomError(422, "Please, inform a value for click time")
        }


        const newClickDataInput: ClickDataInputDTO = {
            click
        }
        
        await this.clickData.create(newClickDataInput)
    }

    get = async (clickSearchInputDTO: ClickSearchInputDTO) => {
        const { order, type } = clickSearchInputDTO
        
        if (!order) {
            throw new CustomError(422, "Please, inform a value for search")
        }
        if (!type) {
            throw new CustomError(422, "Please, inform a type of search")
        }

        const searchType: ClickSearchInputDTO = {
            order,
            type
        }
        const clickData = await this.clickData.get(searchType)

        
        return clickData
    }
}