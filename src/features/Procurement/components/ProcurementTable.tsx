import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";

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

export default function ProductTable() {
    const navigate = useNavigate();
    return (
        <Paper elevation={2}>
            <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
                >
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => navigate("new")}
                    >
                        Create new bill
                    </Button>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={headerStyle}>Date</TableCell>
                                <TableCell sx={headerStyle}>Supplier</TableCell>
                                <TableCell sx={headerStyle}>Total</TableCell>
                                <TableCell sx={headerStyle}>SKU(s)</TableCell>
                                <TableCell sx={headerStyle}>Options</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={bodyStyle}>
                            <TableCell sx={{ textAlign: "center" }}>
                                te/st/da te:00
                            </TableCell>
                            <TableCell sx={{ textAlign: "center" }}>
                                Test Supplier name
                            </TableCell>
                            <TableCell sx={{ textAlign: "center" }}>
                                1000
                            </TableCell>
                            <TableCell sx={{ textAlign: "center" }}>
                                33
                            </TableCell>
                            <TableCell sx={{ textAlign: "center" }}>
                                <Button>
                                    <EditIcon />
                                </Button>
                            </TableCell>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Paper>
    );
}
