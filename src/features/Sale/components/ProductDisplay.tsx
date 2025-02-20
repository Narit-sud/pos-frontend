import { Grid2, Card, CardContent, Typography } from "@mui/material";
import { useProduct } from "../../Product";

export function ProductDisplay() {
    const { mainProducts, variantProducts } = useProduct();
    // const fullProduct = mainProducts.map((prod) => ({
    //     ...prod,
    //     variants: variantProducts.filter(
    //         (item) => item.mainProduct === prod.uuid,
    //     ),
    // }));
    return (
        <div>
            {mainProducts.map((prod) => {
                return (
                    <Grid2 container key={prod.uuid + "display"}>
                        <Grid2
                            size={2}
                            sx={{ border: "1px solid black", borderRadius: 1 }}
                        >
                            <Card>
                                <CardContent>
                                    <Typography>{prod.name}</Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2>
                );
            })}
        </div>
    );
}
