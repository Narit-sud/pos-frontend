import axios from "axios";
import { ORDER_PRODUCT_LOG_URL } from "../../../utils/apiUrls";
import { ApiResponse } from "../../../_interfaces/ApiResponse";
import { CartItemType } from "../types";

export async function createProductLog(
    products: CartItemType[],
): Promise<ApiResponse> {
    try {
        const { data } = await axios.post(ORDER_PRODUCT_LOG_URL, products, {
            withCredentials: true,
        });
        return data.data;
    } catch (error) {
        throw error;
    }
}

// "uuid",
//            product_variant_uuid,
//            order_uuid,
//            quantity,
//            total_value,
