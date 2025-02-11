import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { SaleItemClass } from "./classes/SaleItemClass";
import { SaleOrderClass } from "./classes/SaleItemOrderClass";

type Props = {
    children: ReactNode;
};

type CartContextType = {
    currentCart: SaleItemClass[];
    savedCart: SaleItemClass[];
    saleOrder: SaleOrderClass;
    updateCustomer: (customerUUID: string) => void;
    cartLength: number;
    saveCart: () => void;
    grandTotal: number;
    addToCart: (newItem: SaleItemClass) => void;
    removeFromCart: (removeItemUUID: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: Props) {
    const [currentCart, setCurrentCart] = useState<SaleItemClass[]>([]);
    const [savedCart, setSavedCart] = useState<SaleItemClass[]>([]);
    const [saleOrder, setSaleOrder] = useState<SaleOrderClass>(
        new SaleOrderClass(),
    );
    const [cartLength, setCartLength] = useState<number>(0);
    const [grandTotal, setGrandTotal] = useState(0);

    const updateTotal = () => {
        setGrandTotal(
            currentCart.reduce((acc, curr) => acc + Number(curr.total), 0),
        );
    };
    const updateLength = () => {
        setCartLength(currentCart.length);
    };

    const addToCart = (newItem: SaleItemClass) => {
        const addedItem = currentCart.find(
            (prod) => prod.uuid === newItem.uuid,
        );

        if (addedItem) {
            // If item already in the cart, update the qty
            setCurrentCart((prev) =>
                prev.map((item) =>
                    item.uuid === newItem.uuid
                        ? {
                              ...item,
                              qty: item.qty + Number(newItem.qty),
                              // new total / new qty = new price
                              price:
                                  (Number(item.total) + Number(newItem.total)) /
                                  (Number(item.qty) + Number(newItem.qty)),
                              total: Number(item.total) + Number(newItem.total),
                          }
                        : item,
                ),
            );
        } else {
            // If item is not in the cart, add it
            setCurrentCart((prev) => [...prev, newItem]);
        }
    };

    const removeFromCart = (removeItemUUID: string) => {
        setCurrentCart((prev) =>
            prev.filter((item) => item.uuid !== removeItemUUID),
        );
        setCartLength(currentCart.length - 1);
    };

    const updateCustomer = (customerUUID: string) => {
        setSaleOrder((prev) => ({ ...prev, customerUUID }));
    };

    const saveCart = () => {
        setCurrentCart((prev) =>
            prev.map((item) => ({ ...item, receiptUUID: saleOrder.uuid })),
        );
        setSaleOrder((prev) => ({ ...prev, saleItems: currentCart }));
        console.log(saleOrder);
    };

    const loadCart = () => {};

    useEffect(() => {
        updateTotal();
        updateLength();
    }, [currentCart]);
    return (
        <CartContext.Provider
            value={{
                currentCart,
                savedCart,
                saleOrder,
                updateCustomer,
                cartLength,
                saveCart,
                grandTotal,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("Cart context must be used within cart provider tag");
    }
    return context;
}
