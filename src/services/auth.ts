import axios from "axios"
import { LOGIN_URL } from "./apiUrls"
import { LoginDetail } from "../interfaces/User"

export const authService = {
    login: async (loginDetail: LoginDetail) => {
        try {
            const { data } = await axios.post(LOGIN_URL, loginDetail, {
                withCredentials: true,
            })
            if (typeof data === "object" && data !== null) {
                console.log(data)

                return data
            }
        } catch (error) {
            console.log(error)
            return error
        }
    },
}
