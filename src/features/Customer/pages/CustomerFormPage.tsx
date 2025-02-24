import { Box, Typography } from "@mui/material";
import { CustomerForm } from "../components/CustomerForm";

export default function CustomerFormPage() {
    return (
        <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 2 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>
                New Customer
            </Typography>
            <CustomerForm />
        </Box>
    );
}
