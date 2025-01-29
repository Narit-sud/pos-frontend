import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"
import { CartProduct } from "../interfaces/Product"

interface CartContextType {
    cart: CartProduct[]
    addToCart: (addingProduct: CartProduct) => void
    removeFromCart: (prodId: number) => void
    submitCart: () => void
    updateCart: (prodId: number, changeQty: number) => void
    saveCart: () => void
    loadCart: () => void
}
type Props = {
    children: ReactNode
}
const CartContext = createContext<CartContextType | undefined>(undefined)

export default function CartProvider({ children }: Props) {
    const [cart, setCart] = useState<CartProduct[]>([])

    const updateTotalPrice = (mostRecentCart: CartProduct[]) => {
        const calculatedTotalPrice = mostRecentCart.map((prod) => ({
            ...prod,
            totalPrice: prod.qty * prod.price,
        }))
        return calculatedTotalPrice
    }

    const addToCart = (addingProduct: CartProduct) => {
        const productExisted = cart.find((prod) => prod.id === addingProduct.id)
        if (productExisted) {
            const updatedCart = cart.map((prev) =>
                prev.id === addingProduct.id
                    ? { ...prev, qty: prev.qty + addingProduct.qty }
                    : prev,
            )
            setCart(updateTotalPrice(updatedCart))
        } else {
            setCart((prev) => [...prev, addingProduct])
        }
    }

    const removeFromCart = (prodId: number) => {
        const updatedCart = cart.filter((item) => item.id !== prodId)
        setCart(updatedCart)
    }

    const submitCart = () => {}

    const updateCart = (prodId: number, changeQty: number) => {
        // prodId = where to add or subtract changeQty number to which item
        // changeQty = how much change? 1, 2, -4, -1?
        const updatedCart = cart.map((prod) =>
            prod.id === prodId ? { ...prod, qty: prod.qty + changeQty } : prod,
        )
        setCart(updateTotalPrice(updatedCart))
    }

    const saveCart = () => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    const loadCart = () => {
        localStorage.getItem("cart")
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                submitCart,
                updateCart,
                saveCart,
                loadCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("Cart Context must be used within cart provider")
    }
    return context
}
