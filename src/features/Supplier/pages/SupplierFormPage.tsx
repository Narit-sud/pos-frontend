import { Box, Typography } from "@mui/material";
import { SupplierForm } from "../components/SupplierForm";

export default function SupplierFormPage() {
    return (
        <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 2 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>
                New Supplier
            </Typography>
            <SupplierForm />
        </Box>
    );
}
