import { v4 as genUUID } from "uuid";
export interface SaleItemProps {
    uuid?: string;
    mainName?: string;
    variantName?: string;
    qty?: number;
    price?: number;
    total?: number;
    receiptUUID?: string;
}
export class SaleItemClass {
    uuid: string;
    mainName?: string;
    variantName?: string;
    qty: number;
    price: number;
    total: number;
    receiptUUID: string;

    constructor({
        uuid = genUUID(),
        mainName = "",
        variantName = "",
        qty = 1,
        price = 0,
        total = 0,
        receiptUUID = "",
    }: SaleItemProps = {}) {
        this.uuid = uuid;
        this.mainName = mainName;
        this.variantName = variantName;
        this.qty = qty;
        this.price = price;
        this.total = total;
        this.receiptUUID = receiptUUID;
    }
}
