import {
    Badge,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid2,
    Stack,
    Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "../useCart";
import { useProduct } from "../../Product";
import { FullProductClass } from "../../Product/class";
import { useState } from "react";
import { CustomModal } from "../../../_components/CustomModal";
import { ProductSelect } from "../components/ProductSelect";
import { CartDisplay } from "../components/CartDisplay";

export default function SalePage() {
    const { mainProducts, variantProducts } = useProduct();
    const fullProduct = mainProducts.map((prod) => ({
        ...prod,
        variants: variantProducts.filter(
            (item) => item.mainProduct === prod.uuid,
        ),
    })) as FullProductClass[];
    const { currentCart, addToCart } = useCart();
    const [selectingProd, setSelectingProd] = useState<FullProductClass>(
        new FullProductClass(),
    );
    const [selectModalOpen, setSelectModalOpen] = useState<boolean>(false);
    const selectOpen = () => setSelectModalOpen(true);
    const selectClose = () => setSelectModalOpen(false);

    const [cartModalOpen, setCartModalOpen] = useState<boolean>(false);
    const cartOpen = () => setCartModalOpen(true);
    const cartClose = () => setCartModalOpen(false);

    const handleProductClick = (prod: FullProductClass) => {
        setSelectingProd(prod);
        selectOpen();
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
                <Button sx={{ position: "relative" }} onClick={cartOpen}>
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
                {fullProduct.map((prod) => {
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
            {selectModalOpen && (
                <CustomModal
                    open={selectModalOpen}
                    onClose={selectClose}
                    width={500}
                >
                    <ProductSelect
                        selectingProduct={selectingProd}
                        handleSaveButton={addToCart}
                    />
                </CustomModal>
            )}
            {/* Cart Modal */}
            {cartModalOpen && (
                <CustomModal
                    open={cartModalOpen}
                    onClose={cartClose}
                    width={500}
                >
                    <CartDisplay />
                </CustomModal>
            )}
        </Container>
    );
}
