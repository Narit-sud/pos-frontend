import {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
} from "react";
import type { ProductMain, ProductVariant } from "./types";
import { getMainService, getVariantService } from "./services";

type ProductContextType = {
    productMain: ProductMain[];
    productVariant: ProductVariant[];
};

type Props = {
    children: ReactNode;
};
const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: Props) {
    const [productMain, setProductMain] = useState<ProductMain[]>([]);
    const [productVariant, setProductVariant] = useState<ProductVariant[]>([]);
    async function loadMains() {
        try {
            const mains = await getMainService();
            setProductMain(mains);
        } catch (error) {
            console.error(error);
        }
    }
    async function loadVariants() {
        try {
            const variants = await getVariantService();
            setProductVariant(variants);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        loadMains();
        loadVariants();
    }, []);
    return (
        <ProductContext.Provider value={{ productMain, productVariant }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProduct() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error(
            "Product context must be used within product context provider tag",
        );
    }
    return context;
}
