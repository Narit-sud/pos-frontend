import {
    Box,
    Button,
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Stack,
} from "@mui/material";
import { FullProductClass } from "../../Product/class";
import { useState, useEffect } from "react";

interface SelectingProps {
    product: FullProductClass;
    onSave: (
        quantity: number,
        variantId: string,
        price: number,
        total: number,
    ) => void;
    onCancel: () => void;
}

export function Selecting({ product, onSave, onCancel }: SelectingProps) {
    // Fix initial states to use correct variant
    const initialVariant = product.variants[0];
    const [selectedVariant, setSelectedVariant] = useState(initialVariant.uuid);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(initialVariant.price);
    const [total, setTotal] = useState(initialVariant.price);

    const selectedVariantData = product.variants.find(
        (v) => v.uuid === selectedVariant,
    );

    const updateValues = (newQty?: number, newPrice?: number) => {
        const qty = newQty ?? quantity;
        const prc = newPrice ?? price;
        setTotal(qty * prc);
    };

    const handleQuantityChange = (value: number) => {
        setQuantity(value);
        updateValues(value);
    };

    const handlePriceChange = (value: number) => {
        setPrice(value);
        updateValues(undefined, value);
    };

    const handleTotalChange = (value: number) => {
        setTotal(value);
        if (quantity > 0) {
            const newPrice = value / quantity;
            setPrice(newPrice);
        }
    };

    // Update price and total when variant changes
    const handleVariantChange = (variantId: string) => {
        const variant = product.variants.find((v) => v.uuid === variantId);
        if (variant) {
            setSelectedVariant(variantId);
            setPrice(variant.price);
            updateValues(quantity, variant.price);
        }
    };

    useEffect(() => {
        if (selectedVariant) {
            const variant = product.variants.find(
                (v) => v.uuid === selectedVariant,
            );
            if (variant) {
                setPrice(variant.price);
                updateValues(quantity, variant.price);
            }
        }
    }, [selectedVariant]);

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
                {product.name}
            </Typography>

            <Stack spacing={2} sx={{ my: 3 }}>
                {product.variants && product.variants.length > 1 && (
                    <FormControl fullWidth sx={{ my: 2 }}>
                        <InputLabel>Variant</InputLabel>
                        <Select
                            value={selectedVariant}
                            label="Variant"
                            onChange={(e) =>
                                handleVariantChange(e.target.value)
                            }
                        >
                            {product.variants.map((variant) => (
                                <MenuItem
                                    key={variant.uuid}
                                    value={variant.uuid}
                                >
                                    {variant.name} - ${variant.price}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
                <TextField
                    type="number"
                    label="Quantity"
                    fullWidth
                    value={quantity}
                    onChange={(e) =>
                        handleQuantityChange(Number(e.target.value))
                    }
                    inputProps={{ min: 1 }}
                />

                <TextField
                    type="number"
                    label="Price"
                    fullWidth
                    value={price}
                    onChange={(e) => handlePriceChange(Number(e.target.value))}
                    inputProps={{ min: 0 }}
                />

                <TextField
                    type="number"
                    label="Total"
                    fullWidth
                    value={total}
                    onChange={(e) => handleTotalChange(Number(e.target.value))}
                    inputProps={{ min: 0 }}
                />
            </Stack>

            <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() =>
                        onSave(quantity, selectedVariant, price, total)
                    }
                    disabled={
                        !selectedVariantData || quantity <= 0 || price <= 0
                    }
                >
                    Add to Cart
                </Button>
                <Button variant="outlined" fullWidth onClick={onCancel}>
                    Cancel
                </Button>
            </Box>
        </Box>
    );
}
