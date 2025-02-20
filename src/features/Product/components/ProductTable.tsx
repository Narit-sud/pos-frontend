import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Box,
    TableContainer,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useProduct } from "../useProduct.tsx";
import { useCategory } from "../../Category/useCategory.tsx";
import { useNavigate } from "react-router";

const headerStyle = {
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "primary.main",
    color: "white",
};

const bodyStyle = {
    cursor: "pointer",
    ":hover": { bgcolor: "action.hover" },
};

export default function ProductTable() {
    const navigate = useNavigate();
    const { fullProducts, isLoading } = useProduct();
    const { categories } = useCategory();

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" my={4}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Paper elevation={2}>
            <Box p={2}>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => navigate("new")}
                    sx={{ mb: 2 }}
                >
                    Create new product
                </Button>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={headerStyle}>Name</TableCell>
                                <TableCell sx={headerStyle}>Category</TableCell>
                                <TableCell sx={headerStyle}>Detail</TableCell>
                                <TableCell sx={headerStyle}>
                                    Variant(s)
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fullProducts?.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        No products found
                                    </TableCell>
                                </TableRow>
                            ) : (
                                fullProducts?.map((main) => (
                                    <TableRow
                                        key={main.uuid}
                                        sx={bodyStyle}
                                        onClick={() => navigate(`${main.uuid}`)}
                                    >
                                        <TableCell>{main.name}</TableCell>
                                        <TableCell>
                                            {categories?.find(
                                                (cat) =>
                                                    cat.uuid === main.category,
                                            )?.name || "Category not found"}
                                        </TableCell>
                                        <TableCell>{main.detail}</TableCell>
                                        <TableCell align="center">
                                            {main.variantCount}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Paper>
    );
}
