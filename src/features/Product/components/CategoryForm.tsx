import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { CategoryInterface, createCategoryInterface } from "../interface";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import convertToLocalTime from "../../../utils/convertToLocalTime";

type Props = {
    existedCategory: CategoryInterface | null;
    onClose: () => void;
    onSubmit: (category: CategoryInterface) => void;
    onDelete: (category: CategoryInterface) => void;
};

export default function CategoryForm({
    existedCategory,
    onClose,
    onSubmit,
    onDelete,
}: Props) {
    const [category, setCategory] = useState<CategoryInterface | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    function handleCategoryChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setCategory(
            (prevCategory) =>
                ({
                    ...prevCategory,
                    [name]: value,
                }) as CategoryInterface,
        );
    }

    function handleConfirmDelete() {
        onDelete(existedCategory!);
    }
    useEffect(() => {
        if (existedCategory) {
            setCategory(existedCategory);
        } else {
            setCategory(createCategoryInterface());
        }
    }, [existedCategory]);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="h5">
                {existedCategory ? "Update" : "Create"} Category
            </Typography>
            <FormControl
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
                <TextField
                    name="name"
                    type="text"
                    label="Name"
                    value={category?.name}
                    onChange={handleCategoryChange}
                />
                <TextField
                    name="detail"
                    type="text"
                    label="Detail"
                    value={category?.detail}
                    onChange={handleCategoryChange}
                />
            </FormControl>
            {existedCategory && (
                <Typography>
                    {"Last Update: "}{" "}
                    {convertToLocalTime(existedCategory?.updatedAt) || ""}
                </Typography>
            )}
            <Button variant="contained" onClick={() => onSubmit(category!)}>
                {existedCategory ? "Update" : "Create"}
            </Button>
            {existedCategory && (
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => setDialogOpen(true)}
                >
                    Delete
                </Button>
            )}
            <Button variant="outlined" onClick={onClose}>
                Calcel
            </Button>
            {dialogOpen && (
                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this category? This
                            action cannot be undone.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleConfirmDelete} color="error">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Box>
    );
}
