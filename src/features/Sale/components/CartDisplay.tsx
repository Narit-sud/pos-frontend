import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { useCart } from "../useCart";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export function CartDisplay() {
    const { currentCart } = useCart();
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}
            >
                <Button variant="outlined">Save Cart</Button>
                <Button variant="outlined">Load Cart</Button>
            </Box>
            <Box
                sx={{
                    p: 2,
                    border: "1px solid black",
                    borderRadius: 1,
                    height: 300,
                    overflowY: "scroll",
                    my: 1,
                }}
            >
                <Grid2 container sx={{ width: 500 }}>
                    <Grid2 size={4}>
                        <Typography textAlign="center">Product</Typography>
                    </Grid2>
                    <Grid2 size={1}>
                        <Typography textAlign="center">Price</Typography>
                    </Grid2>
                    <Grid2 size={2}>
                        <Typography textAlign="center">Quantity</Typography>
                    </Grid2>
                    <Grid2 size={1}>
                        <Typography textAlign="center">Total</Typography>
                    </Grid2>
                    <Grid2 size={4}>
                        <Typography textAlign="center">Options</Typography>
                    </Grid2>
                </Grid2>
                {currentCart.map((item) => {
                    return (
                        <Grid2
                            container
                            key={item.uuid + "cart"}
                            sx={{
                                p: 1,
                                borderRadius: 1,
                                ":hover": { bgcolor: "lightgray" },
                                width: 500,
                            }}
                        >
                            <Grid2 size={2}>
                                <Typography textAlign="center">
                                    {item.mainName}
                                </Typography>
                            </Grid2>
                            <Grid2 size={2}>
                                <Typography textAlign="center">
                                    {item.variantName}
                                </Typography>
                            </Grid2>
                            <Grid2 size={1}>
                                <Typography textAlign="center">
                                    {item.price.toFixed(2)}
                                </Typography>
                            </Grid2>
                            <Grid2 size={2}>
                                <Typography textAlign="center">
                                    {item.qty}
                                </Typography>
                            </Grid2>
                            <Grid2 size={1}>
                                <Typography textAlign="center">
                                    {item.total}
                                </Typography>
                            </Grid2>
                            <Grid2 size={4}>
                                <Stack direction="row">
                                    <Button variant="outlined">
                                        <EditIcon />
                                    </Button>
                                    <Button variant="outlined">
                                        <DeleteIcon />
                                    </Button>
                                </Stack>
                            </Grid2>
                        </Grid2>
                    );
                })}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Button variant="contained">Charge</Button>
                <Button variant="outlined">Close</Button>
            </Box>
        </Box>
    );
}
