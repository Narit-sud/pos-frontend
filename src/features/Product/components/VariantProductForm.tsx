import {
    Box,
    Button,
    FormControl,
    Grid,
    Grid2,
    TextField,
} from "@mui/material";
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
                                }}
                            >
                                <Grid2
                                    size={1}
                                    sx={{
                                        placeItems: "center",
                                        placeContent: "center",
                                        textAlign: "center",
                                    }}
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
                                <Grid2 size={1}>
                                    <TextField
                                        type="number"
                                        id={prod.uuid}
                                        name="price"
                                        label="Price"
                                        value={prod.price}
                                        onChange={handleChange}
                                    />
                                </Grid2>
                                <Grid2 size={1}>
                                    <TextField
                                        type="number"
                                        id={prod.uuid}
                                        name="cost"
                                        label="Cost"
                                        value={prod.cost}
                                        onChange={handleChange}
                                    />
                                </Grid2>
                                {variants.length > 1 && (
                                    <>
                                        <Grid2
                                            size={3}
                                            sx={{
                                                placeItems: "center",
                                                placeContent: "center",
                                            }}
                                        >
                                            <TextField
                                                type="text"
                                                id={prod.uuid}
                                                name="detail"
                                                label="Option detail"
                                                value={prod.detail}
                                                onChange={handleChange}
                                            />
                                        </Grid2>
                                        <Grid2
                                            size={2}
                                            sx={{ placeItems: "center" }}
                                        >
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
