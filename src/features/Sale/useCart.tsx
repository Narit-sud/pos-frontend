import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { SaleItemClass } from "./classes/SaleItemClass";
import { localCurrentCart } from "./utils/currentCart";
import { SaleOrderClass } from "./classes/SaleItemOrderClass";

type Props = {
    children: ReactNode;
};

type CartContextType = {
    currentCart: SaleItemClass[];
    savedOrder: SaleItemClass[];
    customerUUID: string;
    grandTotal: number;
    order: SaleOrderClass;
    addToCart: (newItem: SaleItemClass) => void;
    updateCustomer: (newCustomerUUID: string) => void;
    removeFromCart: (removeItemUUID: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: Props) {
    const [currentCart, setCurrentCart] = useState<SaleItemClass[]>([]);
    const [savedOrder, setSavedOrder] = useState<SaleItemClass[]>([]);
    const [customerUUID, setCustomerUUID] = useState<string>("");
    const [grandTotal, setGrandTotal] = useState<number>(0);
    const [order, setOrder] = useState<SaleOrderClass>(new SaleOrderClass());

    const updateCustomer = (newCustomerUUID: string) => {
        setCustomerUUID(newCustomerUUID);
    };

    const addToCart = (newItem: SaleItemClass) => {
        let localCart = localCurrentCart.get();
        localCart.push(newItem);
        localCurrentCart.set(localCart);
    };

    const removeFromCart = (removeItemUUID: string): void => {
        let localCart = localCurrentCart.get();
        localCart.filter((item) => item.uuid !== removeItemUUID);
        setCurrentCart(localCart);
        localCurrentCart.set(localCart);
    };

    useEffect(() => {
        setCurrentCart(localCurrentCart.get());
    }, []);
    return (
        <CartContext.Provider
            value={{
                currentCart,
                savedOrder,
                customerUUID,
                grandTotal,
                order,
                addToCart,
                updateCustomer,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context)
        throw new Error(
            "Cart Context must be used within cart context provider",
        );
    return context;
}
