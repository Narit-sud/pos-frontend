import {
    Box,
    Badge,
    Card,
    CardContent,
    Typography,
    Container,
    Grid2,
    Button,
    Divider,
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
        <Container>
            {/* Header */}
            <Box
                sx={{ my: 2, display: "flex", justifyContent: "space-between" }}
            >
                <Button type="button" variant="outlined">
                    Back
                </Button>
                <Button
                    sx={{ position: "relative" }}
                    onClick={() => setCartOpen(true)}
                >
                    <ShoppingCart />
                    <Badge
                        badgeContent={currentCart.length}
                        color="secondary"
                        sx={{ position: "absolute", top: "0", right: "10px" }}
                    />
                </Button>
            </Box>
            <Divider />
            {/* Product Display */}
            <Grid2 container sx={{ gap: 1 }}>
                {fullProducts?.map((prod) => {
                    return (
                        <Grid2
                            key={prod.uuid + "display"}
                            size={3}
                            onClick={() => handleProductClick(prod)}
                        >
                            <Card>
                                <CardContent>
                                    <Typography>{prod.name}</Typography>
                                    <Typography>
                                        {prod.variantCount} options
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    );
                })}
            </Grid2>
            {/* Select Modal */}
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
            {/* Cart Modal */}
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
