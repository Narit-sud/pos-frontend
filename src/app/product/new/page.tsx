"use client"
import { useState, useContext } from "react"
import { useCategory } from "@/contexts/Category"

interface Product {
    id?: number
    name: string
    category: number
    price: number
    cost: number
    stock: number
}
const defaultInputStyle = "p-2 border rounded"

export default function Page() {
    const categories = useCategory()
    const [thisProduct, setThisProduct] = useState<Product>({
        name: "",
        category: 0,
        price: 0,
        cost: 0,
        stock: 0,
    })
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex flex-col p-2">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        value={thisProduct.name}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="category">Category</label>
                    <select
                        value={thisProduct.category}
                        className={defaultInputStyle}
                    >
                        {categories.map((cat) => {
                            return (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            )
                        })}
                        <option></option>
                    </select>
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        value={thisProduct.name}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        value={thisProduct.name}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        value={thisProduct.name}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        value={thisProduct.name}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
            </form>
        </div>
    )
}
