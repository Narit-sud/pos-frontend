import { Box, FormControl, TextField } from "@mui/material";
import { ProductVariant } from "../class";

type Props = {
    variant: ProductVariant;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export function SingleForm({ variant, handleChange }: Props) {
    return (
        <FormControl>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                    type="number"
                    id="price"
                    label="Urice"
                    name={variant?.uuid}
                    value={variant?.price}
                    onChange={handleChange}
                />
                <TextField
                    type="number"
                    id="cost"
                    label="Cost"
                    name={variant?.uuid}
                    value={variant?.cost}
                    onChange={handleChange}
                />
            </Box>
        </FormControl>
    );
}
