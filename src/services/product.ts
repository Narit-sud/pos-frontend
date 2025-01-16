import axios from "axios"
import { PRODUCT_URL } from "./apiUrls"
import { Product } from "../interfaces/Product"
import { ApiDataResponse } from "../interfaces/ApiResponse"

export const productService = {
    getAll: async (): Promise<Product[] | null> => {
        try {
            const res = await axios.get<ApiDataResponse<Product[]>>(
                PRODUCT_URL,
                { withCredentials: true },
            )

            console.log(res.data.data)

            return res.data.data || null
        } catch (error) {
            console.error("Error fetching products:", error)
            return null
        }
    },
}
