import { SaleItemType } from "./SaleItemType";

export type SaleOrderType = {
    uuid: string;
    customerUUID: string;
    saleItems: SaleItemType[];
    createdAt: string;
    updatedAt: string;
};
