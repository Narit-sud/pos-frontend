"use client"
import { useCategory } from "@/contexts/Category"
import { useEffect, useState } from "react"
import { ProductCreate, ProductUpdate } from "@/interfaces/Product"
import { productService } from "@/services/product"

interface Props {
    product?: {
        id: number
        name: string
        category: number
        price: number
        cost: number
        stock: number
        detail: string
    }
    productId?: string
}
const defaultInputStyle = "p-2 border rounded"

function ProductForm(props: Props) {
    const [mode, setMode] = useState("")
    const { productId } = props

    const { categoryList } = useCategory()
    const [thisProduct, setThisProduct] = useState<ProductUpdate>({
        id: 0,
        name: "",
        category: 0,
        price: 0,
        cost: 0,
        stock: 0,
        detail: "",
    })

    const ckeckMode = async () => {
        if (productId) {
            setMode("edit")
            const loadProduct = await productService.getById(productId)
            setThisProduct({ ...loadProduct, id: productId })
        } else {
            setMode("create")
        }
    }

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { id, value } = e.target

        setThisProduct((prev) => ({
            ...prev,
            [id]:
                id === "category" ||
                id === "price" ||
                id === "cost" ||
                id === "stock"
                    ? Number(value)
                    : value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (mode === "edit") {
            // do something
            const updatedProduct = thisProduct
            const updated = await productService.update(updatedProduct)
            if (updated) {
                alert("update success")
            } else {
                alert("update failed")
            }
            return
        }

        if (mode === "create") {
            const newProduct = thisProduct
            const created = await productService.create(newProduct)
            if (created) {
                alert("create new product success")
            } else {
                alert("create failed")
            }
            return
        }
    }

    useEffect(() => {
        ckeckMode()
    }, [])
    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex flex-col p-2">
                    <label htmlFor="name">Product Name</label>
                    <input
                        id="name"
                        type="text"
                        value={thisProduct.name}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        value={thisProduct.category}
                        className={defaultInputStyle}
                        onChange={handleInputChange}
                    >
                        {categoryList.map((cat) => {
                            return (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        type="number"
                        value={thisProduct.price}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="cost">Cost</label>
                    <input
                        id="cost"
                        type="number"
                        value={thisProduct.cost}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="stock">Stock</label>
                    <input
                        id="stock"
                        type="number"
                        value={thisProduct.stock}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="detail">Detail</label>
                    <input
                        id="detail"
                        type="text"
                        value={thisProduct.detail}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <button type="submit" className={defaultInputStyle}>
                    Submit
                </button>
            </form>
        </>
    )
}
export default ProductForm
