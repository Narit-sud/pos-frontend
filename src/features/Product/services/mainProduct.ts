import axios, { isAxiosError } from "axios";
import { MAIN_URL } from "../../../_utils/apiUrls";
import {
    FullProductClass,
    VariantProductClass,
    MainProductClass,
} from "../class";
import { ApiResponse } from "../../../_interfaces/ApiResponse";
import { checkAuthError } from "../utils";

export async function getMains(): Promise<MainProductClass[]> {
    try {
        console.log("get mains service");
        const { data } = await axios.get<ApiResponse<MainProductClass[]>>(
            `${MAIN_URL}/product/main`,
            {
                withCredentials: true,
            },
        );
        return data.data;
    } catch (error) {
        console.log(error);

        if (isAxiosError(error)) {
            checkAuthError(error);
        }
        throw error;
    }
}

export async function updateMain(updatedMain: MainProductClass): Promise<void> {
    try {
        console.log("update main service");

        const { data } = await axios.put<ApiResponse>(
            `${MAIN_URL}/product/main/${updatedMain.uuid}`,
            updatedMain,
            { withCredentials: true },
        );
        console.log(data);
    } catch (error) {
        console.log(error);

        if (isAxiosError(error)) {
            checkAuthError(error);
        }
        throw error;
    }
}
