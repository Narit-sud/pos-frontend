import { ProductForm } from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import { useProduct } from "../useProduct";
export function ProductPage() {
    const { productMain } = useProduct();
    return (
        <div>
            <ProductTable productMain={productMain} />
            <ProductForm />
        </div>
    );
}
