import { FullProductClass, VariantProductClass } from "../class";
import {
    Badge,
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Paper,
    SelectChangeEvent,
    Snackbar,
    TextField,
    Alert,
} from "@mui/material";
import { useEffect, useState } from "react";
import { VariantProductForm } from "./VariantProductForm";
import CategorySelect from "./CategorySelect";
import { useProduct } from "../useProduct";
import { updateVariantCount } from "../utils";
import { useNavigate } from "react-router";

type Props = {
    existedProductUUID: string | undefined;
};

export function ProductForm({ existedProductUUID }: Props) {
    const navigate = useNavigate();
    const {
        fullProducts,
        createNewProduct,
        deleteProduct,
        updateFullProduct,
        isLoading,
    } = useProduct();
    const [product, setProduct] = useState<FullProductClass>();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [openDialog, setOpenDialog] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success" as "success" | "error",
    });
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (existedProductUUID !== "new") {
            const existingProduct = fullProducts?.find(
                (p) => p.uuid === existedProductUUID,
            );
            setProduct(existingProduct);
        } else {
            const newProduct = new FullProductClass();
            const newVariant = new VariantProductClass({
                mainProduct: newProduct.uuid,
            });
            newProduct.variants = [newVariant];
            setProduct(newProduct);
        }
    }, [existedProductUUID, fullProducts]);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!product?.name) newErrors.name = "Name is required";
        if (!product?.category) newErrors.category = "Category is required";
        if (
            product?.variants.some((v) => !v.name || v.price < 0 || v.cost < 0)
        ) {
            newErrors.variants =
                "All variants must have a name and valid prices";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
        const { id, name, value } = e.target;
        if (id === "main") {
            setProduct((prev) =>
                prev
                    ? new FullProductClass({
                          ...prev,
                          [name]: value,
                          status: "update",
                      })
                    : prev,
            );
        } else {
            const updatedVariants = product?.variants.map((item) =>
                item.uuid === id
                    ? {
                          ...item,
                          [name]:
                              name === "price" || name === "cost"
                                  ? Number(value)
                                  : value,
                          status:
                              item.status === "create" ? "create" : "update",
                      }
                    : item,
            );
            setProduct((prev) =>
                prev
                    ? new FullProductClass({
                          ...prev,
                          variants: updatedVariants,
                      })
                    : prev,
            );
        }
    };

    const handleSelectChange = (e: SelectChangeEvent) => {
        setProduct((prev) =>
            prev
                ? new FullProductClass({
                      ...prev,
                      category: e.target.value,
                      status: "update",
                  })
                : prev,
        );
    };

    const handleAddButton = () => {
        setProduct((prev) => {
            if (!prev) return prev;
            const newVariant = new VariantProductClass({
                mainProduct: prev.uuid,
                status: "create",
            });
            return new FullProductClass({
                ...prev,
                variantCount: updateVariantCount(prev.variants, 1),
                variants: [...prev.variants, newVariant],
                status: "update",
            });
        });
    };

    const handleRemoveVariantButton = (variantUUID: string) => {
        if (product?.variantCount === 1) {
            alert("Product has to have at least 1 option");
            return;
        }

        setProduct((prev) => {
            if (!prev) return prev;
            return new FullProductClass({
                ...prev,
                variantCount: updateVariantCount(prev.variants, -1),
                variants: prev.variants.map((v) =>
                    v.uuid === variantUUID
                        ? {
                              ...v,
                              status:
                                  v.status === "create"
                                      ? "don't create"
                                      : "delete",
                          }
                        : v,
                ),
                status: "update",
            });
        });
    };

    const handleReverseButton = (variantUUID: string) => {
        setProduct((prev) => {
            if (!prev) return prev;
            return new FullProductClass({
                ...prev,
                variantCount: updateVariantCount(prev.variants, 1),
                variants: prev.variants.map((v) =>
                    v.uuid === variantUUID
                        ? {
                              ...v,
                              status:
                                  v.status === "don't create"
                                      ? "create"
                                      : v.status === "delete"
                                        ? "update"
                                        : v.status,
                          }
                        : v,
                ),
                status: "update",
            });
        });
    };

    const handleRemoveMainButton = () => {
        setOpenDialog(true);
    };

    const handleConfirmDelete = async () => {
        if (existedProductUUID) {
            try {
                await deleteProduct(existedProductUUID);
                setSnackbar({
                    open: true,
                    message: "Product deleted successfully",
                    severity: "success",
                });
                setTimeout(() => navigate(-1), 2000);
            } catch (error) {
                setSnackbar({
                    open: true,
                    message: "Failed to delete product",
                    severity: "error",
                });
            }
        }
        setOpenDialog(false);
    };

    const handleSaveButton = async () => {
        if (!product || !validateForm()) return;

        setIsSaving(true);
        try {
            if (existedProductUUID === "new") {
                const success = await createNewProduct(product);
                if (success) {
                    setSnackbar({
                        open: true,
                        message: "Product created successfully",
                        severity: "success",
                    });
                    setTimeout(() => navigate(-1), 2000);
                }
            } else {
                await updateFullProduct(product);
                setSnackbar({
                    open: true,
                    message: "Product updated successfully",
                    severity: "success",
                });
                setTimeout(() => navigate(-1), 2000);
            }
        } catch (error) {
            setSnackbar({
                open: true,
                message: "Failed to save product",
                severity: "error",
            });
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" my={4}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ maxWidth: 800, mx: "auto", py: 4 }}>
            <Paper elevation={2} sx={{ p: 3 }}>
                <FormControl fullWidth>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <TextField
                            id="main"
                            name="name"
                            label="Name"
                            value={product?.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            required
                        />
                        <CategorySelect
                            value={product?.category || ""}
                            onChange={handleSelectChange}
                            error={!!errors.category}
                            helperText={errors.category}
                        />
                        <TextField
                            id="main"
                            name="detail"
                            label="Detail"
                            value={product?.detail}
                            onChange={handleChange}
                            multiline
                            rows={3}
                        />
                        <Button
                            type="button"
                            variant="outlined"
                            onClick={handleAddButton}
                            startIcon={
                                <Badge
                                    badgeContent={product?.variantCount}
                                    color="primary"
                                />
                            }
                        >
                            Add Option
                        </Button>
                    </Box>
                </FormControl>

                {errors.variants && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                        {errors.variants}
                    </Alert>
                )}

                <VariantProductForm
                    variants={product?.variants || []}
                    handleRemove={handleRemoveVariantButton}
                    handleUndo={handleReverseButton}
                    handleChange={handleChange}
                />

                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "center",
                        mt: 4,
                    }}
                >
                    <Button variant="contained" onClick={handleSaveButton}>
                        Save
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => navigate("/product")}
                    >
                        Cancel
                    </Button>
                    {existedProductUUID && existedProductUUID !== "new" && (
                        <Button
                            color="error"
                            variant="outlined"
                            onClick={handleRemoveMainButton}
                        >
                            Remove
                        </Button>
                    )}
                </Box>
            </Paper>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this product? This
                        action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() =>
                    setSnackbar((prev) => ({ ...prev, open: false }))
                }
            >
                <Alert
                    severity={snackbar.severity}
                    onClose={() =>
                        setSnackbar((prev) => ({ ...prev, open: false }))
                    }
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>

            {(isLoading || isSaving) && (
                <Box
                    position="fixed"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bgcolor="rgba(255, 255, 255, 0.7)"
                    zIndex={9999}
                >
                    <CircularProgress />
                </Box>
            )}
        </Box>
    );
}
