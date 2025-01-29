import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { ProductProvider } from "../features/Product/index";
import { CategoryProvider } from "../features/Category/index";
import CartProvider from "./CartContext";

type Props = {
    children: ReactNode;
};

function Providers({ children }: Props) {
    return (
        <AuthProvider>
            <ProductProvider>
                <CategoryProvider>
                    <CartProvider>{children}</CartProvider>
                </CategoryProvider>
            </ProductProvider>
        </AuthProvider>
    );
}

export default Providers;
