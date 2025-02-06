import type { ProductMain, ProductVariant } from "./types";

export const emptyProductMain: ProductMain = {
    index: 0,
    uuid: "828de594-d923-4614-851b-3beec9788f19", // uncategorized
    name: "",
    category: "",
    detail: "",
    type: "single",
    variantCount: 0,
    createdAt: "",
    updatedAt: "",
};

export const emptyProductVariant: ProductVariant = {
    index: 0,
    uuid: "",
    name: "",
    cost: 0,
    price: 0,
    detail: "",
};

export function validateVariantList(varaintList: ProductVariant[]): boolean {
    // if(){
    //         return true
    //     }
    //     return false
}
