import { Box, FormControl, TextField, Typography } from "@mui/material";
import { ProductVariant } from "../types";

type Props = {
    productVariant: ProductVariant;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export function VariantForm({ productVariant, handleChange }: Props) {
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
            <FormControl>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <TextField
                        type="text"
                        id="name"
                        name={productVariant.uuid}
                        label="Option name"
                        value={productVariant.name}
                        onChange={handleChange}
                    />
                    <TextField
                        type="number"
                        id="price"
                        name={productVariant.uuid}
                        label="Price"
                        value={productVariant.price}
                        onChange={handleChange}
                    />
                    <TextField
                        type="number"
                        id="cost"
                        name={productVariant.uuid}
                        label="Cost"
                        value={productVariant.cost}
                        onChange={handleChange}
                    />
                    <TextField
                        type="text"
                        id="detail"
                        name={productVariant.uuid}
                        label="Option detail"
                        value={productVariant.detail}
                        onChange={handleChange}
                    />
                </Box>
            </FormControl>
        </Box>
    );
}
