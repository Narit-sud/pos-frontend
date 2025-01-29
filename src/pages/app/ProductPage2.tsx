import { useEffect, useState } from "react";
import { getAllProductMain } from "../../services/productMain";
import ProductTable2 from "../../components/product/ProductTable2";

export default function ProductPage2() {
    const [productMain, setProductMain] = useState([]);

    async function loadProductMain() {
        const products = await getAllProductMain();
        setProductMain(products);
    }

    useEffect(() => {
        loadProductMain();
    }, []);
    return (
        <div>
            <ProductTable2 productMain={productMain} />
        </div>
    );
}
