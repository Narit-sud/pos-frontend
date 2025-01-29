import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import { emptyProduct, Product } from "../../interfaces/Product"
import { getProductByIdService } from "../../services/product"
import Paper from "@mui/material/Paper"
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
} from "@mui/material"
import { useCategory } from "../../contexts/CategoryContext"
import { useProduct } from "../../contexts/ProductContext"

export default function ProductForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { createProductContext, updateProductContext, deleteProductContext } =
        useProduct()
    const { categories } = useCategory()
    const [product, setProduct] = useState<Product>(emptyProduct)
    const [isProductChange, setIsProductChange] = useState<boolean>(false)

    const loadProduct = async () => {
        if (id) {
            const data = await getProductByIdService(id)
            setProduct(data)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isProductChange) {
            setIsProductChange(true)
        }
        const { id, value } = e.target
        setProduct((prev) => ({ ...prev, [id]: value }))
    }

    const handleSelectOption = (e: SelectChangeEvent) => {
        if (!isProductChange) {
            setIsProductChange(true)
        }
        setProduct((prev) => ({ ...prev, category: Number(e.target.value) }))
    }

    const handleSubmitButton = async () => {
        if (!id) {
            // if no product provided = create mode
            try {
                await createProductContext(product)
                navigate(-1)
            } catch (error) {
                console.error(error)
            }
        } else {
            // if product provided = edit mode
            try {
                updateProductContext(product)
                navigate(-1)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const handleCancelButton = () => {
        if (!isProductChange) {
            navigate(-1)
        } else {
            alert("there is some change!")
        }
    }

    const handleDeleteButton = async () => {
        try {
            if (id) {
                const isConfirm = confirm("Delete this product?")
                if (isConfirm) {
                    deleteProductContext(Number(id))
                }
                // if (confirmDelete) {
                //     await deleteProductService(Number(id))
                // }
                // navigate(-1)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadProduct()
    }, [])
    return (
        <Paper
            sx={{
                my: 4,
                p: 2,
                py: 4,
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <TextField
                id="name"
                type="text"
                value={product.name}
                label="Name"
                onChange={handleInputChange}
            />
            <FormControl>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                    type="number"
                    id="category"
                    label="Category"
                    labelId="category-select-label"
                    value={
                        product.category.toString() || "No category data found"
                    }
                    onChange={handleSelectOption}
                >
                    {categories.map((cat) => {
                        return (
                            <MenuItem key={cat.id} value={cat.id}>
                                {cat.name}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <TextField
                id="price"
                type="number"
                value={product.price}
                label="Price"
                onChange={handleInputChange}
            />
            <TextField
                id="cost"
                type="number"
                value={product.cost}
                label="Cost"
                onChange={handleInputChange}
            />
            <TextField
                id="stock"
                type="number"
                value={product.stock}
                label="Stock"
                onChange={handleInputChange}
            />
            <TextField
                id="detail"
                type="text"
                value={product.detail}
                label="Detail"
                onChange={handleInputChange}
            />
            <Stack direction="row" gap={2} justifyContent="center">
                <Button variant="contained" onClick={handleSubmitButton}>
                    {!id ? "Submit" : "Update"}
                </Button>
                <Button variant="outlined" onClick={handleCancelButton}>
                    Cancel
                </Button>
                {id && (
                    <Button
                        variant="text"
                        onClick={handleDeleteButton}
                        sx={{ alignSelf: "self-end" }}
                    >
                        Delete
                    </Button>
                )}
            </Stack>
        </Paper>
    )
}
