import { ReactNode } from "react"
import { AuthProvider } from "./AuthContext"
import { CategoryProvider } from "./CategoryContext"

type Props = {
    children: ReactNode
}

function Providers({ children }: Props) {
    return (
        <AuthProvider>
            <CategoryProvider>{children}</CategoryProvider>
        </AuthProvider>
    )
}

export default Providers
