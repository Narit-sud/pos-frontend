import { useParams } from "react-router";
import { Container } from "@mui/material";
import { ProductForm } from "../components/ProductForm";

export default function ProductFormPage() {
    const { uuid } = useParams();
    return (
        <Container>
            <ProductForm existedProductUUID={uuid} />
        </Container>
    );
}
