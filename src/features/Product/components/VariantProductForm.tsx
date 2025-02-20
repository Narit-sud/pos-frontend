import { Box, Button, FormControl, Grid2, TextField } from "@mui/material";
import { VariantProductClass } from "../class";

type Props = {
    variants: VariantProductClass[];
    handleRemove: (variantUUID: string) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleUndo: (variantUUID: string) => void;
};
export function VariantProductForm({
    variants,
    handleRemove,
    handleChange,
    handleUndo,
}: Props) {
    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(0, Number(e.target.value));
        e.target.value = value.toString();
        handleChange(e);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControl
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid black",
                    borderRadius: 1,
                    my: 1,
                    p: 1,
                    gap: 1,
                }}
            >
                {variants?.map((prod, index) => {
                    const isSingleVariant = variants.length === 1;
                    return (
                        <div key={prod.uuid}>
                            <Grid2
                                container
                                sx={{
                                    placeItems: "center",
                                    placeContent: "center",
                                    gap: 1,
                                    bgcolor:
                                        prod.status === "create"
                                            ? "#5cff7a"
                                            : prod.status === "update"
                                              ? "#ffd65c"
                                              : prod.status === "delete" ||
                                                  prod.status === "don't create"
                                                ? "#ff5c5c"
                                                : "",
                                    flexDirection: isSingleVariant
                                        ? "column"
                                        : "row",
                                }}
                            >
                                {!isSingleVariant && (
                                    <>
                                        <Grid2
                                            size={1}
                                            sx={{ textAlign: "center" }}
                                        >
                                            {`${index + 1}.`}
                                        </Grid2>
                                        <Grid2 size={3}>
                                            <TextField
                                                type="text"
                                                name="name"
                                                id={prod.uuid}
                                                label="Option name"
                                                value={prod.name}
                                                onChange={handleChange}
                                            />
                                        </Grid2>
                                    </>
                                )}
                                <Grid2 size={isSingleVariant ? 12 : 1}>
                                    <TextField
                                        type="number"
                                        id={prod.uuid}
                                        name="price"
                                        label="Price"
                                        value={prod.price}
                                        onChange={handleNumberChange}
                                        inputProps={{ min: 0 }}
                                        fullWidth={isSingleVariant}
                                    />
                                </Grid2>
                                <Grid2 size={isSingleVariant ? 12 : 1}>
                                    <TextField
                                        type="number"
                                        id={prod.uuid}
                                        name="cost"
                                        label="Cost"
                                        value={prod.cost}
                                        onChange={handleNumberChange}
                                        inputProps={{ min: 0 }}
                                        fullWidth={isSingleVariant}
                                    />
                                </Grid2>
                                {!isSingleVariant && (
                                    <>
                                        <Grid2 size={3}>
                                            <TextField
                                                type="text"
                                                id={prod.uuid}
                                                name="detail"
                                                label="Option detail"
                                                value={prod.detail}
                                                onChange={handleChange}
                                            />
                                        </Grid2>
                                        <Grid2 size={2}>
                                            {(prod.status === "create" ||
                                                prod.status === "update" ||
                                                prod.status === "active") && (
                                                <Button
                                                    variant="outlined"
                                                    onClick={() =>
                                                        handleRemove(prod.uuid)
                                                    }
                                                >
                                                    Remove
                                                </Button>
                                            )}
                                            {(prod.status === "delete" ||
                                                prod.status ===
                                                    "don't create") && (
                                                <Button
                                                    variant="outlined"
                                                    onClick={() =>
                                                        handleUndo(prod.uuid)
                                                    }
                                                >
                                                    Undo
                                                </Button>
                                            )}
                                        </Grid2>
                                    </>
                                )}
                            </Grid2>
                        </div>
                    );
                })}
            </FormControl>
        </Box>
    );
}
