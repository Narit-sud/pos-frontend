import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { useProduct } from "../useProduct.tsx";
import { useState } from "react";
import { CustomModal } from "../../../_components/CustomModal";
import { MainProductForm } from "./MainProductForm";
import { useCategory } from "../../Category/useCategory.tsx";
import {
    MainProductClass,
    VariantProductClass,
    FullProductClass,
} from "../class";
import { useNavigate } from "react-router";

const headerStyle = {
    textAlign: "center",
    fontWeight: "bold",
};

const bodyStyle = { ":hover": { bgcolor: "lightgray" } };

export default function ProductTable() {
    const navigate = useNavigate();
    const { mainProducts, variantProducts } = useProduct();
    const { categories } = useCategory();
    const [open, setOpen] = useState<boolean>(false);
    const [productInModal, setProductInModal] = useState<
        FullProductClass | undefined
    >(undefined);
    const onOpen = () => setOpen(true);
    const onClose = () => {
        setOpen(false);
        setProductInModal(undefined);
    };

    const handleProductClick = (mainProductUUID: string) => {
        navigate(`${mainProductUUID}`);
        // const main = mainProducts.find(
        //     (prod) => prod.uuid === mainProductUUID,
        // ) as MainProductClass;
        // const variants = variantProducts.filter(
        //     (prod) => prod.mainProduct === mainProductUUID,
        // ) as VariantProductClass[];
        // setProductInModal({ ...main, variants });
        // onOpen();
    };

    const handleCreateButton = () => {
        onOpen();
        setProductInModal(undefined);
    };
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
                    {mainProducts?.map((main) => {
                        return (
                            <TableRow
                                key={main.uuid}
                                sx={bodyStyle}
                                onClick={() => handleProductClick(main.uuid)}
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
                        );
                    })}
                </TableBody>
            </Table>
            <Button onClick={() => navigate("new")}>Create new product</Button>
        </>
    );
}
