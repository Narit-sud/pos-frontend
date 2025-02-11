import axios from "axios";
import { CATEGORY_URL } from "../../utils/apiUrls";

export async function getCategories() {
    try {
        const { data } = await axios.get(CATEGORY_URL, {
            withCredentials: true,
        });
        return data.data;
    } catch (error) {
        throw error;
    }
}
