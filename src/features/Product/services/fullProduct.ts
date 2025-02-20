import axios, { isAxiosError } from "axios";
import { MAIN_URL } from "../../../utils/apiUrls";
import { FullProductClass } from "../class";
import { ApiResponse } from "../../../_interfaces/ApiResponse";
import { checkAuthError } from "../utils";

export async function getFull(): Promise<FullProductClass[]> {
    console.log("get full service");
    try {
        const { data } = await axios.get<ApiResponse<FullProductClass[]>>(
            `${MAIN_URL}/product/full/`,
            {
                withCredentials: true,
            },
        );
        return data.data;
    } catch (error) {
        if (isAxiosError(error)) {
            checkAuthError(error);
        }
        throw error;
    }
}

export async function createFull(fullProduct: FullProductClass): Promise<void> {
    console.log("create full service");

    try {
        const res = await axios.post<ApiResponse>(
            `${MAIN_URL}/product`,
            fullProduct,
            {
                withCredentials: true,
            },
        );
        console.log(res);
        return;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log("services/fullProduct/createFull/error", error);
            checkAuthError(error);
            throw error;
        }
    }
}

export async function deleteFull(mainProductUUID: string): Promise<void> {
    console.log("delete full service");

    try {
        const res = await axios.delete<ApiResponse>(
            `${MAIN_URL}/product/${mainProductUUID}`,
            { withCredentials: true },
        );
        console.log(res.data);
    } catch (error) {
        if (isAxiosError(error)) {
            checkAuthError(error);
            throw error;
        }
    }
}
