import { v4 as genUUID } from "uuid";
import { SaleItemClass } from "./SaleItemClass";

export interface SaleOrderProps {
    uuid?: string;
    createdAt?: string;
    updatedAt?: string;
    customerUUID?: string;
    saleItems?: SaleItemClass[];
}
export class SaleOrderClass {
    uuid: string;
    customerUUID: string;
    saleItems: SaleItemClass[];
    createdAt: string;
    updatedAt: string;

    constructor({
        uuid = genUUID(),
        customerUUID = "1290c1d3-37f8-43cc-a70c-de43e1583481",
        saleItems = [],
        createdAt = "now()",
        updatedAt = "now()",
    }: SaleOrderProps = {}) {
        this.uuid = uuid;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.customerUUID = customerUUID;
        this.saleItems = saleItems;
    }
}
