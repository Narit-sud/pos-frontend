import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { useCategory } from "../useCategory";

export default function CategoryPage() {
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
