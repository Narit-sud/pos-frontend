import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { CustomerType } from "./types";
import { getAllCustomers } from "./services";

type Props = {
    children: ReactNode;
};

type CustomerContextType = {
    customers: CustomerType[];
};

const CustomerContext = createContext<CustomerContextType | undefined>(
    undefined,
);

export function CustomerProvider({ children }: Props) {
    const [customers, setCustomers] = useState<CustomerType[]>([]);

    const loadCustomers = async () => {
        const load = await getAllCustomers();
        setCustomers(load);
    };

    useEffect(() => {
        loadCustomers();
    }, []);

    return (
        <CustomerContext.Provider value={{ customers }}>
            {children}
        </CustomerContext.Provider>
    );
}

export function useCustomer() {
    const context = useContext(CustomerContext);
    if (!context) {
        throw new Error(
            "Customer context must be used within customer provider tag",
        );
    }
    return context;
}
