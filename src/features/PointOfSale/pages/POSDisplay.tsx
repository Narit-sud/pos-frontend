import {
    Box,
    Badge,
    Card,
    Typography,
    Container,
    Grid2 as Grid,
    Button,
    Divider,
    CardActionArea,
    Avatar,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { CustomModal } from "../../../_components/CustomModal";
import { useProduct } from "../../Product";
import { FullProductClass } from "../../Product/class";
import { useState } from "react";
import { useCart } from "../useCart";
import { Selecting } from "../components/Selecting";
import { Cart } from "../components/Cart";
import { v4 as uuidv4 } from "uuid";
import type { CartItemType } from "../types";
import { SavedCart } from "../components/SavedCart";

export function POSDisplay() {
    const { fullProducts } = useProduct();
    const { currentCart, addToCart, order } = useCart();

    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const [chargeOpen, setChargeOpen] = useState<boolean>(false);
    const [selectingOpen, setSelectingOpen] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] =
        useState<FullProductClass | null>(null);
    const [showSavedCarts, setShowSavedCarts] = useState(false);

    const handleProductClick = (product: FullProductClass) => {
        setSelectedProduct(product);
        setSelectingOpen(true);
    };

    const handleSelectingSave = (
        quantity: number,
        variantId: string,
        price: number,
        total: number,
    ) => {
        if (!selectedProduct) return;

        const variant = selectedProduct.variants.find(
            (v) => v.uuid === variantId,
        );
        if (!variant) return;

        const cartItem: CartItemType = {
            uuid: uuidv4(),
            mainName: selectedProduct.name,
            variantUUID: variant.uuid,
            variantName: variant.name,
            qty: quantity,
            price: price,
            total: total,
            receiptUUID: order.uuid,
        };

        addToCart(cartItem);
        setSelectingOpen(false);
        setSelectedProduct(null);
    };

    return (
        <Container maxWidth="xl">
            <Box
                sx={{ my: 2, display: "flex", justifyContent: "space-between" }}
            >
                <Button type="button" variant="outlined">
                    Back
                </Button>
                <Button
                    variant="contained"
                    sx={{ position: "relative" }}
                    onClick={() => setCartOpen(true)}
                >
                    <ShoppingCart />
                    <Badge
                        badgeContent={currentCart.length}
                        color="secondary"
                        sx={{
                            position: "absolute",
                            top: "-8px",
                            right: "-8px",
                        }}
                    />
                </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />

            {/* Product Grid */}
            <Grid container spacing={2}>
                {fullProducts?.map((prod) => (
                    <Grid
                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                        key={prod.uuid}
                    >
                        <Card
                            sx={{
                                height: "100%",
                                transition: "transform 0.2s",
                                "&:hover": {
                                    transform: "scale(1.02)",
                                    boxShadow: 3,
                                },
                            }}
                        >
                            <CardActionArea
                                onClick={() => handleProductClick(prod)}
                                sx={{ height: "100%", p: 1 }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 1,
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            bgcolor: "primary.main",
                                            width: 40,
                                            height: 40,
                                            mr: 1,
                                        }}
                                    >
                                        {prod.name.charAt(0)}
                                    </Avatar>
                                    <Typography variant="h6" noWrap>
                                        {prod.name}
                                    </Typography>
                                </Box>
                                <Divider sx={{ my: 1 }} />
                                <Box sx={{ px: 1 }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 1 }}
                                    >
                                        {prod.variantCount} variants available
                                    </Typography>
                                    <Typography variant="body2" color="primary">
                                        From ฿
                                        {Math.min(
                                            ...prod.variants.map(
                                                (v) => v.price,
                                            ),
                                        )}
                                    </Typography>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Modals */}
            {selectingOpen && selectedProduct && (
                <CustomModal
                    open={selectingOpen}
                    onClose={() => setSelectingOpen(false)}
                    width={500}
                >
                    <Selecting
                        product={selectedProduct}
                        onSave={handleSelectingSave}
                        onCancel={() => setSelectingOpen(false)}
                    />
                </CustomModal>
            )}
            {cartOpen && (
                <CustomModal
                    open={cartOpen}
                    onClose={() => {
                        setCartOpen(false);
                        setShowSavedCarts(false);
                    }}
                    width={500}
                >
                    {showSavedCarts ? (
                        <SavedCart onClose={() => setShowSavedCarts(false)} />
                    ) : (
                        <Cart
                            cartItems={currentCart}
                            onCharge={() => setCartOpen(true)}
                            onCancel={() => setCartOpen(false)}
                            onLoadCartClick={() => setShowSavedCarts(true)}
                        />
                    )}
                </CustomModal>
            )}
        </Container>
    );
}
