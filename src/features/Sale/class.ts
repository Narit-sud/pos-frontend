import { v4 as genUUID } from "uuid";

// sale item
export interface SaleItemProps {
    uuid?: string;
    qty?: number;
    total?: number;
    receiptUUID?: string;
}
export class SaleItemClass {
    uuid: string;
    qty: number;
    total: number;
    receiptUUID: string;

    constructor({
        uuid = genUUID(),
        qty = 1,
        total = 0,
        receiptUUID = "",
    }: SaleItemProps = {}) {
        this.uuid = uuid;
        this.qty = qty;
        this.total = total;
        this.receiptUUID = receiptUUID;
    }
}

// sale receipt
export interface SaleReceiptProps {
    uuid?: string;
    createdAt?: string;
    updatedAt?: string;
    customerUUID?: string;
    saleItems?: SaleItemClass[];
}
export class SaleReceiptClass {
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
    }: SaleReceiptProps = {}) {
        this.uuid = uuid;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.customerUUID = customerUUID;
        this.saleItems = saleItems;
    }
}
