import { ReactNode } from "react";
import { AuthProvider } from "./features/Auth/useAuth";
import { ProductProvider } from "./features/Product/index";
import { CategoryProvider } from "./features/Category/index";
import { CustomerProvider } from "./features/Customer/useCustomer";
import { CartProvider } from "./features/PointOfSale/useCart";
import { SupplierProvider } from "./features/Supplier";

type Props = {
    children: ReactNode;
};

function Providers({ children }: Props) {
    return (
        <AuthProvider>
            <ProductProvider>
                <CategoryProvider>
                    <SupplierProvider>
                        <CustomerProvider>
                            <CartProvider>{children}</CartProvider>
                        </CustomerProvider>
                    </SupplierProvider>
                </CategoryProvider>
            </ProductProvider>
        </AuthProvider>
    );
}

export default Providers;
