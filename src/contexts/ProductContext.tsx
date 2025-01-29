import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"
import { emptyProduct, Product } from "../interfaces/Product"
import {
    createProductService,
    deleteProductService,
    getAllProductService,
    updateProductService,
} from "../services/product"

const ProductContext = createContext<ProductContextType | undefined>(undefined)

type Props = {
    children: ReactNode
}
interface ProductContextType {
    products: Product[]
    createProductContext: (newProduct: Product) => Promise<void>
    updateProductContext: (updatedProduct: Product) => Promise<void>
    deleteProductContext: (id: number) => Promise<void>
}

export default function ProductProvider({ children }: Props) {
    const [products, setProducts] = useState<Product[]>([emptyProduct])

    const loadProductContext = async () => {
        const data = await getAllProductService()
        if (data) {
            setProducts(data)
        }
    }

    const createProductContext = async (newProduct: Product): Promise<void> => {
        try {
            const createdId = await createProductService(newProduct)
            const addingNewProduct = {
                ...newProduct,
                id: createdId,
                cost: Number(newProduct.cost),
                price: Number(newProduct.price),
            } as Product

            setProducts((prev) => [...prev, addingNewProduct])
        } catch (error) {
            alert("error create prodruct")
            throw error
        }
    }

    const updateProductContext = async (
        updatedProduct: Product,
    ): Promise<void> => {
        try {
            await updateProductService(updatedProduct)
            const updatedList = products.filter(
                (prod) => prod.id !== updatedProduct.id,
            )
            // const refinedUpdatedProduct:Product = {...updatedProduct, cost:Number(updatedProduct.cost.toFixed(2)), price:Number(updatedProduct.price.toFixed(2))}
            updatedList.push(updatedProduct)
            updatedList.sort((a, b) => {
                if (a.id !== null && b.id !== null) {
                    if (a.id > b.id) {
                        return 1
                    }

                    if (a.id < b.id) {
                        return -1
                    }
                }

                return 0
            })
            setProducts(updatedList)
        } catch (error) {
            alert("error update product")
            throw error
        }
    }

    const deleteProductContext = async (id: number): Promise<void> => {
        try {
            await deleteProductService(id)
            const updatedList = products.filter((prod) => prod.id !== id)
            setProducts(updatedList)
        } catch (error) {
            alert("error delete product")
            throw error
        }
    }

    useEffect(() => {
        loadProductContext()
    }, [])
    return (
        <ProductContext.Provider
            value={{
                products,
                createProductContext,
                updateProductContext,
                deleteProductContext,
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error("Product Context must be used in product provider")
    }
    return context
}
