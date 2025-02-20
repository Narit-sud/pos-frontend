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

    const initialize = async () => {
        const product = await getFull();
        setFullProducts(product);
    };

    const createNewProduct = async (
        fullProduct: FullProductClass,
    ): Promise<boolean> => {
        // filter variants with status !== 'create' out
        const cleanFullProduct = {
            ...fullProduct,
            variants: fullProduct.variants.filter(
                (prod) => prod.status === "create",
            ),
        };
        try {
            console.log("useProduct/createNewProduct");

            // create request
            await createFull(cleanFullProduct);
            initialize(); // Refresh data after creation
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const deleteProduct = async (mainProductUUID: string): Promise<void> => {
        try {
            await deleteFull(mainProductUUID);
            initialize(); // Refresh data after deletion
        } catch (error) {
            console.error(error);
        }
    };

    const updateFullProduct = async (
        fullProduct: FullProductClass,
    ): Promise<void> => {
        // filter what to update
        const updateVariantsList = fullProduct.variants.filter(
            (prod) => prod.status === "update",
        );
        console.log(updateVariantsList);

        // filter what to delete
        const deleteVariantsList = fullProduct.variants.filter(
            (prod) => prod.status === "delete",
        );
        console.log(deleteVariantsList);
        // filter what to create
        const createVariantsList = fullProduct.variants.filter(
            (prod) => prod.status === "create",
        );
        console.log(createVariantsList);
        try {
            // update main
            if (fullProduct.status === "update") {
                // send update request
                await updateMain(fullProduct);
            }

            // handle variants as it should
            if (createVariantsList.length > 0) {
                // send create variants request
                await createVariants(createVariantsList);
            }
            if (updateVariantsList.length > 0) {
                // send update variants request
                await updateVaraints(updateVariantsList);
            }
            if (deleteVariantsList.length > 0) {
                // send delete variants request
                await deleteVariants(deleteVariantsList);
            }
            initialize(); // Refresh data after update
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        initialize();
    }, []);
    return (
        <ProductContext.Provider
            value={{
                fullProducts,
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
