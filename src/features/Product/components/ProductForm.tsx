import {
    Box,
    Button,
    FormControl,
    InputLabel,
    Menu,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useCategory } from "../../Category/index.ts";
import { v4 as uuid } from "uuid";
import { VariantForm } from "./VariantForm.tsx";
import { ProductMain, ProductVariant } from "../class.ts";

export function ProductForm() {
    const [main, setMain] = useState<ProductMain>(
        new ProductMain("", undefined, "", "single", undefined, undefined),
    );
    const [variant, setVariant] = useState<ProductVariant[]>([
        new ProductVariant("", 0, 0, "", main.uuid),
    ]);
    const { category } = useCategory();

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, name, value } = e.target;
        if (name === "main") {
            setMain((prev) => ({ ...prev, [id]: value }));
        } else {
            if (id === "price" || id === "cost") {
                setVariant((prev) =>
                    prev.map((item) =>
                        item.uuid === name
                            ? { ...item, [id]: Number(value) }
                            : item,
                    ),
                );
            } else {
                setVariant((prev) =>
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

    function addVariant() {
        if (main.type === "single") {
            setMain((prev) => ({ ...prev, type: "multi" }));
        }
        const newVariant = new ProductVariant("", 0, 0, "", main.uuid);
        setVariant((prev) => [...prev, newVariant]);
    }

    function handleCreate() {
        console.log("created?");
        console.log(main);
        console.log(variant);
    }

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
            <Typography>{JSON.stringify(main)}</Typography>
            <div>variants</div>
            {variant.map((prod) => {
                return <div key={prod.uuid}>{JSON.stringify(prod)}</div>;
            })}
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
                <Button
                    type="button"
                    variant="outlined"
                    onClick={addVariant}
                    sx={{ my: 2 }}
                >
                    Add option
                </Button>
                <Typography variant="h6" sx={{ alignSelf: "center", mb: 2 }}>
                    Options
                </Typography>
                {/* TODO: product variant show differently according to main.type === 'multi'? show rows of variants :'single' show one column of variant */}
                {variant.map((prod) => {
                    return (
                        <VariantForm
                            key={prod.uuid}
                            productVariant={prod}
                            handleChange={handleInputChange}
                        />
                    );
                })}
                <Button
                    type="button"
                    variant="contained"
                    onClick={handleCreate}
                >
                    Create new product
                </Button>
            </FormControl>
        </Box>
    );
}
