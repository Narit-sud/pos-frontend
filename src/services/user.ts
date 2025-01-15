import axios from "axios"
import { LOGOUT_URL, RELOGIN_URL } from "./apiUrls"
import { ApiDataResponse, ApiResponse } from "../interfaces/ApiResponse"
import { UserAuth } from "../interfaces/User"

export const userService = {
    logout: async () => {
        try {
            const res = await axios.post<ApiResponse>(LOGOUT_URL, undefined, {
                withCredentials: true,
            })
            console.log("from logout", res.data)

            if (res.data.success) {
                console.log("logout complete")
                return true
            }
        } catch (error) {
            console.log("logout error", error)
            return false
        }
    },
    relogin: async () => {
        try {
            const res = await axios.get<ApiDataResponse<UserAuth>>(
                RELOGIN_URL,
                {
                    withCredentials: true,
                },
            )
            console.log(res)
            if (res.data.success) {
                console.log(res.data.message)
                return res.data.data as UserAuth
            }
            return { username: "No data" } as UserAuth
        } catch (error) {
            return { username: "Error" } as UserAuth
        }
    },
}
