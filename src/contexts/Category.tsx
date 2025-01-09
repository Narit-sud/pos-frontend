import React, { createContext, useEffect, useState, useContext } from "react"
import { categoryService } from "@/services/category"
import { ReactNode } from "react"

interface Category {
    id: number
    name: string
    detail: string
}

interface CategoryContextType {
    categoryList: Category[]
}

interface CategoryProviderProps {
    children: ReactNode
}

const CategoryContext = createContext<CategoryContextType | undefined>(
    undefined,
)

export function CategoryProvider({ children }: CategoryProviderProps) {
    const [categoryList, setCategoryList] = useState<Category[]>([])
    const getCategories = async () => {
        const categories = await categoryService.getAll()
        setCategoryList(categories)
    }
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <CategoryContext.Provider value={{ categoryList }}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = () => {
    const context = useContext(CategoryContext)
    if (!context) {
        throw new Error("useCategory must be used within a CategoryPrivider")
    }
    return context
}
export default CategoryProvider
