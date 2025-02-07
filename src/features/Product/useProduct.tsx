import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import {
    MainProductClass,
    VariantProductClass,
    FullProductClass,
} from "./class";
import { getMains, updateMain } from "./services/mainProduct";
import {
    createVariants,
    deleteVariants,
    getVariants,
    updateVaraints,
} from "./services/variantProduct";
import { createFull, deleteFull } from "./services/fullProduct";

type Props = {
    children: ReactNode;
};

type ProductContextType = {
    mainProducts: MainProductClass[];
    variantProducts: VariantProductClass[];
    createNewProduct: (fullProduct: FullProductClass) => Promise<void>;
    deleteProduct: (mainProductUUID: string) => Promise<void>;
    updateFullProduct: (fullProduct: FullProductClass) => Promise<void>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: Props) {
    const [mainProducts, setMainProducts] = useState<MainProductClass[]>([]);
    const [variantProducts, setVariantProducts] = useState<
        VariantProductClass[]
    >([]);

    const initialize = async () => {
        const main = await getMains();
        setMainProducts(main);
        const variant = await getVariants();
        setVariantProducts(variant);
    };

    const createNewProduct = async (
        fullProduct: FullProductClass,
    ): Promise<void> => {
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
            // update main list
            setMainProducts((prev) => [
                ...prev,
                new MainProductClass(cleanFullProduct),
            ]);
            // update variant list, from status 'create'=>'active' when created
            const newVariants = cleanFullProduct.variants.map(
                (prod) =>
                    new VariantProductClass({ ...prod, status: "active" }),
            );
            setVariantProducts((prev) => [...prev, ...newVariants]);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteProduct = async (mainProductUUID: string): Promise<void> => {
        try {
            await deleteFull(mainProductUUID);
            setMainProducts((prev) =>
                prev.filter((prod) => prod.uuid !== mainProductUUID),
            );
            setVariantProducts((prev) =>
                prev.filter((prod) => prod.mainProduct !== mainProductUUID),
            );
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
                await updateMain(fullProduct);
            }

            // handle variants as it should
            if (createVariantsList) await createVariants(createVariantsList);
            if (updateVariantsList) await updateVaraints(updateVariantsList);
            if (deleteVariantsList) await deleteVariants(deleteVariantsList);
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
                mainProducts,
                variantProducts,
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
