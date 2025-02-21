import { MainProductClass, VariantProductClass } from "./class";

export interface FullProductInterface extends MainProductClass {
    variants: VariantProductClass[];
}

export interface CategoryInterface {
    index: number;
    uuid: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}
