import { v4 as uuid } from "uuid";
export class ProductVariant {
    index: number;
    uuid: string;
    name: string;
    cost: number;
    price: number;
    detail: string;
    mainProduct: string;
    constructor(
        name: string,
        price: number,
        cost: number,
        detail: string,
        mainProductUUID: string,
    ) {
        this.index = 0;
        this.uuid = uuid();
        this.name = name;
        this.price = price;
        this.cost = cost;
        this.detail = detail;
        this.mainProduct = mainProductUUID;
    }
}

export class ProductMain {
    index: number;
    uuid: string;
    name: string;
    category: string;
    detail: string;
    type: string;
    variantCount: number;
    createdAt: string;
    updatedAt: string;

    constructor(
        name: string,
        category: string = "828de594-d923-4614-851b-3beec9788f19",
        detail: string,
        type: string,
        createdAt: string = "",
        updatedAt: string = "",
    ) {
        this.index = 0;
        this.uuid = uuid();
        this.name = name;
        this.category = category; // uncategorized
        this.detail = detail;
        this.type = type;
        this.variantCount = 1;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
