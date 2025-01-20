import { useEffect, useState } from "react"
import { Product, emptyProduct } from "../interfaces/Product"
import { getAllProduct } from "../services/product"
import { useNavigate } from "react-router"
import { useCategory } from "../contexts/CategoryContext"
import { Category, emptyCategory } from "../interfaces/Category"

export default function ProductPageTw() {
    const navigate = useNavigate()
    const { categories } = useCategory()
    const [products, setProducts] = useState<Product[]>([])
    const [prodModal, setProdModal] = useState<Product>(emptyProduct)
    const [prodModalCat, setProdModalCat] = useState<Category>(emptyCategory)

    const loadProducts = async () => {
        const load = await getAllProduct()
        if (load.length > 0) {
            setProducts(load)
        }
    }

    const handleCreateButton = () => {
        navigate("create")
    }

    const handleRowClick = (prod: Product) => {
        const targetCat = categories.find(
            (cat) => cat.id === prod.category,
        ) as Category
        setProdModalCat(targetCat)
        setProdModal(prod)
        ;(
            document.getElementById("product_modal") as HTMLFormElement
        ).showModal()
    }

    const handleModalEditButton = () => {
        navigate(`edit/${prodModal.id}`)
    }
    useEffect(() => {
        loadProducts()
    }, [])
    return (
        <div>
            <div>
                <button
                    className="btn btn-primary"
                    onClick={handleCreateButton}
                >
                    Create
                </button>
            </div>

            {/* modal */}
            <dialog id="product_modal" className="modal">
                <div className="modal-box">
                    <div className="flex justify-center gap-2 text-lg">
                        <div className="flex flex-col text-right font-bold">
                            <span>Name: </span>
                            <span>Category: </span>
                            <span>Price: </span>
                            <span>Cost: </span>
                            <span>Stock: </span>
                            <span>Detail: </span>
                        </div>
                        <div className="flex flex-col text-left">
                            <span>{prodModal?.name}</span>
                            <span>{prodModalCat?.name}</span>
                            <span>{prodModal?.price}</span>
                            <span>{prodModal?.cost}</span>
                            <span>{prodModal?.stock}</span>
                            <span>{prodModal?.detail}</span>
                        </div>
                    </div>
                    <div className="modal-action">
                        <button className="btn" onClick={handleModalEditButton}>
                            Edit
                        </button>
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            {/* modal */}
            <table className="table">
                <thead className="text-lg">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Cost</th>
                        <th>Stock</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prod) => {
                        return (
                            <tr
                                key={prod.id}
                                className="hover"
                                onClick={() => handleRowClick(prod)}
                            >
                                <td>{prod.id}</td>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td>{prod.price}</td>
                                <td>{prod.cost}</td>
                                <td>{prod.stock}</td>
                                <td>{prod.detail}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
