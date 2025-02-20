import {
    Box,
    Button,
    Typography,
    Stack,
    Divider,
    IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { CartItemType } from "../types";
import { CustomerSelect } from "./CustomerSelect";
import { useCart } from "../useCart";
import { Charge } from "./Charge";
import { useState } from "react";

interface CartProps {
    cartItems: CartItemType[];
    onCharge: () => void;
    onCancel: () => void;
    onLoadCartClick: () => void;
}

export function Cart({
    cartItems,
    onCharge,
    onCancel,
    onLoadCartClick,
}: CartProps) {
    const {
        removeFromCart,
        clearCart,
        saveCart,
        grandTotal,
        loadedFromUUID,
        isCartModified,
    } = useCart();
    const [showCharge, setShowCharge] = useState(false);

    const handleChargeConfirm = () => {
        setShowCharge(false);
        clearCart();
        onCancel();
    };

    if (showCharge) {
        return (
            <Charge
                total={grandTotal}
                onConfirm={handleChargeConfirm}
                onCancel={() => setShowCharge(false)}
            />
        );
    }

    return (
        <Box sx={{ p: 2 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                    border: "1px solid #ddd",
                    borderRadius: 1,
                    mb: 1,
                }}
            >
                <Button variant="text" onClick={clearCart}>
                    Clear Cart
                </Button>
                <Button variant="outlined" onClick={onLoadCartClick}>
                    Load Cart
                </Button>
                <Button
                    variant="contained"
                    onClick={saveCart}
                    disabled={loadedFromUUID && !isCartModified}
                >
                    {loadedFromUUID
                        ? isCartModified
                            ? "Update Cart"
                            : "Already Saved"
                        : "Save Cart"}
                </Button>
            </Box>

            <Box
                sx={{
                    minHeight: "200px",
                    maxHeight: "400px",
                    overflowY: "auto",
                    mb: 2,
                    p: 1,
                    border: "1px solid #ddd",
                    borderRadius: 1,
                }}
            >
                {cartItems.map((item) => (
                    <Box component="div" key={item.uuid} sx={{ mb: 1 }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: 1,
                            }}
                        >
                            <Box sx={{ flex: 1 }}>
                                <Typography>
                                    {item.mainName}: {item.variantName}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Quantity: {item.qty} - Price: ${item.price}{" "}
                                    - Total: ฿{item.total}
                                </Typography>
                            </Box>
                            <IconButton
                                color="error"
                                onClick={() => removeFromCart(item.uuid)}
                                size="small"
                                sx={{ mt: 0.5 }}
                            >
                                <Delete />
                            </IconButton>
                        </Box>
                        <Divider sx={{ my: 1 }} />
                    </Box>
                ))}
                {cartItems.length === 0 && (
                    <Typography
                        color="text.secondary"
                        sx={{ textAlign: "center", mt: 2 }}
                    >
                        Cart is empty
                    </Typography>
                )}
            </Box>

            <CustomerSelect />

            <Box
                sx={{
                    my: 2,
                    p: 2,
                    bgcolor: "primary.main",
                    color: "white",
                    borderRadius: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant="h6">Grand Total:</Typography>
                <Typography variant="h6">฿{grandTotal.toFixed(2)}</Typography>
            </Box>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => setShowCharge(true)}
                    disabled={cartItems.length === 0}
                >
                    Charge
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={onCancel}
                >
                    Cancel
                </Button>
            </Stack>
        </Box>
    );
}
