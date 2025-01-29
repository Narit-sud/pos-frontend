import { TableRow, TableCell } from "@mui/material"
import { Product } from "../../interfaces/Product"

type Props = {
    product: Product
    category: string
    onClick: () => void
}
export default function ProductRow({ product, category, onClick }: Props) {
    return (
        <TableRow sx={{ ":hover": { bgcolor: "lightgray" } }} onClick={onClick}>
            <TableCell align="center">{product.id}</TableCell>
            <TableCell align="center">{product.name}</TableCell>
            <TableCell align="center">{category}</TableCell>
            <TableCell align="center">{product.price}</TableCell>
            <TableCell align="center">{product.cost}</TableCell>
            <TableCell align="center">{product.stock}</TableCell>
            <TableCell align="center">{product.detail}</TableCell>
        </TableRow>
    )
}
