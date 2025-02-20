import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { FullProductClass, VariantProductClass } from "../../Product/class";
import { SaleItemClass } from "../classes/SaleItemClass";
import { useEffect, useState } from "react";

type Props = {
    selectingProduct: FullProductClass;
    handleSaveButton: (product: SaleItemClass) => void;
};
export function ProductSelect({ selectingProduct }: Props) {
    const [qty, setQty] = useState<number>(1);
    const [price, setPrice] = useState<number>(
        selectingProduct.variants[0].price,
    );
    const [total, setTotal] = useState<number>(
        selectingProduct.variants[0].price,
    );
    const [selected, setSelected] = useState<string>("");

    const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQty(Number(e.target.value));
    };
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.target.value));
    };
    const handleTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTotal(Number(e.target.value));
    };

    const recalPrice = () => {
        setPrice(total / qty);
        setTotal(qty * price);
    };

    const handleSelectProduct = (prod: VariantProductClass) => {
        if (selected === prod.uuid) {
            setQty((prev) => prev + 1);
            return;
        }
        setSelected(prod.uuid);
        setQty(1);
        setPrice(prod.price);
        setTotal(prod.price);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Typography variant="h6">
                {selectingProduct.name}:{" "}
                {
                    selectingProduct.variants.find(
                        (item) => item.uuid === selected,
                    )?.name
                }
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    border: "1px solid black",
                    borderRadius: 1,
                    mb: 2,
                    gap: 1,
                    height: 300,
                    overflowY: "scroll",
                }}
            >
                {selectingProduct?.variants?.map((prod) => {
                    return (
                        <Button
                            key={prod.uuid + "option"}
                            variant={
                                selected === prod.uuid
                                    ? "contained"
                                    : "outlined"
                            }
                            onClick={() => handleSelectProduct(prod)}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    gap: 5,
                                    my: 1,
                                }}
                            >
                                <Typography>{prod.name}</Typography>
                                <Typography>{prod.price}฿</Typography>
                            </Box>
                        </Button>
                    );
                })}
            </Box>

            <FormControl>
                <TextField
                    label="Quantity"
                    value={qty}
                    onChange={handleQtyChange}
                />
                <TextField
                    label="Price"
                    value={price}
                    onChange={handlePriceChange}
                />
                <TextField
                    label="Total"
                    value={total}
                    onChange={handleTotalChange}
                />
            </FormControl>
        </Box>
    );
}
