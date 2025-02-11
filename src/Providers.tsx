import { ReactNode } from "react";
import { AuthProvider } from "./features/Auth/useAuth";
import { ProductProvider } from "./features/Product/index";
import { CategoryProvider } from "./features/Category/index";
import { CustomerProvider } from "./features/Customer/useCustomer";
import { CartProvider } from "./features/Sale/useCart";

type Props = {
    children: ReactNode;
};

function Providers({ children }: Props) {
    return (
        <AuthProvider>
            <ProductProvider>
                <CategoryProvider>
                    <CustomerProvider>
                        <CartProvider>{children}</CartProvider>
                    </CustomerProvider>
                </CategoryProvider>
            </ProductProvider>
        </AuthProvider>
    );
}

export default Providers;
