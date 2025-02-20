import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { useProduct } from "../useProduct.tsx";
import { useCategory } from "../../Category/useCategory.tsx";
import { useNavigate } from "react-router";

const headerStyle = {
    textAlign: "center",
    fontWeight: "bold",
};

const bodyStyle = { ":hover": { bgcolor: "lightgray" } };

export default function ProductTable() {
    const navigate = useNavigate();
    const { fullProducts } = useProduct();
    const { categories } = useCategory();
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={headerStyle}>Name</TableCell>
                        <TableCell sx={headerStyle}>Category</TableCell>
                        <TableCell sx={headerStyle}>Detail</TableCell>
                        <TableCell sx={headerStyle}>Variant(s)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fullProducts?.map((main) => (
                        <TableRow
                            key={main.uuid}
                            sx={bodyStyle}
                            onClick={() => navigate(`${main.uuid}`)}
                        >
                            <TableCell>{main.name}</TableCell>
                            <TableCell>
                                {categories?.find(
                                    (cat) => cat.uuid === main.category,
                                )?.name || "Category not found"}
                            </TableCell>
                            <TableCell>{main.detail}</TableCell>
                            <TableCell>{main.variantCount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Button onClick={() => navigate("new")}>Create new product</Button>
        </>
    );
}
