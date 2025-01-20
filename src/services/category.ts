import axios from "axios"
import { CATEGORY_URL } from "./apiUrls"
import { Category } from "../interfaces/Category"
import { ApiResponse } from "../interfaces/ApiResponse"

export const getAllCategories = async (): Promise<Category[]> => {
    try {
        const { data } = await axios.get<ApiResponse<Category[]>>(
            CATEGORY_URL,
            { withCredentials: true },
        )
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

export const getCategoryById = async (id: number): Promise<Category> => {
    try {
        const { data } = await axios.get(`${CATEGORY_URL}/${id}`, {
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

export const createCategory = async (category: Category): Promise<void> => {
    try {
        const { data } = await axios.post<ApiResponse<never>>(
            CATEGORY_URL,
            category,
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

export const updateCategory = async (category: Category): Promise<void> => {
    try {
        const { data } = await axios.patch(
            `${CATEGORY_URL}/${category.id}`,
            category,
            { withCredentials: true },
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

export const deleteCategory = async (id: number): Promise<void> => {
    try {
        const { data } = await axios.delete<ApiResponse<never>>(
            `${CATEGORY_URL}/${id}`,
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
