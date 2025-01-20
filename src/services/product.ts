import axios from "axios"
import { PRODUCT_URL } from "./apiUrls"
import { Product } from "../interfaces/Product"
import { ApiResponse } from "../interfaces/ApiResponse"

export const getAllProduct = async (): Promise<Product[]> => {
    try {
        const { data } = await axios.get<ApiResponse<Product[]>>(PRODUCT_URL, {
            withCredentials: true,
        })

        if (!data.success) {
            throw new Error(data.message)
        }

        return data.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error
        }
        throw error
    }
}

export const getProductById = async (id: string | number): Promise<Product> => {
    try {
        const { data } = await axios.get(`${PRODUCT_URL}/${id}`, {
            withCredentials: true,
        })
        if (!data.success) {
            throw new Error(data.message)
        }
        return data.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response
        }
        throw error
    }
}

export const createProduct = async (product: Product): Promise<void> => {
    try {
        const { data } = await axios.post<ApiResponse<never>>(
            PRODUCT_URL,
            product,
            {
                withCredentials: true,
            },
        )

        if (!data.success) {
            throw new Error(data.message)
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response
        }
        throw error
    }
}

export const updateProduct = async (product: Product): Promise<void> => {
    try {
        const { data } = await axios.patch<ApiResponse<never>>(
            `${PRODUCT_URL}/${product.id}`,
            product,
            {
                withCredentials: true,
            },
        )
        if (!data.success) {
            throw new Error(data.message)
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response
        }
        throw error
    }
}
