import { Box, Divider, Grid2, Paper, Typography } from "@mui/material";
import { useCart } from "../useCart";

export function Receipt() {
    const { currentCart, grandTotal, saleOrder } = useCart();
    return (
        <Paper elevation={5} sx={{ p: 2 }}>
            {/* Header */}
            <Typography sx={{ textAlign: "center" }}>My store</Typography>
            <Divider sx={{ my: 2 }} />
            {/* Body */}
            {currentCart.map((item) => {
                return (
                    <Grid2 container key={item.uuid}>
                        <Grid2 size={1}>
                            <Typography>{item.qty}</Typography>
                        </Grid2>
                        <Grid2 size={7}>
                            <Typography>
                                {item.mainName} {item.variantName}
                            </Typography>
                        </Grid2>
                        <Grid2 size={3}>
                            <Typography>@{item.price}</Typography>
                        </Grid2>
                        <Grid2 size={1}>
                            <Typography>{item.total}</Typography>
                        </Grid2>
                    </Grid2>
                );
            })}
            {/* Footer */}
            <Grid2 container>
                <Grid2 size={5}>
                    <Typography textAlign="center">Total </Typography>
                </Grid2>
                <Grid2 size={7}>
                    <Typography textAlign="center">{grandTotal}</Typography>
                </Grid2>
                <Typography>
                    {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                    }).format(new Date())}
                </Typography>
                <Divider />
                <Typography sx={{}}>Order id: {saleOrder.uuid}</Typography>
            </Grid2>
        </Paper>
    );
}
