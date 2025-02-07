import { useParams } from "react-router";
import { MainProductForm } from "../components/MainProductForm";
import { useProduct } from "../useProduct";
import {
    FullProductClass,
    MainProductClass,
    VariantProductClass,
} from "../class";
import { Container } from "@mui/material";

export default function ProductForm() {
    const { uuid } = useParams();
    return (
        <Container>
            <MainProductForm existedProductUUID={uuid} />
        </Container>
    );
}
