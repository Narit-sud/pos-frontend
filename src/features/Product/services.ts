import axios from "axios";
import type { ProductMain, ProductVariant } from "./types";

export async function getMainService(): Promise<ProductMain[]> {
    try {
        const { data } = await axios.get("http://localhost:3333/product/main", {
            withCredentials: true,
        });
        return data.data;
    } catch (error) {
        throw error;
    }
}

export async function getVariantService(): Promise<ProductVariant[]> {
    try {
        const { data } = await axios.get(
            "http://localhost:3333/product/variant",
            {
                withCredentials: true,
            },
        );
        return data.data;
    } catch (error) {
        throw error;
    }
}
