import { Box, Button, Typography } from "@mui/material";
import { CustomerTable } from "../components/CustomerTable";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function CustomerPage() {
    const navigate = useNavigate();

    return (
        <Box>
            <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
                <Typography variant="h4">Customers</Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => navigate("/customer/new")}
                >
                    New Customer
                </Button>
            </Box>
            <CustomerTable />
        </Box>
    );
}
