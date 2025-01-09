import { PRODUCT_URL } from "@/utils/API_URL"
import { ProductCreate, ProductUpdate } from "@/interfaces/Product"

export const productService = {
    getAll: async () => {
        try {
            const req = await fetch(PRODUCT_URL, { credentials: "include" })
            const res = await req.json()
            return res.data
        } catch (error) {
            console.log(error)
            return error
        }
    },
    getById: async (id: string) => {
        try {
            const req = await fetch(`${PRODUCT_URL}/${id}`, {
                credentials: "include",
            })
            const res = await req.json()
            return res.data
        } catch (error) {
            console.log(error)
            return error
        }
    },
    update: async (updatedProduct: ProductUpdate) => {
        try {
            const req = await fetch(`${PRODUCT_URL}/${updatedProduct.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(updatedProduct),
            })
            const res = await req.json()
            return res.success
        } catch (error) {
            console.log(error)
            return false
        }
    },
    create: async (newProduct: ProductCreate) => {
        try {
            const req = await fetch(PRODUCT_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(newProduct),
            })
            const res = await req.json()
            console.log(res)

            return res.success
        } catch (error) {
            console.log(error)
            return false
        }
    },
}
