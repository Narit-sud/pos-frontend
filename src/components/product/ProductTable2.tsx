import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { ProductMain } from "../../interfaces/Product";
import { useProductCategory } from "../../contexts/ProductCategoryContext";
import ProductModal2 from "./ProductModal2";
import { useState } from "react";

type Props = {
    productMain: ProductMain[];
};
export default function ProductTable2({ productMain }: Props) {
    const { productCategory } = useProductCategory();
    const [productInModal, setProductInModal] = useState({});
    const [productModalOpen, setProductModalOpen] = useState<boolean>(false);

    function handleRowClick(product: ProductMain) {
        setProductInModal(product);
        setProductModalOpen(true);
    }

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow sx={{ textAlign: "center" }}>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Detail</TableCell>
                        <TableCell>Variants</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productMain?.map((prod) => {
                        const thisCat = productCategory.find(
                            (cat) => cat.uuid === prod.category,
                        );
                        return (
                            <TableRow
                                key={prod.uuid}
                                onClick={() => handleRowClick(prod)}
                                sx={{ ":hover": { bgcolor: "lightgray" } }}
                            >
                                <TableCell>{prod.name}</TableCell>
                                <TableCell>
                                    {thisCat?.name || "Not found"}
                                </TableCell>
                                <TableCell>{prod.detail}</TableCell>
                                <TableCell>{prod.variantCount}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {productModalOpen && (
                <ProductModal2
                    open={productModalOpen}
                    handleClose={() => {
                        setProductModalOpen(false);
                    }}
                    product={productInModal}
                />
            )}
        </>
    );
}
