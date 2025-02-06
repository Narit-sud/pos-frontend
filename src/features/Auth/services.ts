import axios from "axios";
import { ApiResponse } from "../../_interfaces/ApiResponse.ts";
import {
    LOGIN_URL,
    LOGOUT_URL,
    RELOGIN_URL,
    REGISTER_URL,
} from "../../_utils/apiUrls.ts";
import { LoginDetail, NewUser, UserAuth } from "./types";

export const loginService = async (loginDetail: LoginDetail): Promise<void> => {
    try {
        const { data } = await axios.post(LOGIN_URL, loginDetail, {
            withCredentials: true,
        });
        if (!data) {
            throw new Error("Login failed");
        }
    } catch (error) {
        throw error;
    }
};

export const registerService = async (newUser: NewUser): Promise<void> => {
    try {
        await axios.post(REGISTER_URL, newUser);
    } catch (error) {
        throw error;
    }
};

export const logoutService = async (): Promise<void> => {
    try {
        const { data } = await axios.post<ApiResponse<never>>(
            LOGOUT_URL,
            undefined,
            {
                withCredentials: true,
            },
        );
        if (data.success) {
            console.log("logout complete");
        }
    } catch (error) {
        throw error;
    }
};

export const reloginService = async (): Promise<UserAuth> => {
    try {
        const { data } = await axios.get<ApiResponse<UserAuth>>(RELOGIN_URL, {
            withCredentials: true,
        });
        if (data.success) {
            return data.data as UserAuth;
        } else {
            throw new Error("No user data returned");
        }
    } catch (error) {
        throw error;
    }
};
