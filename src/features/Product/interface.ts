import { MainProductClass, VariantProductClass } from "./class";
import { v4 as uuidv4 } from "uuid";

export interface FullProductInterface extends MainProductClass {
    variants: VariantProductClass[];
}

export interface CategoryInterface {
    index: number;
    uuid: string;
    name: string;
    detail: string;
    createdAt: string;
    updatedAt: string;
}

export function createCategoryInterface(
    params: Partial<CategoryInterface> = {},
) {
    return {
        index: params.index || 0,
        uuid: params.uuid || uuidv4(),
        name: params.name || "",
        detail: params.detail || "",
        createdAt: params.createdAt || "",
        updatedAt: params.updatedAt || "",
    };
}
