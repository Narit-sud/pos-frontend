import axios from "axios";
import { CATEGORY_URL } from "../../../utils/apiUrls";
import { CategoryInterface } from "../interface";

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

export async function createCategoryService(
    newCategory: CategoryInterface,
): Promise<void> {
    try {
        await axios.post(CATEGORY_URL, newCategory, { withCredentials: true });
    } catch (error) {
        throw error;
    }
}

export async function updateCategoryService(
    updatedCategory: CategoryInterface,
) {
    console.log("service", updatedCategory);

    try {
        await axios.put(
            `${CATEGORY_URL}/${updatedCategory.uuid}`,
            updatedCategory,
            {
                withCredentials: true,
            },
        );
    } catch (error) {
        throw error;
    }
}

export async function deleteCategoryService(category: CategoryInterface) {
    try {
        await axios.delete(`${CATEGORY_URL}/${category.uuid}`, {
            withCredentials: true,
        });
    } catch (error) {
        throw error;
    }
}
