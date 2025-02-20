import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, Button } from "@mui/material";
import { useCart } from "../useCart";

export function MenuBar() {
    const { currentCart } = useCart();
    return (
        <Box>
            <Button
                type="button"
                variant="text"
                sx={{ position: "absolute", top: "0", right: "1" }}
            >
                <ShoppingCartIcon sx={{ position: "relative" }} />
                <Badge badgeContent={currentCart.length} variant="standard" />
            </Button>
        </Box>
    );
}
