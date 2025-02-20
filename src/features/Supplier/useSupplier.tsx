import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import { SupplierType } from "./types";
import { getAllSupplier } from "./services";

type SupplierContextType = {
    suppliers: SupplierType[];
};

type Props = {
    children: ReactNode;
};

const SupplierContext = createContext<SupplierContextType | undefined>(
    undefined,
);

export function SupplierProvider({ children }: Props) {
    const [suppliers, setSuppliers] = useState<SupplierType[]>([]);
    const loadSuppliers = async () => {
        try {
            const load = await getAllSupplier();
            setSuppliers(load);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadSuppliers();
    }, []);
    return (
        <SupplierContext.Provider value={{ suppliers }}>
            {children}
        </SupplierContext.Provider>
    );
}

export function useSupplier() {
    const context = useContext(SupplierContext);
    if (!context)
        throw new Error(
            "Supplier context must be used within supplier provider tag",
        );
    return context;
}
