import { CategoryProvider } from "@/contexts/Category"
import { ReactNode } from "react"
interface Props {
    children: ReactNode
}

export function Providers({ children }: Props) {
    return <CategoryProvider>{children}</CategoryProvider>
}
