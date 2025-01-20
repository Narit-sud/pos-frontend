import {
    FormControl,
    MenuItem,
    Select,
    TextField,
    SelectChangeEvent,
} from "@mui/material"
import { useEffect, useState } from "react"
import { useCategory } from "../contexts/CategoryContext"
import { useParams } from "react-router"
import { productService } from "../services/product"
import { useNavigate } from "react-router"

interface Product {
    id: number
    name: string
    category: number
    price: number
    cost: number
    stock: number
    detail: string
}

function ProductForm() {
    const navigate = useNavigate()
    const { categories } = useCategory()
    const { id } = useParams()
    const [product, setProduct] = useState<Product>({
        id: 0,
        name: "",
        category: 0,
        price: 0,
        cost: 0,
        stock: 0,
        detail: "",
    } as Product)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setProduct((prev) => ({ ...prev, [id]: value }))
        console.log(product)
    }

    const handleSelectChange = (e: SelectChangeEvent) => {
        setProduct((prev) => ({
            ...prev,
            ["category"]: Number(e.target.value),
        }))
        console.log(product)
    }

    const loadForEdit = async (id: string | number) => {
        const data = (await productService.getById(id)) as Product
        if (data !== null) {
            setProduct(data)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            loadForEdit(id)
        }
    }, [id])

    return (
        <div>
            <FormControl>
                <TextField
                    type="text"
                    id="name"
                    label="Name"
                    value={product.name}
                    onChange={handleInputChange}
                    required
                />
                <Select
                    id="category"
                    label="Category"
                    value={product.category}
                    onChange={handleSelectChange}
                    required
                >
                    {categories &&
                        categories.map((item) => {
                            return (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            )
                        })}
                </Select>
                <TextField
                    type="number"
                    id="price"
                    label="Price"
                    value={product.price}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    type="number"
                    id="cost"
                    label="Cost"
                    value={product.cost}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    type="number"
                    id="stock"
                    label="Stock"
                    value={product.stock}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    type="text"
                    id="detail"
                    label="Detail"
                    value={product.detail}
                    onChange={handleInputChange}
                />
            </FormControl>
        </div>
    )
}
export default ProductForm
