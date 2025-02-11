import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useCart } from "../useCart";
import { Money } from "./Money.tsx";
import { Receipt } from "./Receipt.tsx";

type Props = {
    onBack: () => void;
    onClose: () => void;
};

export function Charge({ onClose, onBack }: Props) {
    const { grandTotal } = useCart();
    const [received, setReceived] = useState<number>(0);
    const [change, setChange] = useState<number>(grandTotal & -1 || 0);

    const reCalChange = () => {
        setChange(Number(grandTotal - received));
    };
    const addMoney = (amount: number) => {
        setReceived((prev) => Number(prev + amount));
    };
    const resetMoney = () => setReceived(0);

    useEffect(() => {
        reCalChange();
    }, [received]);
    return (
        <Box>
            <Receipt />
            <Typography>Total: {grandTotal}</Typography>
            <Typography>Received: {received}</Typography>
            <Typography>
                Change:{" "}
                {received > grandTotal ? change * -1 : "Need more money"}
            </Typography>
            <Box>
                <Money amount={1} addMoney={addMoney} />
                <Money amount={2} addMoney={addMoney} />
                <Money amount={5} addMoney={addMoney} />
                <Money amount={10} addMoney={addMoney} />
                <Money amount={20} addMoney={addMoney} />
                <Money amount={50} addMoney={addMoney} />
                <Money amount={100} addMoney={addMoney} />
                <Money amount={500} addMoney={addMoney} />
                <Money amount={1000} addMoney={addMoney} />
            </Box>
            <Button onClick={resetMoney}>Reset</Button>
            <Button onClick={onBack}>Back</Button>
            <Button onClick={onClose}>Close</Button>
        </Box>
    );
}
