import {
    FullProductClass,
    MainProductClass,
    VariantProductClass,
} from "../class";
import {
    Badge,
    Box,
    Button,
    FormControl,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { VariantProductForm } from "./VariantProductForm";
import CategorySelect from "../../Category/components/CategorySelect";
import { useProduct } from "../useProduct";
import { updateVariantCount } from "../utils";
import { useNavigate } from "react-router";

type Props = {
    existedProductUUID: string | undefined;
};

export function MainProductForm({ existedProductUUID }: Props) {
    const navigate = useNavigate();
    const {
        mainProducts,
        variantProducts,
        createNewProduct,
        deleteProduct,
        updateFullProduct,
    } = useProduct();
    const [mainProduct, setMainProduct] = useState<MainProductClass>();
    const [variants, setVariants] = useState<VariantProductClass[]>([]);

    // initializing values
    useEffect(() => {
        if (existedProductUUID !== "new") {
            const findMain = mainProducts.find(
                (prod) => prod.uuid === existedProductUUID,
            );
            const findVariants = variantProducts.filter(
                (prod) => prod.mainProduct === existedProductUUID,
            );
            setMainProduct(findMain);
            setVariants(findVariants);
        } else {
            const newMain = new MainProductClass();
            const newVariant = new VariantProductClass({
                mainProduct: newMain.uuid,
            });
            setMainProduct(newMain);
            setVariants([newVariant]);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, name, value } = e.target;
        // main product field will has id = 'main'
        // variant product field will has id = its uuid
        if (id === "main") {
            setMainProduct(
                (prev) =>
                    ({
                        ...prev,
                        [name]: value,
                        status: "update",
                    }) as MainProductClass,
            );
        } else {
            if (name === "price" || name === "cost") {
                // if this is number field
                setVariants((prev) =>
                    prev?.map((item) =>
                        item.uuid === id
                            ? {
                                  ...item,
                                  [name]: Number(value),
                                  status:
                                      item.status === "create"
                                          ? "create"
                                          : "update",
                              }
                            : item,
                    ),
                );
            } else {
                // if this is text field
                setVariants((prev) =>
                    prev?.map((item) =>
                        item.uuid === id
                            ? {
                                  ...item,
                                  [name]: value,
                                  status:
                                      item.status === "create"
                                          ? "create"
                                          : item.status === "active"
                                            ? "update"
                                            : "update",
                              }
                            : item,
                    ),
                );
            }
        }
    };

    const handleSelectChange = (e: SelectChangeEvent) => {
        const { value } = e.target;
        setMainProduct(
            (prev) =>
                ({
                    ...prev,
                    category: value,
                    status: "update",
                }) as MainProductClass,
        );
    };

    const handleAddButton = () => {
        // update variantCount
        setMainProduct(
            (prev) =>
                ({
                    ...prev,
                    variantCount: updateVariantCount(variants, 1),
                    status: "update",
                }) as MainProductClass,
        );

        // add new variant to newVariants
        setVariants((prev) => [
            ...prev,
            new VariantProductClass({ mainProduct: mainProduct!.uuid }),
        ]);
    };

    const handleRemoveVariantButton = (variantUUID: string) => {
        // check variantCount if = 1 will not let remove
        if (mainProduct?.variantCount === 1) {
            alert("Product has to have at least 1 option");
            return;
        }
        // update variantCount
        setMainProduct(
            (prev) =>
                ({
                    ...prev,
                    variantCount: updateVariantCount(variants, -1),
                    status: "update",
                }) as MainProductClass,
        );
        // update variant status
        setVariants((prev) =>
            prev.map((prod) =>
                prod.status === "create" && prod.uuid === variantUUID
                    ? { ...prod, status: "don't create" }
                    : (prod.status === "active" || prod.status === "update") &&
                        prod.uuid === variantUUID
                      ? { ...prod, status: "delete" }
                      : prod,
            ),
        );
    };

    const handleReverseButton = (variantUUID: string) => {
        // update variantCount
        setMainProduct(
            (prev) =>
                ({
                    ...prev,
                    variantCount: updateVariantCount(variants, 1),
                    status: "update",
                }) as MainProductClass,
        );
        // update variant status
        setVariants((prev) =>
            prev.map((prod) =>
                prod.status === "don't create" && prod.uuid === variantUUID
                    ? { ...prod, status: "create" }
                    : prod.status === "delete" && prod.uuid === variantUUID
                      ? { ...prod, status: "update" }
                      : prod.status === "don't create" &&
                          prod.uuid === variantUUID
                        ? { ...prod, status: "create" }
                        : prod,
            ),
        );
    };

    const handleRemoveMainButton = async () => {
        if (existedProductUUID) {
            try {
                await deleteProduct(existedProductUUID);
            } catch (error) {
                alert("Delete this product failed");
            }
        }
    };

    const handleSaveButton = async () => {
        const newFullProduct = new FullProductClass({
            ...mainProduct,
            variants,
        });
        console.log("will create this one", newFullProduct);

        try {
            if (existedProductUUID === "new") {
                await createNewProduct(newFullProduct);
            } else {
                await updateFullProduct(newFullProduct);
            }
            navigate(-1);
        } catch (error) {
            alert("Create new product failed");
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                p: 5,
            }}
        >
            <FormControl>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 1,
                    }}
                >
                    <TextField
                        id="main"
                        name="name"
                        label="Name"
                        value={mainProduct?.name}
                        onChange={handleChange}
                    />
                    <CategorySelect
                        value={mainProduct?.category || ""}
                        onChange={handleSelectChange}
                    />
                    <TextField
                        id="main"
                        name="detail"
                        label="Detail"
                        value={mainProduct?.detail}
                        onChange={handleChange}
                    />
                    <Button
                        type="button"
                        variant="outlined"
                        onClick={handleAddButton}
                    >
                        Add Option
                        {
                            <Badge
                                badgeContent={mainProduct?.variantCount}
                                color="primary"
                                sx={{ ml: 2 }}
                            ></Badge>
                        }
                    </Button>
                </Box>
            </FormControl>
            <VariantProductForm
                variants={variants}
                handleRemove={handleRemoveVariantButton}
                handleUndo={handleReverseButton}
                handleChange={handleChange}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    justifyContent: "center",
                }}
            >
                <Button variant="contained" onClick={handleSaveButton}>
                    Save
                </Button>
                <Button variant="outlined" onClick={() => navigate("/product")}>
                    Cancel
                </Button>
                <Button variant="text" onClick={handleRemoveMainButton}>
                    Remove
                </Button>
            </Box>
            <Box>
                <div>
                    <p>Main</p>
                    {JSON.stringify(mainProduct)}
                </div>
                <div>
                    {variants.map((prod, index) => {
                        return (
                            <p key={index}>
                                {index + 1}: {JSON.stringify(prod)}
                            </p>
                        );
                    })}
                </div>
            </Box>
        </Box>
    );
}
