import axios, { isAxiosError } from "axios";
import { CUSTOMER_URL } from "../../utils/apiUrls";
import { CustomerType } from "./types";
import { checkAuthError } from "../Product/utils";
import { ApiResponse } from "../../_interfaces/ApiResponse";

export async function getAllCustomers(): Promise<CustomerType[]> {
    try {
        const { data } = await axios.get<ApiResponse<CustomerType[]>>(
            CUSTOMER_URL,
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

export async function createNewCustomer(
    newCustomer: CustomerType,
): Promise<void> {
    try {
        const { data } = await axios.post<ApiResponse>(
            CUSTOMER_URL,
            newCustomer,
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

export async function updateCustomer(
    updatedCustomer: CustomerType,
): Promise<void> {
    try {
        const { data } = await axios.put<ApiResponse>(
            CUSTOMER_URL,
            updatedCustomer,
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

export async function deleteCustomer(customerUUID: string): Promise<void> {
    try {
        const { data } = await axios.delete(`${CUSTOMER_URL}/${customerUUID}`, {
            withCredentials: true,
        });
        console.log(data);
    } catch (error) {
        console.log(error);
        if (isAxiosError(error)) {
            checkAuthError(error);
        }
        throw error;
    }
}
