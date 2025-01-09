import { CATEGORY_URL } from "@/utils/API_URL"

export const categoryService = {
    getAll: async () => {
        try {
            const req = await fetch(CATEGORY_URL, { credentials: "include" })
            const res = await req.json()
            console.log(res)
            if (res.success) {
                console.log(res.data)

                return res.data
            }
        } catch (error) {
            console.log(error)
            return error
        }
    },
}
