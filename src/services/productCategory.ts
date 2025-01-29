import axios from "axios";

export async function getAllCategories() {
    try {
        const { data } = await axios.get(
            "http://localhost:3333/productCategory",
            { withCredentials: true },
        );
        return data.data;
    } catch (error) {
        console.error(error);
    }
}
