import axios from "axios"
import { validateRegister } from "../utils/validateRegister"
import { User, UserAuth } from "../interfaces/User"
import { LOGIN_URL, REGISTER_URL, VERIFY_TOKEN_URL } from "./apiUrls"
import { LoginDetail } from "../interfaces/User"
import { FalseResponse, TrueResponse } from "../class/Response"
import { ApiDataResponse } from "../interfaces/ApiResponse"

export const publicServices = {
    register: async (newUser: User) => {
        //validate newUser
        const newUserValid = validateRegister(newUser)
        if (!newUserValid) {
            alert("user is not valid to register")
            return newUserValid
        }
        try {
            const res = await axios.post(REGISTER_URL, newUser)
            if (res.status !== 201) {
                return new FalseResponse("cannot register this user")
            }
        } catch (error) {
            return new FalseResponse("error register new user", error)
        }
    },

    login: async (loginDetail: LoginDetail) => {
        try {
            const res = await axios.post<ApiDataResponse<UserAuth>>(
                LOGIN_URL,
                loginDetail,
                {
                    withCredentials: true,
                },
            )

            const data = res.data
            console.log(data)

            if (data.success) {
                console.log(res.data)
                return new TrueResponse(data.message, data.data)
            } else {
                console.log(data.message)
                return new FalseResponse(data.message)
            }
        } catch (error) {
            console.log(error)
            return new FalseResponse("error login", error)
        }
    },

    varifyToken: async (token: string, username: string) => {
        try {
            // send token to backend
            const res = await axios.post(VERIFY_TOKEN_URL, { token, username })

            const data = res.data as { success: boolean; message: string }
            if (res.status !== 200) {
                // if response is not ok
                return false
            }
            if (data.success) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.error("error verifying token", error)
            return false
        }
    },
}
