import { PRODUCT_URL } from "@/utils/API_URL"

export const productService = {
    getAll: async () => {
        try {
            const res = await fetch(PRODUCT_URL, { credentials: "include" })
            const resJson = await res.json()
            return resJson.data
        } catch (error) {
            console.log(error)
            return error
        }
    },
}
