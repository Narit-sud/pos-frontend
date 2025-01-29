import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import ProductRow from "./ProductRow"
import { emptyProduct, Product } from "../../interfaces/Product"
import { useCategory } from "../../contexts/CategoryContext"
import ProductModal from "../../modals/ProductModal"
import ProductModalTw from "../../modals/ProductModalTw"

const headRowStyle = { textAlign: "center", fontWeight: "bold", fontSize: 16 }

type Props = {
    products: Product[]
}
export default function ProductTable({ products }: Props) {
    const { categories } = useCategory()
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalProduct, setModalProduct] = useState<Product>(emptyProduct)

    const handleOpen = () => setModalOpen(true)
    const handleClose = () => {
        setModalProduct(emptyProduct)
        setModalOpen(false)
    }

    const handleRowClick = (product: Product) => {
        setModalProduct(product)
        handleOpen()
    }
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={headRowStyle}>Id</TableCell>
                        <TableCell sx={headRowStyle}>Name</TableCell>
                        <TableCell sx={headRowStyle}>Category</TableCell>
                        <TableCell sx={headRowStyle}>Price</TableCell>
                        <TableCell sx={headRowStyle}>Cost</TableCell>
                        <TableCell sx={headRowStyle}>Stock</TableCell>
                        <TableCell sx={headRowStyle}>Detail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* rows */}
                    {products &&
                        products.map((product) => {
                            const category = categories.find(
                                (category) => category.id === product.category,
                            )
                            return (
                                <ProductRow
                                    key={product.id}
                                    product={product}
                                    onClick={() => handleRowClick(product)}
                                    category={
                                        category !== undefined
                                            ? category.name
                                            : "Deleted Category"
                                    }
                                />
                            )
                        })}
                </TableBody>
            </Table>
            {modalOpen && (
                <ProductModal
                    product={modalProduct}
                    isOpen={modalOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                />
            )}
            {/* {modalOpen && <ProductModalTw handleClose={handleClose} />} */}
        </div>
    )
}
