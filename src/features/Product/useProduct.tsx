import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { FullProductClass } from "./class";
import { updateMain } from "./services/mainProduct";
import {
    createVariants,
    updateVaraints,
    deleteVariants,
} from "./services/variantProduct";
import { getFull, createFull, deleteFull } from "./services/fullProduct";

type Props = {
    children: ReactNode;
};

type ProductContextType = {
    fullProducts: FullProductClass[] | null;
    isLoading: boolean;
    initialize: () => Promise<void>;
    createNewProduct: (product: FullProductClass) => Promise<boolean>;
    deleteProduct: (mainProductUUID: string) => Promise<void>;
    updateFullProduct: (fullProduct: FullProductClass) => Promise<void>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: Props) {
    const [fullProducts, setFullProducts] = useState<FullProductClass[] | null>(
        null,
    );
    const [isLoading, setIsLoading] = useState(false);

    const initialize = async () => {
        setIsLoading(true);
        try {
            const product = await getFull();
            setFullProducts(product);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const createNewProduct = async (
        fullProduct: FullProductClass,
    ): Promise<boolean> => {
        setIsLoading(true);
        try {
            const cleanFullProduct = {
                ...fullProduct,
                variants: fullProduct.variants.filter(
                    (prod) => prod.status === "create",
                ),
            };
            await createFull(cleanFullProduct);
            await initialize();
            return true;
        } catch (error) {
            console.error("Failed to create product:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const deleteProduct = async (mainProductUUID: string): Promise<void> => {
        setIsLoading(true);
        try {
            await deleteFull(mainProductUUID);
            await initialize();
        } catch (error) {
            console.error("Failed to delete product:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const updateFullProduct = async (
        fullProduct: FullProductClass,
    ): Promise<void> => {
        setIsLoading(true);
        try {
            const updateVariantsList = fullProduct.variants.filter(
                (prod) => prod.status === "update",
            );
            const deleteVariantsList = fullProduct.variants.filter(
                (prod) => prod.status === "delete",
            );
            const createVariantsList = fullProduct.variants.filter(
                (prod) => prod.status === "create",
            );

            const operations = [];

            if (fullProduct.status === "update") {
                operations.push(updateMain(fullProduct));
            }
            if (createVariantsList.length > 0) {
                operations.push(createVariants(createVariantsList));
            }
            if (updateVariantsList.length > 0) {
                operations.push(updateVaraints(updateVariantsList));
            }
            if (deleteVariantsList.length > 0) {
                operations.push(deleteVariants(deleteVariantsList));
            }

            await Promise.all(operations);
            await initialize();
        } catch (error) {
            console.error("Failed to update product:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        initialize();
    }, []);
    return (
        <ProductContext.Provider
            value={{
                fullProducts,
                isLoading,
                initialize,
                createNewProduct,
                deleteProduct,
                updateFullProduct,
            }}
        >
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
