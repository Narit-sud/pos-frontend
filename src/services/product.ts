import axios from "axios";
import { PRODUCT_URL } from "../_utils/apiUrls";
import { Product } from "../_interfaces/Product";
import { ApiResponse } from "../_interfaces/ApiResponse";

export const getAllProductService = async (): Promise<Product[]> => {
    try {
        const { data } = await axios.get<ApiResponse<Product[]>>(PRODUCT_URL, {
            withCredentials: true,
        });

        if (!data.success) {
            throw new Error(data.message);
        }

        return data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error;
        }
        throw error as Error;
    }
};

export const getProductByIdService = async (
    id: string | number,
): Promise<Product> => {
    try {
        const { data } = await axios.get(`${PRODUCT_URL}/${id}`, {
            withCredentials: true,
        });
        if (!data.success) {
            throw new Error(data.message);
        }
        return data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response;
        }
        throw error;
    }
};

export const createProductService = async (
    product: Product,
): Promise<number> => {
    try {
        const { data } = await axios.post<ApiResponse<never>>(
            PRODUCT_URL,
            product,
            {
                withCredentials: true,
            },
        );

        if (!data.success) {
            throw new Error(data.message);
        }

        const newProductId = data.message.split(":")[1];
        if (!newProductId) {
            throw new Error("No product id returned, create product failed");
        }
        return Number(newProductId);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response;
        }
        throw error;
    }
};

export const updateProductService = async (product: Product): Promise<void> => {
    try {
        const { data } = await axios.patch<ApiResponse<never>>(
            `${PRODUCT_URL}/${product.id}`,
            product,
            {
                withCredentials: true,
            },
        );
        if (!data.success) {
            throw new Error(data.message);
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.status === 404) {
                throw new Error("this product doesn't existed");
            }

            throw error.response;
        }
        throw error as Error;
    }
};

export const deleteProductService = async (id: number): Promise<void> => {
    try {
        await axios.delete<ApiResponse<never>>(`${PRODUCT_URL}/${id}`, {
            withCredentials: true,
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.status === 404) {
                throw new Error(
                    "This product doesn't existed or already deleted",
                );
            }
            throw error;
        }
        throw error as Error;
    }
};
