import { Button, Stack, Typography } from "@mui/material";
import ProductTable from "../../components/product/ProductTable";
import { useProduct } from "../../contexts/ProductContext";
import { useNavigate } from "react-router";

export default function ProductPage() {
    const navigate = useNavigate();
    const { products } = useProduct();

    return (
        <div>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                sx={{ bgcolor: "paleturquoise", p: 1 }}
            >
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate("create");
                    }}
                >
                    Create
                </Button>
            </Stack>
            <ProductTable products={products} />
        </div>
    );
}
