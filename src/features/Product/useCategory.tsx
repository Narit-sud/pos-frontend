import {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
} from "react";
import type { CategoryInterface } from "./interface";
import {
    getCategories,
    createCategoryService,
    updateCategoryService,
    deleteCategoryService,
} from "./services/category";

type CategoryContextType = {
    categories: CategoryInterface[];
    createCategory: (newCategory: CategoryInterface) => Promise<boolean>;
    updateCategory: (updatedCategory: CategoryInterface) => Promise<boolean>;
    deleteCategory: (category: CategoryInterface) => Promise<boolean>;
};

type Props = {
    children: ReactNode;
};
const CategoryContext = createContext<CategoryContextType | undefined>(
    undefined,
);

export function CategoryProvider({ children }: Props) {
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    async function loadCategories() {
        try {
            const categories = await getCategories();
            setCategories(categories);
        } catch (error) {
            console.error(error);
        }
    }

    async function createCategory(newCategory: CategoryInterface) {
        try {
            await createCategoryService(newCategory);
            loadCategories();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async function updateCategory(updatedCategory: CategoryInterface) {
        try {
            await updateCategoryService(updatedCategory);
            loadCategories();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async function deleteCategory(category: CategoryInterface) {
        try {
            await deleteCategoryService(category);
            loadCategories();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    useEffect(() => {
        loadCategories();
    }, []);
    return (
        <CategoryContext.Provider
            value={{
                categories,
                createCategory,
                updateCategory,
                deleteCategory,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
}

export function useCategory() {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error("useCategory must be used within a CategoryProvider");
    }
    return context;
}
