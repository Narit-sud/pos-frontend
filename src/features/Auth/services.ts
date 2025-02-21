import axios from "axios";
import { ApiResponse } from "../../_interfaces/ApiResponse.ts";
import {
    LOGIN_URL,
    LOGOUT_URL,
    RELOGIN_URL,
    REGISTER_URL,
    USER_BY_USERNAME_URL,
} from "../../utils/apiUrls.ts";
import { LoginDetail, NewUser, UserAuth } from "./types";

export const getUserByUsername = async (
    username: string,
): Promise<UserAuth> => {
    try {
        const { data } = await axios.get<ApiResponse<UserAuth>>(
            USER_BY_USERNAME_URL(username),
            {
                withCredentials: true,
            },
        );
        if (data.success) {
            return data.data as UserAuth;
        } else {
            throw new Error("Failed to fetch user data");
        }
    } catch (error) {
        throw error;
    }
};

export const loginService = async (
    loginDetail: LoginDetail,
): Promise<UserAuth> => {
    try {
        const { data } = await axios.post(LOGIN_URL, loginDetail, {
            withCredentials: true,
        });
        if (!data) {
            throw new Error("Login failed");
        }
        const userData = await getUserByUsername(loginDetail.username);
        return userData;
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
            window.location.href = "/login";
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
