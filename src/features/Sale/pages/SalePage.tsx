import { useState } from "react";
import { useProduct } from "../../Product";
import {
    Badge,
    Button,
    Card,
    CardContent,
    Grid2,
    Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { CustomModal } from "../../../_components/CustomModal";
import { SelectForm } from "../components/SelectForm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CurrentCart } from "../components/CurrentCart";
import { FullProductClass } from "../../Product/class";
import { useCart } from "../useCart";
import { Charge } from "../components/Charge";

export default function SalePage() {
    const { mainProducts, variantProducts } = useProduct();
    const { cartLength } = useCart();
    const [selectedProduct, setSelectedProduct] = useState<FullProductClass>();
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [chargeOpen, setChargeOpen] = useState<boolean>(false);

    const handleFormOpen = () => setFormOpen(true);
    const handleFormClose = () => setFormOpen(false);
    const handleCartOpen = () => setCartOpen(true);
    const handleCartClose = () => {
        setCartOpen(false);
        setChargeOpen(false);
    };
    const handleChargeOpen = () => setChargeOpen(true);
    const handleChargeClose = () => setChargeOpen(false);

    const handleProductClick = (uuid: string) => {
        const main = mainProducts.find((prod) => prod.uuid === uuid);
        const variants = variantProducts.filter(
            (prod) => prod.mainProduct === uuid,
        );
        const newFullProduct = new FullProductClass({ ...main, variants });
        setSelectedProduct(newFullProduct);
        handleFormOpen();
    };

    return (
        <Container sx={{ py: 5 }}>
            <Button onClick={handleCartOpen}>
                <ShoppingCartIcon />
            </Button>
            <Badge color="secondary" badgeContent={cartLength} />
            <Grid2 container gap={1}>
                {mainProducts!.map((prod, index) => {
                    return (
                        <Grid2
                            size={2}
                            key={prod.uuid + index}
                            onClick={() => handleProductClick(prod.uuid)}
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
            {formOpen && (
                <CustomModal
                    open={formOpen}
                    onClose={handleFormClose}
                    width={500}
                >
                    <SelectForm
                        fullProduct={selectedProduct!}
                        onClose={handleFormClose}
                    />
                </CustomModal>
            )}
            {cartOpen && (
                <CustomModal
                    open={cartOpen}
                    onClose={handleCartClose}
                    width={500}
                >
                    {chargeOpen || (
                        <CurrentCart
                            onCharge={handleChargeOpen}
                            onClose={handleCartClose}
                        />
                    )}
                    {chargeOpen && (
                        <Charge
                            onBack={handleChargeClose}
                            onClose={handleCartClose}
                        />
                    )}
                </CustomModal>
            )}
        </Container>
    );
}
