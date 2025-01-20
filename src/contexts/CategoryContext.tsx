import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"
import { getAllCategories } from "../services/category"

interface CategoryContextType {
    categories: Category[]
}

interface Category {
    id: number
    name: string
}
const CategoryContext = createContext<CategoryContextType | undefined>(
    undefined,
)

interface Props {
    children: ReactNode
}
export function CategoryProvider({ children }: Props) {
    const [categories, setCategories] = useState<Category[]>([])

    const loadCategory = async () => {
        const loadedCategories = await getAllCategories()
        setCategories(loadedCategories)
    }

    useEffect(() => {
        loadCategory()
    }, [])
    return (
        <CategoryContext.Provider value={{ categories }}>
            {children}
        </CategoryContext.Provider>
    )
}

export function useCategory() {
    const context = useContext(CategoryContext)
    if (!context) {
        throw new Error("Category context must be used in category provider")
    }
    return context
}
