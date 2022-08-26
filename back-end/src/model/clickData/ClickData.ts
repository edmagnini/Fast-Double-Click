export type ClickDataInputDTO = {
    click: number
}

export enum ClickOrderType {
    click = "click",
    click_date = "click_date"
}

export enum OrderType {
    asc = "asc",
    desc = "desc"
}

export type ClickSearchInputDTO = {
    order: ClickOrderType,
    type: OrderType
}