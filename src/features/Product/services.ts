import axios from "axios";
import { ProductMain, ProductVariant } from "./class";
import type { FullProduct } from "./types";

export async function getMainsService(): Promise<ProductMain[]> {
    try {
        const { data } = await axios.get("http://localhost:3333/product/main", {
            withCredentials: true,
        });
        return data.data;
    } catch (error) {
        throw error;
    }
}

export async function getVariantsService(): Promise<ProductVariant[]> {
    try {
        const { data } = await axios.get(
            "http://localhost:3333/product/variant",
            {
                withCredentials: true,
            },
        );
        return data.data as ProductVariant[];
    } catch (error) {
        throw error;
    }
}

export async function createFullService(
    fullProduct: FullProduct,
): Promise<void> {
    try {
        await axios.post("http://localhost:3333/product/full", fullProduct, {
            withCredentials: true,
        });
    } catch (error) {
        throw error;
    }
}

export async function createVariantsService(
    fullProduct: FullProduct,
): Promise<void> {
    try {
        await axios.post("http://localhost:3333/product/full", fullProduct, {
            withCredentials: true,
        });
    } catch (error) {
        throw error;
    }
}

export async function deleteMainService(uuid: string) {
    try {
        await axios.delete(`http://localhost:3333/product/main/${uuid}`, {
            withCredentials: true,
        });
    } catch (error) {
        throw error;
    }
}
