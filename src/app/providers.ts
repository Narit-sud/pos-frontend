import CategoryProvider from "@/contexts/Category";

export function Providers({children}){
    return (
    <CategoryProvider>{children}</CategoryProvider>
    )
}
