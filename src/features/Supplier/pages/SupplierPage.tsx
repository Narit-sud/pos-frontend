import { Box, Button } from "@mui/material";
import { SupplierTable } from "../components/SupplierTable";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

export function SupplierPage() {
    const navigate = useNavigate();

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => navigate("/supplier/new")}
                >
                    New Supplier
                </Button>
            </Box>
            <SupplierTable />
        </Box>
    );
}
