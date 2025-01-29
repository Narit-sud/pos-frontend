import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import type { ProductMain, ProductVariant } from "../types";
import { useState } from "react";

type Props = {
    productMain: ProductMain[];
};
export default function ProductTable({ productMain }: Props) {
    const [productInModal, setProductInModal] = useState<ProductMain>();
    const [productModalOpen, setProductModalOpen] = useState<boolean>(false);

    function handleRowClick(product: ProductMain) {
        setProductInModal(product);
        console.log(product);

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
                        return (
                            <TableRow
                                key={prod.uuid}
                                onClick={() => handleRowClick(prod)}
                                sx={{ ":hover": { bgcolor: "lightgray" } }}
                            >
                                <TableCell>{prod.name}</TableCell>
                                <TableCell>{prod.category}</TableCell>
                                <TableCell>{prod.detail}</TableCell>
                                <TableCell>{prod.variantCount}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </>
    );
}
