import { Box, Button, Modal, Stack, TextField } from "@mui/material"
import { Product } from "../../interfaces/Product"
import { CartProduct, emptyCartProduct } from "../../interfaces/Product"
import { useState, useEffect } from "react"
import { useCart } from "../../contexts/CartContext"

type Props = {
    product: Product
    isOpen: boolean
    handleClose: () => void
}

export default function AddToCartModal({
    product,
    isOpen,
    handleClose,
}: Props) {
    const { addToCart } = useCart()
    const [addingProduct, setAddingProduct] =
        useState<CartProduct>(emptyCartProduct)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setAddingProduct((prev) => ({ ...prev, [id]: value }))
        if (id === "qty") {
            const newTotal: number = addingProduct.price * Number(value)
            setAddingProduct((prev) => ({
                ...prev,
                qty: Number(value),
                totalPrice: newTotal,
            }))
        } else if (id === "price") {
            const newTotal: number = addingProduct.qty * Number(value)
            setAddingProduct((prev) => ({
                ...prev,
                unitPrice: Number(value),
                totalPrice: newTotal,
            }))
        } else if (id === "totalPrice") {
            const newUnitPrice = Number(
                (Number(value) / addingProduct.qty).toFixed(2),
            )
            setAddingProduct((prev) => ({
                ...prev,
                unitPrice: newUnitPrice,
                totalPrice: Number(value),
            }))
        }
    }

    const handleSubmit = () => {
        try {
            addToCart(addingProduct)
            handleClose()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (product !== null) {
            const initialCartProduct = {
                ...emptyCartProduct,
                ...product,
                totalPrice: product.price,
            }
            setAddingProduct(initialCartProduct)
        }
    }, [product])

    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1,
                    borderRadius: 2,
                }}
            >
                <TextField
                    disabled
                    type="text"
                    label="Product Name"
                    value={product.name}
                />
                <TextField
                    type="number"
                    id="price"
                    label="Unit Price"
                    value={addingProduct.price}
                    onChange={handleChange}
                />
                <TextField
                    type="number"
                    id="qty"
                    label="Quantity"
                    value={addingProduct?.qty}
                    onChange={handleChange}
                />
                <TextField
                    type="number"
                    id="totalPrice"
                    label="Total Price"
                    value={addingProduct?.totalPrice}
                    onChange={handleChange}
                />
                <Stack direction="row" gap={1} justifyContent="center">
                    <Button variant="contained" onClick={handleSubmit}>
                        Add
                    </Button>
                    <Button variant="outlined" onClick={handleClose}>
                        Cancel
                    </Button>
                </Stack>
            </Box>
        </Modal>
    )
}
