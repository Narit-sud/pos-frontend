import { Box, Button, Paper, Typography } from "@mui/material";
import { useCustomer } from "../useCustomer";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export function CustomerList() {
    const { customers } = useCustomer();
    const navigate = useNavigate();

    const columns: GridColDef[] = [
        { field: "name", headerName: "Name", flex: 1 },
        { field: "surname", headerName: "Surname", flex: 1 },
        { field: "phoneNumber", headerName: "Phone", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
    ];

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

            <Paper sx={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={customers}
                    columns={columns}
                    getRowId={(row) => row.uuid}
                    pageSizeOptions={[5, 10, 25]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                />
            </Paper>
        </Box>
    );
}
