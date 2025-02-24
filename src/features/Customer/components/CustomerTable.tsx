import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Box,
    TableContainer,
} from "@mui/material";
import { useCustomer } from "../useCustomer";

const headerStyle = {
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "primary.main",
    color: "white",
};

const bodyStyle = {
    cursor: "pointer",
    ":hover": { bgcolor: "action.hover" },
};

const cellStyle = { textAlign: "center" };

export function CustomerTable() {
    const { customers } = useCustomer();

    return (
        <Paper elevation={2}>
            <Box sx={{ p: 2 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={headerStyle}>Name</TableCell>
                                <TableCell sx={headerStyle}>Surname</TableCell>
                                <TableCell sx={headerStyle}>Phone</TableCell>
                                <TableCell sx={headerStyle}>Email</TableCell>
                                <TableCell sx={headerStyle}>Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers?.map((customer) => (
                                <TableRow key={customer.uuid} sx={bodyStyle}>
                                    <TableCell sx={cellStyle}>
                                        {customer.name}
                                    </TableCell>
                                    <TableCell sx={cellStyle}>
                                        {customer.surname}
                                    </TableCell>
                                    <TableCell sx={cellStyle}>
                                        {customer.phoneNumber}
                                    </TableCell>
                                    <TableCell sx={cellStyle}>
                                        {customer.email}
                                    </TableCell>
                                    <TableCell sx={cellStyle}>
                                        {customer.detail}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Paper>
    );
}
