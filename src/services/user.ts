import axios from "axios"
import { validateRegister } from "../utils/validateRegister"
import { User } from "../interfaces/User"
import { LOGIN_URL, REGISTER_URL } from "./apiUrls"
import { LoginDetail } from "../interfaces/User"

export const userServices = {
    register: async (newUser: User) => {
        //validate newUser
        const newUserValid = validateRegister(newUser)
        if (!newUserValid) {
            alert("user is not valid to register")
            return
        }
        //try create new user

        const config = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        }

        try {
            const req = await fetch(REGISTER_URL, config)
            console.log(req)

            if (req.ok) {
                const res = await req.json()
                return res
            } else {
                const res = await req.json()
                return res
            }
        } catch (error) {
            console.log(error)
            return false
        }
    },
    login: async (loginDetail: LoginDetail) => {
        try {
            const res = await axios.post(LOGIN_URL, loginDetail, {
                withCredentials: true,
            })
            if (res.status === 200) {
                console.log(res.data)
                return { success: true, data: res.data }
            } else {
                console.log("res not ok")
                return { success: false, data: undefined }
            }
        } catch (error) {}
    },
}
