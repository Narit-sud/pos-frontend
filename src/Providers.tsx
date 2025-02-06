import { ReactNode } from "react";
import { AuthProvider } from "./features/Auth/useAuth";
import { ProductProvider } from "./features/Product/index";
import { CategoryProvider } from "./features/Category/index";

type Props = {
    children: ReactNode;
};

function Providers({ children }: Props) {
    return (
        <AuthProvider>
            <ProductProvider>
                <CategoryProvider>{children}</CategoryProvider>
            </ProductProvider>
        </AuthProvider>
    );
}

export default Providers;
