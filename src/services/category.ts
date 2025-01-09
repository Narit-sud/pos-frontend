import { CATEGORY_URL } from "@/utils/API_URL"

export const categoryService = {
    getAll: async () => {
        try {
            const req = await fetch(CATEGORY_URL, { credentials: "include" })
            const res = await req.json()
            if (res.success) {
                return res.data
            }
        } catch (error) {
            console.log(error)
            return error
        }
    },
}
