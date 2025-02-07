import { MainProductClass, VariantProductClass } from "./class";

export interface FullProductInterface extends MainProductClass {
    variants: VariantProductClass[];
}
