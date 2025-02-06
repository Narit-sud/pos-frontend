import { useState } from "react";
import CustomModal from "../../../_components/CustomModal";
import { ProductForm } from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import { useProduct } from "../useProduct";
import { Button } from "@mui/material";
import { ProductMain } from "../class";

export function ProductPage() {
    const { productMains } = useProduct();
    const [productInModal, setProductInModal] = useState<
        ProductMain | undefined
    >(undefined);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const selectProduct = (main: ProductMain) => {
        setProductInModal(main);
        setModalOpen(true);
    };

    function handleCreateButton() {
        setProductInModal(undefined);
        setModalOpen(true);
    }
    return (
        <div>
            <Button onClick={handleCreateButton}>Create new Product</Button>
            <ProductTable
                productMain={productMains}
                selectProduct={selectProduct}
            />
            <CustomModal
                open={modalOpen}
                handleClose={() => setModalOpen(false)}
            >
                <ProductForm productMain={productInModal || undefined} />
            </CustomModal>
        </div>
    );
}
