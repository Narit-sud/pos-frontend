import axios, { isAxiosError } from "axios";
import { checkAuthError } from "../Product/utils";
import { SupplierType } from "./types";

export async function getAllSupplier(): Promise<SupplierType[]> {
    try {
        const { data } = await axios.get("http://localhost:3333/supplier", {
            withCredentials: true,
        });
        return data.data;
    } catch (error) {
        console.log(error);
        if (isAxiosError(error)) {
            checkAuthError(error);
        }
        throw error;
    }
}
