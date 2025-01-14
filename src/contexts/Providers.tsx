import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

type Props = {
    children: ReactNode;
};

function Providers({ children }: Props) {
    return <AuthProvider>{children}</AuthProvider>;
}

export default Providers;
