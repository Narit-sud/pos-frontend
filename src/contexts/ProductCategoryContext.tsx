import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useContext,
} from "react";
import { getAllCategories } from "../services/productCategory";

interface ProductCategoryContextType {
    productCategory: ProductCategory[];
}

interface ProductCategory {
    uuid: string;
    name: string;
    detail: string | null;
}

interface Props {
    children: ReactNode;
}
const ProductCategoryContext = createContext<
    ProductCategoryContextType | undefined
>(undefined);

export function ProductCategoryProvider({ children }: Props) {
    const [productCategory, setProductCategory] = useState<ProductCategory[]>(
        [],
    );
    async function loadCategories() {
        try {
            const categories = await getAllCategories();
            setProductCategory(categories);
        } catch (error) {}
    }
    useEffect(() => {
        loadCategories();
    }, []);
    return (
        <ProductCategoryContext.Provider value={{ productCategory }}>
            {children}
        </ProductCategoryContext.Provider>
    );
}

export function useProductCategory() {
    const context = useContext(ProductCategoryContext);
    if (!context) {
        throw new Error(
            "Product category context must be use within context provider",
        );
    }

    return context;
}
