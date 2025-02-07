import axios from "axios";

export async function getCategories() {
    try {
        const { data } = await axios.get("http://localhost:3333/category", {
            withCredentials: true,
        });
        return data.data;
    } catch (error) {
        throw error;
    }
}
