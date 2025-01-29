import { Product } from "../interfaces/Product"
import {
    Button,
    Box,
    Typography,
    Modal,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Stack,
} from "@mui/material"
import { useNavigate } from "react-router"

type Props = {
    product: Product
    isOpen: boolean
    handleOpen(): void
    handleClose(): void
}

export default function ProductModal({
    product,
    isOpen,
    handleOpen,
    handleClose,
}: Props) {
    const navigate = useNavigate()

    return (
        <div>
            <Modal open={isOpen} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        // border: "1px solid #000",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">Id:</TableCell>
                                <TableCell align="center">
                                    {product.id}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">
                                    {product.name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Category</TableCell>
                                <TableCell align="center">
                                    {product.category}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">
                                    {product.price}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Cost</TableCell>
                                <TableCell align="center">
                                    {product.cost}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Stock</TableCell>
                                <TableCell align="center">
                                    {product.stock}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Detail</TableCell>
                                <TableCell align="center">
                                    {product.detail}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Stack justifyContent="center" direction="row" gap={1}>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                navigate(`edit/${product.id}`)
                            }}
                        >
                            Edit
                        </Button>
                        <Button variant="contained" onClick={handleClose}>
                            Close
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}
