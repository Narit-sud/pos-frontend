import {
    Modal,
    Box,
    Typography,
    Stack,
    Button,
    Grid2 as Grid,
} from "@mui/material"
import { useCart } from "../../contexts/CartContext"
import { useEffect, useState } from "react"
import { CartProduct } from "../../interfaces/Product"
import Delete from "@mui/icons-material/Delete"
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add"

type Props = {
    isOpen: boolean
    handleClose: () => void
}
export default function CartModal({ isOpen, handleClose }: Props) {
    const { cart, removeFromCart, updateCart } = useCart()
    const [openEditModal, setOpenEditModal] = useState(false)

    const handleSaveCart = () => {}

    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "90vw", md: "75vw", xl: "60vw" },
                    height: "80vh",
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1,
                    p: 1,
                    overflowY: "scroll",
                    borderRadius: 2,
                }}
            >
                <Button variant="outlined">Load Cart</Button>
                <Box
                    sx={{
                        height: "55%",
                        overflow: "scroll",
                        overflowBlock: "scroll",
                        border: "1px solid gray",
                        borderRadius: 1,
                    }}
                >
                    <Grid container sx={{ textAlign: "center" }}>
                        <Grid size={3}>Name</Grid>
                        <Grid size={2}>Quantity</Grid>
                        <Grid size={2}>Price</Grid>
                        <Grid size={2}>Total Price</Grid>
                        <Grid size={2}>Options</Grid>
                    </Grid>
                    {cart?.map((item) => {
                        return (
                            <Grid
                                key={item.id}
                                container
                                direction="row"
                                sx={{
                                    textAlign: "center",
                                    placeItems: "center",
                                }}
                            >
                                <Grid size={3}>
                                    <Typography>{item.name}</Typography>
                                </Grid>

                                <Grid
                                    size={2}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Button
                                        variant="text"
                                        onClick={() => {
                                            updateCart(item.id!, 1)
                                        }}
                                        sx={{ transform: "scale(0.5)" }}
                                    >
                                        <AddIcon />
                                    </Button>
                                    <Button variant="text">{item.qty}</Button>
                                    <Button
                                        variant="text"
                                        onClick={() => {
                                            updateCart(item.id!, -1)
                                        }}
                                        sx={{ transform: "scale(0.5)" }}
                                    >
                                        <RemoveIcon />
                                    </Button>
                                </Grid>
                                <Grid size={2}>
                                    <Button variant="outlined">
                                        {item.price}
                                    </Button>
                                </Grid>
                                <Grid size={2}>
                                    <Button variant="outlined">
                                        {item.totalPrice}
                                    </Button>
                                </Grid>
                                <Grid
                                    size={3}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        onClick={() => {
                                            removeFromCart(item.id!)
                                        }}
                                    >
                                        <Delete />
                                    </Button>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Box>
                <Button variant="contained">Check out</Button>
                <Button variant="text">Save for later</Button>
                <Button variant="outlined" onClick={handleClose}>
                    Close window
                </Button>
            </Box>
        </Modal>
    )
}
