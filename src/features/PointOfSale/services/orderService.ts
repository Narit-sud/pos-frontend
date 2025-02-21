import axios from "axios";
import { ORDER_URL } from "../../../utils/apiUrls";
import type { OrderType } from "../types";
import { ApiResponse } from "../../../_interfaces/ApiResponse";

export async function createOrder(order: OrderType): Promise<ApiResponse> {
    try {
        const { data } = await axios.post(ORDER_URL, order, {
            withCredentials: true,
        });
        return data.data;
    } catch (error) {
        throw error;
    }
}
