import { Box, Stack } from "@mui/material";
import { useCustomer } from "../useCustomer";

type Props = {};
export function CustomerList({}: Props) {
    const { customers } = useCustomer();
    return (
        <Stack>
            {customers?.map((cus) => {
                return <Box key={cus.uuid}>{cus.name}</Box>;
            })}
        </Stack>
    );
}
