import { FullProductClass, VariantProductClass } from "../class";
import {
    Badge,
    Box,
    Button,
    FormControl,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { VariantProductForm } from "./VariantProductForm";
import CategorySelect from "../../Category/components/CategorySelect";
import { useProduct } from "../useProduct";
import { updateVariantCount } from "../utils";
import { useNavigate } from "react-router";

type Props = {
    existedProductUUID: string | undefined;
};

export function ProductForm({ existedProductUUID }: Props) {
    const navigate = useNavigate();
    const { fullProducts, createNewProduct, deleteProduct, updateFullProduct } =
        useProduct();
    const [product, setProduct] = useState<FullProductClass>();

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleRemoveMainButton = async () => {
        if (existedProductUUID) {
            try {
                await deleteProduct(existedProductUUID);
                navigate(-1);
            } catch (error) {
                alert("Delete this product failed");
            }
        }
    };

    const handleSaveButton = async () => {
        if (!product) return;

        try {
            if (existedProductUUID === "new") {
                const success = await createNewProduct(product);
                if (success) {
                    navigate(-1);
                } else {
                    alert("Save product failed");
                }
            } else {
                await updateFullProduct(product);
                navigate(-1);
            }
        } catch (error) {
            alert("Save product failed");
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                p: 5,
            }}
        >
            <FormControl>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 1,
                    }}
                >
                    <TextField
                        id="main"
                        name="name"
                        label="Name"
                        value={product?.name}
                        onChange={handleChange}
                    />
                    <CategorySelect
                        value={product?.category || ""}
                        onChange={handleSelectChange}
                    />
                    <TextField
                        id="main"
                        name="detail"
                        label="Detail"
                        value={product?.detail}
                        onChange={handleChange}
                    />
                    <Button
                        type="button"
                        variant="outlined"
                        onClick={handleAddButton}
                    >
                        Add Option
                        <Badge
                            badgeContent={product?.variantCount}
                            color="primary"
                            sx={{ ml: 2 }}
                        />
                    </Button>
                </Box>
            </FormControl>
            <VariantProductForm
                variants={product?.variants || []}
                handleRemove={handleRemoveVariantButton}
                handleUndo={handleReverseButton}
                handleChange={handleChange}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    justifyContent: "center",
                }}
            >
                <Button variant="contained" onClick={handleSaveButton}>
                    Save
                </Button>
                <Button variant="outlined" onClick={() => navigate("/product")}>
                    Cancel
                </Button>
                {existedProductUUID && existedProductUUID !== "new" && (
                    <Button variant="text" onClick={handleRemoveMainButton}>
                        Remove
                    </Button>
                )}
            </Box>
        </Box>
    );
}
