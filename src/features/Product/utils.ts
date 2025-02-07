import { AxiosError, isAxiosError } from "axios";
import { VariantProductClass } from "./class";

// export function validateVariantList(varaintList:VariantProductClass[]): boolean {
// if(){
//         return true
//     }
//     return false
// }

export function updateVariantCount(
    currentVariants: VariantProductClass[],
    changeValue: number,
): number {
    const updatedVariantCount = currentVariants.filter(
        (prod) => prod.status !== "delete" && prod.status !== "don't create",
    ).length;

    return Number(updatedVariantCount + changeValue);
}

export function checkAuthError(error: AxiosError) {
    if (isAxiosError(error)) {
        if (error.status === 401) {
            window.location.href = "/auth/login";
        }
    }
}
