import { ClickTime } from "@prisma/client";
import { ClickDataInputDTO, ClickSearchInputDTO } from "../../model/clickData/ClickData";

export interface ClickDataRepository {
    create(clickDataInput: ClickDataInputDTO): Promise<void>
    get(clickSearchInputDTO: ClickSearchInputDTO): Promise<ClickTime[] | null>
}