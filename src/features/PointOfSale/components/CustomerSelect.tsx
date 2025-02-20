import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useCustomer } from "../../Customer/useCustomer";
import { useCart } from "../useCart";

export function CustomerSelect() {
    const { customers } = useCustomer();
    const { customerUUID, updateCustomer } = useCart();

    return (
        <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Customer</InputLabel>
            <Select
                value={customerUUID}
                label="Customer"
                onChange={(e) => updateCustomer(e.target.value)}
            >
                {customers?.map((customer) => (
                    <MenuItem key={customer.uuid} value={customer.uuid}>
                        {customer.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
