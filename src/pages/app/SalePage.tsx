import {
    Badge,
    Box,
    Button,
    CardContent,
    Grid2 as Grid,
    Typography,
} from "@mui/material"
import { useEffect, useState } from "react"
import { useProduct } from "../../contexts/ProductContext"
import { emptyProduct, Product } from "../../interfaces/Product"
import AddToCartModal from "../../components/sale/AddToCartModal"
import CartModal from "../../components/sale/CartModal"
import { useNavigate } from "react-router"
import { useCart } from "../../contexts/CartContext"

export default function SalePage() {
    const navigate = useNavigate()
    const { products } = useProduct()
    const { cart } = useCart()
    const [addingModalOpen, setAddingModalOpen] = useState<boolean>(false)
    const [cartModalOpen, setCartModalOpen] = useState<boolean>(false)
    const [displayProducts, setDisplayProducts] = useState<Product[]>([
        emptyProduct,
    ])
    const [selectedProduct, setSelectedProduct] =
        useState<Product>(emptyProduct)

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product)
        setAddingModalOpen(true)
    }
    useEffect(() => {
        setDisplayProducts(products)
    }, [products])

    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    bgcolor: "paleturquoise",
                }}
            >
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate(-1)
                    }}
                >
                    Back
                </Button>
                <Badge
                    badgeContent={cart.length}
                    color="primary"
                    sx={{ bgcolor: "red" }}
                >
                    <Button
                        variant="contained"
                        onClick={() => {
                            setCartModalOpen(true)
                        }}
                    >
                        Cart
                    </Button>
                </Badge>
            </Box>
            <Grid
                container
                sx={{
                    w: "full",
                    h: "full",
                    p: 1,
                    bgcolor: "palegreen",
                    gap: 1,
                    justifyContent: "center",
                }}
            >
                {displayProducts?.map((prod) => {
                    return (
                        <Grid
                            size={{ xs: 3, md: 2, lg: 2 }}
                            key={prod.id}
                            sx={{
                                bgcolor: "white",
                                border: 1,
                                borderRadius: 2,
                                ":hover": { bgcolor: "lightgrey" },
                            }}
                        >
                            <CardContent
                                onClick={() => handleProductClick(prod)}
                                sx={{ textAlign: "center" }}
                            >
                                <Typography>{prod.name}</Typography>
                                <Typography>{prod.price}</Typography>
                            </CardContent>
                        </Grid>
                    )
                })}
            </Grid>

            {/* Adding modal */}
            {addingModalOpen && (
                <AddToCartModal
                    isOpen={addingModalOpen}
                    product={selectedProduct}
                    handleClose={() => {
                        setAddingModalOpen(false)
                    }}
                />
            )}

            {/* Cart mocal */}
            {cartModalOpen && (
                <CartModal
                    isOpen={cartModalOpen}
                    handleClose={() => {
                        setCartModalOpen(false)
                    }}
                />
            )}
        </div>
    )
}
