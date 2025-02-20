import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { localCart } from "./utils/localCart";
import { localOrder } from "./utils/localOrder";
import { CartItemType } from "./types";
import { v4 as uuidv4 } from "uuid";
import { OrderType } from "./types";

type Props = {
    children: ReactNode;
};

type CartContextType = {
    currentCart: CartItemType[];
    customerUUID: string;
    grandTotal: number;
    order: OrderType;
    loadedFromUUID: string | undefined; // Added
    isCartModified: boolean; // Added
    addToCart: (newItem: CartItemType) => void;
    updateCustomer: (newCustomerUUID: string) => void;
    removeFromCart: (removeItemUUID: string) => void;
    clearCart: () => void;
    saveCart: () => void;
    loadSavedOrder: (savedOrder: OrderType, forceClear?: boolean) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: Props) {
    const [currentCart, setCurrentCart] = useState<CartItemType[]>([]);
    const [loadedFromUUID, setLoadedFromUUID] = useState<string | undefined>(
        undefined,
    );
    const [isCartModified, setIsCartModified] = useState(false);
    const [customerUUID, setCustomerUUID] = useState<string>(
        "1290c1d3-37f8-43cc-a70c-de43e1583481",
    );
    const [grandTotal, setGrandTotal] = useState<number>(0);
    const [order, setOrder] = useState<OrderType>({
        uuid: uuidv4(),
        customerUUID: "",
        saleItems: [],
        createdAt: "",
        updatedAt: "",
    });

    const updateCustomer = (newCustomerUUID: string) => {
        setCustomerUUID(newCustomerUUID);
    };

    const addToCart = (newItem: CartItemType) => {
        const existedItem = currentCart.find(
            (item) =>
                item.mainName === newItem.mainName &&
                item.variantUUID === newItem.variantUUID,
        );

        if (existedItem) {
            // Item exists, combine quantities and average the price
            const totalQty = existedItem.qty + newItem.qty;
            const averagePrice = (
                (existedItem.total + newItem.total) /
                totalQty
            ).toFixed(2);

            const updatedItem: CartItemType = {
                ...existedItem,
                qty: totalQty,
                price: Number(averagePrice),
                total: totalQty * Number(averagePrice),
            };

            const updatedCart = currentCart.map((item) =>
                item.uuid === existedItem.uuid ? updatedItem : item,
            );

            setCurrentCart(updatedCart);
            localCart.set(updatedCart);
        } else {
            // New item, add to cart
            const updatedCart = [...currentCart, newItem];
            setCurrentCart(updatedCart);
            localCart.set(updatedCart);
        }
        setIsCartModified(true);
    };

    const removeFromCart = (removeItemUUID: string): void => {
        const updatedCart = currentCart.filter(
            (item) => item.uuid !== removeItemUUID,
        );
        setCurrentCart(updatedCart);
        localCart.set(updatedCart);
        setIsCartModified(true);
    };

    const clearCart = () => {
        setCurrentCart([]);
        setLoadedFromUUID(undefined);
        setIsCartModified(false);
        localCart.clear();
    };

    const saveCart = () => {
        if (currentCart.length === 0) return;

        if (loadedFromUUID && isCartModified) {
            // Update existing saved cart
            const updatedOrder: OrderType = {
                uuid: loadedFromUUID,
                customerUUID,
                saleItems: currentCart,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            localOrder.update(updatedOrder);
        } else if (!loadedFromUUID) {
            // Save as new cart
            const newOrder: OrderType = {
                uuid: uuidv4(),
                customerUUID,
                saleItems: currentCart,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            localOrder.add(newOrder);
        }

        // Clear current cart after saving
        clearCart();
    };

    const loadSavedOrder = (savedOrder: OrderType, forceClear = false) => {
        if (forceClear) {
            clearCart();
        }

        setLoadedFromUUID(savedOrder.uuid);
        setIsCartModified(false);

        // Add all items from saved order to current cart
        savedOrder.saleItems.forEach((item) => {
            const updatedItem = { ...item, receiptUUID: order.uuid };
            addToCart(updatedItem);
        });

        // Update customer if exists
        if (savedOrder.customerUUID) {
            updateCustomer(savedOrder.customerUUID);
        }
    };

    useEffect(() => {
        // Load cart from localStorage on mount
        const savedCart = localCart.get();
        setCurrentCart(savedCart);

        // Initialize new order if none exists
        setOrder({
            uuid: uuidv4(),
            customerUUID,
            saleItems: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });
    }, []);

    useEffect(() => {
        const total = currentCart.reduce((sum, item) => sum + item.total, 0);
        setGrandTotal(Number(total.toFixed(2)));
    }, [currentCart]);

    return (
        <CartContext.Provider
            value={{
                currentCart,
                customerUUID,
                grandTotal,
                order,
                loadedFromUUID,
                isCartModified,
                addToCart,
                updateCustomer,
                removeFromCart,
                clearCart,
                saveCart,
                loadSavedOrder,
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
