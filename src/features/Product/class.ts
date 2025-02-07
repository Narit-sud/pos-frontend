import { v4 as genUUID } from "uuid";

// variant product
export interface VariantProductProps {
    index?: number;
    uuid?: string;
    name?: string;
    cost?: number;
    price?: number;
    detail?: string;
    mainProduct?: string;
    createdAt?: string;
    updatedAt?: string;
    status?: string;
}

export class VariantProductClass {
    index: number;
    uuid: string;
    name: string;
    cost: number;
    price: number;
    detail: string;
    mainProduct: string;
    createdAt: string;
    updatedAt: string;
    status: string;

    constructor({
        index = 0,
        uuid = genUUID(),
        name = "",
        cost = 0,
        price = 0,
        detail = "",
        mainProduct = "",
        createdAt = "",
        updatedAt = "",
        status = "create",
    }: VariantProductProps = {}) {
        this.index = index;
        this.uuid = uuid;
        this.name = name;
        this.cost = cost;
        this.price = price;
        this.detail = detail;
        this.mainProduct = mainProduct;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
    }
}

// main product
export interface MainProductProps {
    index?: number;
    uuid?: string;
    name?: string;
    category?: string;
    detail?: string;
    variantCount?: number;
    createdAt?: string;
    updatedAt?: string;
    status?: string;
}

export class MainProductClass {
    index: number;
    uuid: string;
    name: string;
    category: string;
    detail: string;
    variantCount: number;
    createdAt: string;
    updatedAt: string;
    status: string;

    constructor({
        index = 0,
        uuid = genUUID(),
        name = "",
        category = "828de594-d923-4614-851b-3beec9788f19",
        detail = "",
        variantCount = 1,
        createdAt = "NOW()",
        updatedAt = "NOW()",
        status = "create",
    }: MainProductProps = {}) {
        this.index = index;
        this.uuid = uuid;
        this.name = name;
        this.category = category;
        this.detail = detail;
        this.variantCount = variantCount;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
    }
}

export class FullProductClass extends MainProductClass {
    variants: VariantProductClass[];

    constructor(
        props: MainProductProps & { variants?: VariantProductClass[] } = {},
    ) {
        super(props);
        this.variants = props.variants || [];
    }
}
