import { Box, Container, Typography } from "@mui/material";
import ProductTable from "../components/ProductTable";

export function ProductPage() {
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 4 }}>
                Products
            </Typography>
            <ProductTable />
        </Box>
    );
}
