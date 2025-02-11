import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { getAllCustomers } from "../services";
import { useEffect, useState } from "react";
import { CustomerType } from "../types";
import { useCart } from "../../Sale/useCart";

type Props = {
    selectedCustomer: string;
    sendValue: (uuid: string) => void;
};

export default function CustomerSelect({ selectedCustomer, sendValue }: Props) {
    const { saleOrder, updateCustomer } = useCart();
    const [customers, setCustomers] = useState<CustomerType[]>([]);

    const initialize = async () => {
        const loadCustomer = await getAllCustomers();
        setCustomers(loadCustomer);
    };
    const handleChange = (e: SelectChangeEvent) => {
        updateCustomer(e.target.value);
        sendValue(e.target.value);
    };

    useEffect(() => {
        initialize();
    }, []);
    return (
        <FormControl>
            <InputLabel id="Customer">Customer</InputLabel>
            <Select
                id="Customer"
                value={saleOrder.customerUUID}
                labelId="Customer"
                label="Customer"
                onChange={handleChange}
            >
                {customers?.map((cus) => {
                    return (
                        <MenuItem key={cus.uuid} value={cus.uuid}>
                            {cus.name}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}
