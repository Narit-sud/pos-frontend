import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { useProduct } from "../../Product";
import {
    ProcurementItemType,
    createProcurementItem,
} from "../types/ProcurementItemType";

type Props = {
    onClose: () => void;
    addItemToBill: (newItem: ProcurementItemType) => void;
};

export default function Adding({ onClose, addItemToBill }: Props) {
    const { fullProducts } = useProduct();
    const [selectedMain, setSelectedMain] = useState<{
        name: string;
        uuid: string;
    }>({ name: "", uuid: "" });
    const [selectedVariant, setSelectedVariant] = useState<{
        uuid: string;
        name: string;
        cost: number;
    }>({ uuid: "", name: "", cost: 0 });

    const handleSelectChange = (e: SelectChangeEvent) => {
        if (e.target.name === "main") {
            setSelectedMain({
                name:
                    fullProducts!.find((item) => item.uuid === e.target.value)
                        ?.name || "",
                uuid: e.target.value,
            });
            setSelectedVariant({ uuid: "", name: "", cost: 0 }); // Reset variant selection when main product changes
        } else if (e.target.name === "variant") {
            setSelectedVariant({
                uuid: e.target.value,
                name:
                    selectedMainProduct?.variants.find(
                        (item) => item.uuid === e.target.value,
                    )?.name || "",
                cost:
                    selectedMainProduct?.variants.find(
                        (item) => item.uuid === e.target.value,
                    )?.cost || 0,
            });
        }
    };

    const selectedMainProduct = fullProducts?.find(
        (product) => product.uuid === selectedMain.uuid,
    );

    const handleAddButton = () => {
        const newItemToAdd = createProcurementItem({
            mainName: selectedMain.name,
            mainUUID: selectedMain.uuid,
            variantName: selectedVariant.name,
            variantUUID: selectedVariant.uuid,
            cost: selectedVariant.cost,
        });
        addItemToBill(newItemToAdd);
        onClose();
    };
    return (
        <Box>
            <Stack spacing={2} sx={{ my: 3 }}>
                <FormControl>
                    <InputLabel>Select Product</InputLabel>
                    <Select
                        name="main"
                        label="Select Product"
                        value={selectedMain.uuid}
                        onChange={handleSelectChange}
                        fullWidth
                    >
                        {fullProducts?.map((main) => {
                            return (
                                <MenuItem
                                    key={main.uuid + "menuItem"}
                                    value={main.uuid}
                                >
                                    {main.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Select Variant</InputLabel>
                    <Select
                        name="variant"
                        label="Select Variant"
                        value={selectedVariant.uuid}
                        onChange={handleSelectChange}
                        fullWidth
                        disabled={!selectedMain.uuid} // Disable if no main product is selected
                    >
                        {selectedMainProduct?.variants?.map((variant) => {
                            return (
                                <MenuItem
                                    key={variant.uuid + "menuItem"}
                                    value={variant.uuid}
                                >
                                    {variant.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </Stack>
            <Button onClick={handleAddButton}>Add</Button>
            <Button onClick={onClose}>Cancel</Button>
        </Box>
    );
}
