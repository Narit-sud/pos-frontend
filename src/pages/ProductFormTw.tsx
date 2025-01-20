import { useEffect, useState } from "react"
import { Product, emptyProduct } from "../interfaces/Product"
import { useCategory } from "../contexts/CategoryContext"
import {
    createProduct,
    getProductById,
    updateProduct,
} from "../services/product"
import { useParams } from "react-router"
import { useNavigate } from "react-router"

export default function ProductFormTw() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [product, setProduct] = useState<Product>(emptyProduct)
    const { categories } = useCategory()

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { id, value } = e.target
        setProduct((prev) => ({ ...prev, [id]: value }))
        return
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (id === undefined) {
            try {
                const isCreated = await createProduct(product)
                if (isCreated.success) {
                    alert(isCreated.message)
                    navigate("/app/product")
                }
            } catch (error) {
                alert(error.data.message)
                console.error(error)
            }
        } else {
            try {
                const isUpdated = await updateProduct(product)
                if (isUpdated) {
                    navigate("/app/product")
                } else {
                    alert(isUpdated.message)
                }
            } catch (error) {
                alert(error.data.message)
                console.error(error)
            }
        }
    }

    const loadProduct = async () => {
        try {
            if (id !== undefined) {
                const load = await getProductById(id)
                setProduct(load ?? emptyProduct)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadProduct()
    }, [id])

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={product.name}
                    onChange={handleChange}
                    className="rounded border px-2 py-4"
                />
                <select
                    id="category"
                    value={product.category ?? 0}
                    onChange={handleChange}
                    className="rounded border px-2 py-4"
                >
                    {categories?.map((cat) => {
                        return (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        )
                    })}
                </select>
                <input
                    type="number"
                    id="price"
                    placeholder="Price"
                    value={product.price ?? ""}
                    onChange={handleChange}
                    className="rounded border px-2 py-4"
                />
                <input
                    type="number"
                    id="cost"
                    placeholder="Cost"
                    value={product.cost ?? ""}
                    onChange={handleChange}
                    className="rounded border px-2 py-4"
                />
                <input
                    type="number"
                    id="stock"
                    placeholder="Stock"
                    value={product.stock ?? ""}
                    onChange={handleChange}
                    className="rounded border px-2 py-4"
                />
                <input
                    type="text"
                    id="detail"
                    placeholder="Detail"
                    value={product.detail}
                    onChange={handleChange}
                    className="rounded border px-2 py-4"
                />
                <button className="rounded border px-2 py-4" type="submit">
                    Submit
                </button>
            </div>
        </form>
    )
}
