import axios, { isAxiosError } from "axios";
import { MAIN_PRODUCT_URL } from "../../../utils/apiUrls";
import { MainProductClass } from "../class";
import { ApiResponse } from "../../../_interfaces/ApiResponse";
import { checkAuthError } from "../utils";

export async function getMains(): Promise<MainProductClass[]> {
    try {
        const { data } = await axios.get<ApiResponse<MainProductClass[]>>(
            MAIN_PRODUCT_URL,
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
        const { data } = await axios.put<ApiResponse>(
            `${MAIN_PRODUCT_URL}/${updatedMain.uuid}`,
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
