import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Box,
    TableContainer,
} from "@mui/material";
import { useSupplier } from "../useSupplier";

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

export function SupplierTable() {
    const { suppliers } = useSupplier();

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
                            {suppliers?.map((supplier) => (
                                <TableRow key={supplier.uuid} sx={bodyStyle}>
                                    <TableCell sx={cellStyle}>
                                        {supplier.name}
                                    </TableCell>
                                    <TableCell sx={cellStyle}>
                                        {supplier.surname}
                                    </TableCell>
                                    <TableCell sx={cellStyle}>
                                        {supplier.phoneNumber}
                                    </TableCell>
                                    <TableCell sx={cellStyle}>
                                        {supplier.email}
                                    </TableCell>
                                    <TableCell sx={cellStyle}>
                                        {supplier.detail}
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
