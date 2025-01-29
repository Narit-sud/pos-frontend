import {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
} from "react";
import type { Category } from "./types";
import { getCategoryService } from "./services";

type CategoryContextType = {
    category: Category[];
};

type Props = {
    children: ReactNode;
};
const CategoryContext = createContext<CategoryContextType | undefined>(
    undefined,
);

export function CategoryProvider({ children }: Props) {
    const [category, setCategory] = useState<Category[]>([]);
    async function loadCategories() {
        try {
            const categories = await getCategoryService();
            setCategory(categories);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadCategories();
    }, []);
    return (
        <CategoryContext.Provider value={{ category }}>
            {children}
        </CategoryContext.Provider>
    );
}

export function useCategory() {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error(
            "Category context must be used within category provider tag",
        );
    }
    return context;
}
