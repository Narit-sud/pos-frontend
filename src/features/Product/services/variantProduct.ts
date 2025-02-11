import axios, { isAxiosError } from "axios";
import { MAIN_URL } from "../../../utils/apiUrls";
import { VariantProductClass } from "../class";
import { ApiResponse } from "../../../_interfaces/ApiResponse";
import { checkAuthError } from "../utils";

export async function getVariants(): Promise<VariantProductClass[]> {
    try {
        const res = await axios.get<ApiResponse<VariantProductClass[]>>(
            `${MAIN_URL}/product/variant`,
            {
                withCredentials: true,
            },
        );

        return res.data.data;
    } catch (error) {
        if (isAxiosError(error)) {
            checkAuthError(error);
            throw error;
        } else {
            throw error;
        }
    }
}

export async function createVariants(
    variants: VariantProductClass[],
): Promise<void> {
    try {
        const res = await axios.post(`${MAIN_URL}/product/variant`, variants, {
            withCredentials: true,
        });
        console.log(res.data);
    } catch (error) {
        if (isAxiosError(error)) {
            checkAuthError(error);
            throw error;
        } else {
            throw error;
        }
    }
}

export async function updateVaraints(
    variants: VariantProductClass[],
): Promise<void> {
    try {
        const res = await axios.put<ApiResponse>(
            `${MAIN_URL}/product/variant/`,
            variants,
            { withCredentials: true },
        );

        console.log(res.data);
    } catch (error) {
        if (isAxiosError(error)) {
            checkAuthError(error);
            throw error;
        } else {
            throw error;
        }
    }
}

export async function deleteVariants(
    variants: VariantProductClass[],
): Promise<void> {
    try {
        const res = await axios.patch<ApiResponse>(
            `${MAIN_URL}/product/variant`,
            variants,
            {
                withCredentials: true,
            },
        );
        console.log(res.data);
    } catch (error) {
        if (isAxiosError(error)) {
            checkAuthError(error);
            throw error;
        } else {
            throw error;
        }
    }
}
