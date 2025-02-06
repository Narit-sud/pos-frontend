import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { ProductVariant } from "../types";

type Props = {
    variants: ProductVariant[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    removeVariant: (variantUUID: string) => void;
};
export function VariantForm({ variants, handleChange, removeVariant }: Props) {
    return (
        <Box
            sx={{
                border: "1px solid black",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 2,
            }}
        >
            {variants.map((variant) => {
                return (
                    <FormControl key={variant.uuid}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                gap: 1,
                                mt: 2,
                            }}
                        >
                            <TextField
                                type="text"
                                id="name"
                                name={variant.uuid}
                                label="Option name"
                                value={variant.name}
                                onChange={handleChange}
                            />
                            <TextField
                                type="number"
                                id="price"
                                name={variant.uuid}
                                label="Price"
                                value={variant.price}
                                onChange={handleChange}
                            />
                            <TextField
                                type="number"
                                id="cost"
                                name={variant.uuid}
                                label="Cost"
                                value={variant.cost}
                                onChange={handleChange}
                            />
                            <TextField
                                type="text"
                                id="detail"
                                name={variant.uuid}
                                label="Option detail"
                                value={variant.detail}
                                onChange={handleChange}
                            />
                            <Button
                                type="button"
                                onClick={() => removeVariant(variant.uuid)}
                                variant="outlined"
                            >
                                Remove
                            </Button>
                        </Box>
                    </FormControl>
                );
            })}
        </Box>
    );
}
