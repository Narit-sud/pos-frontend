import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useCategory } from "../../Category/index.ts";
import { VariantForm } from "./VariantForm.tsx";
import { ProductMain, ProductVariant } from "../class.ts";
import { SingleForm } from "./SingleForm.tsx";
import { useProduct } from "../useProduct.tsx";

type Props = {
    productMain: ProductMain | undefined;
};
export function ProductForm({ productMain }: Props) {
    const { productVariants, createMain, createVariants, deleteMain } =
        useProduct();
    const { category } = useCategory();

    const [main, setMain] = useState<ProductMain>(
        productMain ||
            new ProductMain("", undefined, "", "single", undefined, undefined),
    );
    const [variants, setVariants] = useState<ProductVariant[]>([
        new ProductVariant("", 0, 0, "", main.uuid),
    ]);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, name, value } = e.target;
        if (name === "main") {
            setMain((prev) => ({ ...prev, [id]: value }));
        } else {
            if (id === "price" || id === "cost") {
                setVariants((prev) =>
                    prev.map((item) =>
                        item.uuid === name
                            ? { ...item, [id]: Number(value) }
                            : item,
                    ),
                );
            } else {
                setVariants((prev) =>
                    prev.map((item) =>
                        item.uuid === name ? { ...item, [id]: value } : item,
                    ),
                );
            }
        }
    }

    function handleSelectChange(e: SelectChangeEvent) {
        setMain((prev) => ({ ...prev, category: e.target.value }));
    }

    function changeMainType(type: string) {
        setMain((prev) => ({ ...prev, type }));
    }

    async function handleDelete() {
        try {
            if (productMain) {
                await deleteMain(productMain.uuid);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function initialVariant() {
        if (productMain) {
            const filtered = productVariants.filter(
                (item) => item.mainProduct === productMain.uuid,
            );
            setVariants(filtered);
            if (filtered.length > 1) {
                setMain((prev) => ({ ...prev, type: "multi" }));
            }
        } else {
            setVariants([new ProductVariant("", 0, 0, "", main.uuid)]);
        }
    }

    function addVariant() {
        if (main.type === "single") {
            changeMainType("multi");
        }
        const newVariant = new ProductVariant("", 0, 0, "", main.uuid);
        setVariants((prev) => [...prev, newVariant]);
    }

    function removeVariant(variantUUID: string) {
        if (main.type === "multi" && variants.length === 2) {
            changeMainType("single");
        }
        setVariants((prev) =>
            prev.filter((variant) => variant.uuid !== variantUUID),
        );
    }

    async function handleCreate() {
        try {
            await createMain(main, variants);
        } catch (error) {
            console.error(error);
        }
        console.log("created?");
        console.log(main);
        console.log(variants);
    }

    useEffect(() => {
        initialVariant();
    }, []);
    return (
        <Box
            sx={{
                border: "1px solid black",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                p: 2,
            }}
        >
            <FormControl
                sx={{
                    px: 5,
                    gap: 2,
                    py: 2,
                    border: "1px solid green",
                    borderRadius: "10px",
                }}
            >
                <TextField
                    type="text"
                    id="name"
                    name="main"
                    label="Name/Brand"
                    value={main.name}
                    onChange={handleInputChange}
                />
                <FormControl>
                    <InputLabel htmlFor="categorySelect">Category</InputLabel>
                    <Select
                        id="categorySelect"
                        label="Product category"
                        value={main.category}
                        onChange={handleSelectChange}
                    >
                        {category.map((cat) => {
                            return (
                                <MenuItem key={cat.uuid} value={cat.uuid}>
                                    {cat.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <TextField
                    type="text"
                    id="detail"
                    name="main"
                    label="Detail"
                    value={main.detail}
                    onChange={handleInputChange}
                />
                {main.type === "single" ? (
                    <SingleForm
                        variant={variants[0]}
                        handleChange={handleInputChange}
                    />
                ) : (
                    <VariantForm
                        variants={variants}
                        handleChange={handleInputChange}
                        removeVariant={removeVariant}
                    />
                )}
                <Button
                    type="button"
                    variant="outlined"
                    onClick={addVariant}
                    sx={{ my: 2 }}
                >
                    Add option
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    onClick={handleCreate}
                >
                    {productMain ? "Update product" : "Create new product"}
                </Button>
                {productMain && (
                    <Button
                        type="button"
                        variant="contained"
                        onClick={handleDelete}
                    >
                        Delete Product
                    </Button>
                )}
            </FormControl>
        </Box>
    );
}
