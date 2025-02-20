import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useSupplier } from "../useSupplier";

export function SupplierTable() {
    const { suppliers } = useSupplier();
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                            Name
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                            Surname
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                            Detail
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                            Phone Number
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                            Email
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {suppliers.map((sup) => {
                    return (
                        <TableRow
                            key={sup.uuid + "row"}
                            sx={{ ":hover": { bgcolor: "lightgray" } }}
                        >
                            <TableCell>
                                <Typography sx={{ textAlign: "center" }}>
                                    {sup.name}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography sx={{ textAlign: "center" }}>
                                    {sup.surname}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography sx={{ textAlign: "center" }}>
                                    {sup.detail}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography sx={{ textAlign: "center" }}>
                                    {sup.phoneNumber}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography sx={{ textAlign: "center" }}>
                                    {sup.email}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
