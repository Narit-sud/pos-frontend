import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useCart } from "../useCart";
import { CartItem } from "./CartItem";
import CustomerSelect from "../../Customer/components/CustomerSelect";

type Props = {
    onClose: () => void;
    onCharge: () => void;
};

export function CurrentCart({ onClose, onCharge }: Props) {
    const {
        currentCart,
        grandTotal,
        saveCart,
        saleOrder: order,
        updateCustomer,
    } = useCart();
    return (
        <>
            {currentCart.length === 0 && (
                <Typography>No item in the cart</Typography>
            )}
            {currentCart.length > 0 && (
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 1,
                            mb: 1,
                        }}
                    >
                        <Button variant="outlined" onClick={saveCart}>
                            Save this cart
                        </Button>
                        <Button variant="outlined">Load cart</Button>
                    </Box>
                    <Box
                        sx={{
                            height: 200,
                            maxHeight: 400,
                            border: "1px solid black",
                            borderRadius: 1,
                            p: 1,
                            overflowY: "scroll",
                        }}
                    >
                        {currentCart.map((item) => {
                            return (
                                <CartItem
                                    key={item.uuid + "item"}
                                    cartItem={item}
                                />
                            );
                        })}
                    </Box>
                    <Typography>Total: {grandTotal}</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            px: 15,
                        }}
                    >
                        <CustomerSelect
                            selectedCustomer={order.customerUUID}
                            sendValue={updateCustomer}
                        />
                        <Button variant="contained" onClick={onCharge}>
                            Charge
                        </Button>
                        <Button variant="text" onClick={onClose}>
                            Cancel
                        </Button>
                    </Box>
                    {JSON.stringify(order)}
                    <Divider />
                    {JSON.stringify(currentCart)}
                </Box>
            )}
        </>
    );
}
