import {
    Box,
    Button,
    FormControl,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useCart } from "../useCart";
import { SaleItemClass } from "../classes/SaleItemClass";
import { FullProductClass } from "../../Product/class";

type Props = {
    fullProduct: FullProductClass;
    onClose: () => void;
};
export function SelectForm({ fullProduct, onClose }: Props) {
    const { addToCart } = useCart();

    const [selectedItem, setSelectedItem] = useState<string>(
        fullProduct.variants[0].uuid,
    );
    const [qty, setQty] = useState<number>(1);
    const [price, setPrice] = useState<number>(fullProduct.variants[0].price);
    const [total, setTotal] = useState<number>(fullProduct.variants[0].price);

    const handleSelectItem = (uuid: string) => {
        if (uuid === selectedItem) {
            // if add same item, add qty && reCal total
            setQty((prev) => prev + 1);
            setTotal((qty + 1) * price);
        } else {
            // if change item, set price to new = set qty = 1 && set total = price
            const findPrice = Number(
                fullProduct.variants.find((item) => item.uuid === uuid)
                    ?.price || 0,
            );
            setSelectedItem(uuid);
            setQty(1);
            setPrice(findPrice);
            setTotal(findPrice);
        }
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPrice = Number(e.target.value);
        setPrice(Number(newPrice));
        setTotal(newPrice * qty);
    };
    const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQty = Number(e.target.value);
        setQty(Number(newQty));
        setTotal(newQty * price);
    };
    const handleTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTotal = Number(e.target.value);
        setTotal(newTotal);
        setPrice(Number(newTotal / qty));
    };

    const handleSaveButton = () => {
        try {
            const mainName = fullProduct.name;
            const variantName = fullProduct.variants.find(
                (item) => item.uuid === selectedItem,
            )?.name;
            const newItem = new SaleItemClass({
                qty,
                price,
                total,
                uuid: selectedItem,
                mainName,
                variantName,
            });
            addToCart(newItem);
            onClose();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Stack direction="column">
            <Typography variant="h6">
                {fullProduct.name}:{" "}
                {
                    fullProduct.variants.find(
                        (item) => item.uuid === selectedItem,
                    )?.name
                }
            </Typography>
            <Stack
                direction="column"
                sx={{
                    gap: 1,
                    p: 2,
                    maxHeight: 300,
                    overflowY: "scroll",
                    border: "1px solid black",
                    borderRadius: 1,
                    my: 1,
                }}
            >
                {fullProduct.variants.map((item) => {
                    return (
                        <Button
                            key={item.uuid}
                            variant={
                                selectedItem === item.uuid
                                    ? "contained"
                                    : "outlined"
                            }
                            onClick={() => handleSelectItem(item.uuid)}
                            sx={{ p: 1 }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "50%", // Ensures full width for spacing
                                }}
                            >
                                <Typography>{item.name}</Typography>
                                <Typography>{item.price}฿</Typography>
                            </Box>
                        </Button>
                    );
                })}
            </Stack>
            <FormControl>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        border: "1px solid black",
                        p: 2,
                        borderRadius: 1,
                    }}
                >
                    <TextField
                        type="number"
                        label="Quantity"
                        value={qty}
                        onChange={handleQtyChange}
                    />
                    <TextField
                        type="number"
                        label="Price"
                        value={price}
                        onChange={handlePriceChange}
                    />
                    <TextField
                        type="number"
                        label="Total"
                        value={total}
                        onChange={handleTotalChange}
                    />
                </Box>
            </FormControl>
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "center",
                    my: 2,
                }}
            >
                <Button variant="contained" onClick={handleSaveButton}>
                    Save
                </Button>
                <Button variant="outlined" onClick={onClose}>
                    Cancel
                </Button>
            </Box>
        </Stack>
    );
}
