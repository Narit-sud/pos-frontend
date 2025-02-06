import {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
} from "react";
import { ProductMain, ProductVariant } from "./class";
import {
    createFullService,
    createVariantsService,
    deleteMainService,
    getMainsService,
    getVariantsService,
} from "./services";
import { FullProduct } from "./types";

type ProductContextType = {
    productMains: ProductMain[];
    productVariants: ProductVariant[];
    createMain: (
        newProductMain: ProductMain,
        newProductVariants: ProductVariant[],
    ) => Promise<void>;
    createVariants: (newProductVariants: ProductVariant[]) => Promise<void>;
    deleteMain: (uuid: string) => Promise<void>;
};

type Props = {
    children: ReactNode;
};
const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: Props) {
    const [productMains, setProductMains] = useState<ProductMain[]>([]);
    const [productVariants, setProductVariants] = useState<ProductVariant[]>(
        [],
    );

    async function loadMains() {
        try {
            const mains = await getMainsService();
            setProductMains(mains);
        } catch (error) {
            console.error(error);
        }
    }

    async function loadVariants() {
        try {
            const variants = await getVariantsService();
            setProductVariants(variants);
        } catch (error) {
            console.error(error);
        }
    }

    async function createMain(
        newProductMain: ProductMain,
        newProductVariants: ProductVariant[],
    ) {
        const fullProduct: FullProduct = {
            ...newProductMain,
            variants: newProductVariants,
        };
        try {
            await createFullService(fullProduct);
            setProductMains((prev) => [...prev, newProductMain]);
        } catch (error) {
            console.error(error);
        }
    }

    async function createVariants(newProductVariants: ProductVariant[]) {
        try {
            await createVariantsService(newProductVariants);
            setProductVariants((prev) => [...prev, ...newProductVariants]);
        } catch (error) {
            console.error(error);
        }
    }


    async function deleteMain(uuid: string) {
        const confirmDelete = confirm("confirm to delete this product?");
        try {
            if (confirmDelete) {
                await deleteMainService(uuid);
                const updatedMain = productMains.filter(
                    (main) => main.uuid !== uuid,
                );
                console.log(productMains);
                console.log(updatedMain);

                setProductMains(updatedMain);
            } else {
                return;
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadMains();
        loadVariants();
    }, []);
    return (
        <ProductContext.Provider
            value={{
                productMains,
                productVariants,
                createMain,
                createVariants,
                deleteMain,
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
