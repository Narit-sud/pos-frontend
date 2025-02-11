import { Box, Button, Grid2, Paper, Typography } from "@mui/material";
import { SaleItemClass } from "../classes/SaleItemClass";
import { useProduct } from "../../Product";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../useCart";

type Props = {
    cartItem: SaleItemClass;
};
export function CartItem({ cartItem }: Props) {
    const { removeFromCart } = useCart();
    return (
        <Paper
            elevation={3}
            sx={{
                alignItems: "center",
                p: 1,
            }}
        >
            <Grid2 container direction="row">
                <Grid2 size={6}>
                    <Typography>
                        {cartItem.mainName}: {cartItem.variantName}
                    </Typography>
                </Grid2>
                <Grid2 size={2}>
                    <Typography>x{cartItem.qty}</Typography>
                </Grid2>
                <Grid2
                    size={2}
                    sx={{
                        borderBottom: "1px solid black",
                        textAlign: "center",
                    }}
                >
                    <Typography>{cartItem.total}</Typography>
                </Grid2>
                <Grid2 size={2}>
                    <Button onClick={() => removeFromCart(cartItem.uuid)}>
                        <DeleteIcon />
                    </Button>
                </Grid2>
            </Grid2>
        </Paper>
    );
}
