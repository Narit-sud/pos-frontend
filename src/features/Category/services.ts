import axios from "axios";

export async function getCategoryService() {
    try {
        const { data } = await axios.get("http://localhost:3333/category", {
            withCredentials: true,
        });
        return data.data;
    } catch (error) {
        throw error;
    }
}
