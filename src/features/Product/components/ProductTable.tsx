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
import { useProduct, useCategory } from "../index.ts";
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
            <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
                >
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => navigate("new")}
                    >
                        Create new product
                    </Button>
                </Box>

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
