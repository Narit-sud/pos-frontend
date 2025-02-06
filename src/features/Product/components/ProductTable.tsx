import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import type { ProductMain, ProductVariant } from "../types";

type Props = {
    productMain: ProductMain[];
    selectProduct: (main: ProductMain) => void;
};
export default function ProductTable({ productMain, selectProduct }: Props) {
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
                                onClick={() => selectProduct(prod)}
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
