import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useCategory } from "../useCategory";

export default function CategoryTable() {
    const { categories } = useCategory();
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {categories.map((cat) => {
                    return (
                        <TableRow key={cat.uuid}>
                            <TableCell>{cat.name}</TableCell>
                        </TableRow>
                    );
                })}
                <TableRow></TableRow>
            </TableBody>
        </Table>
    );
}
