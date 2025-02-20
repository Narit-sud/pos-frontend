import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { getAllCustomers } from "../services";
import { useEffect, useState } from "react";
import { useCart } from "../../Sale/useCart";
import type { CustomerType } from "../types";

type Props = {
    sendValue: (uuid: string) => void;
};

export default function CustomerSelect({ sendValue }: Props) {
    const { order, updateCustomer } = useCart();
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
                value={order.customerUUID}
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
