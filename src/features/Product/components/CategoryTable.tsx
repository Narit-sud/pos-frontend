import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useCategory } from "../useCategory";
import CustomModal from "../../../_components/CustomModal";
import CategoryForm from "./CategoryForm";
import { CategoryInterface } from "../interface";
import convertToLocalTime from "../../../utils/convertToLocalTime";

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

export default function CategoryTable() {
    const { categories, createCategory, updateCategory, deleteCategory } =
        useCategory();
    const [createOpen, setCreateOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] =
        useState<CategoryInterface | null>(null);

    const handleCategoryClick = (category: CategoryInterface) => {
        setSelectedCategory(category);
        setCreateOpen(true);
    };

    const handleModalClose = () => {
        setSelectedCategory(null);
        setCreateOpen(false);
    };

    const handleCategorySubmit = async (category: CategoryInterface) => {
        if (selectedCategory) {
            try {
                console.log("updatefl", category);
                const isUpdated = await updateCategory(category);
                if (isUpdated) handleModalClose();
            } catch (error) {}
        } else {
            try {
                const isCreated = await createCategory(category);
                if (isCreated) handleModalClose();
            } catch (error) {}
        }
    };

    const handleCategoryDelete = async (category: CategoryInterface) => {
        try {
            await deleteCategory(category);
            handleModalClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Paper elevation={2} sx={{ p: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
                >
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => setCreateOpen(true)}
                    >
                        Create new category
                    </Button>
                </Box>
            </Box>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={headerStyle}>Name</TableCell>
                            <TableCell sx={headerStyle}>Detail</TableCell>
                            <TableCell sx={headerStyle}>Last Update</TableCell>
                            <TableCell sx={headerStyle}>Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((cat) => {
                            return (
                                <TableRow key={cat.uuid} sx={bodyStyle}>
                                    <TableCell sx={{ textAlign: "center" }}>
                                        {cat.name}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>
                                        {cat.detail}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>
                                        {convertToLocalTime(cat.updatedAt)}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>
                                        <Button
                                            variant="outlined"
                                            onClick={() =>
                                                handleCategoryClick(cat)
                                            }
                                        >
                                            Edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {createOpen && (
                <CustomModal
                    open={createOpen}
                    onClose={handleModalClose}
                    width={400}
                >
                    <CategoryForm
                        existedCategory={selectedCategory}
                        onClose={handleModalClose}
                        onSubmit={handleCategorySubmit}
                        onDelete={handleCategoryDelete}
                    />
                </CustomModal>
            )}
        </Paper>
    );
}
