import { Badge, Button } from "@mui/material";
import { useState } from "react";

type Props = {
    amount: number;
    addMoney: (amount: number) => void;
};

export function Money({ amount, addMoney }: Props) {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount((prev) => prev + 1);
        addMoney(amount);
    };
    return (
        <Button
            type="button"
            variant="contained"
            onClick={handleClick}
            sx={{ position: "relative" }}
        >
            <Badge
                badgeContent={count}
                color="secondary"
                sx={{ position: "absolute", top: 0, right: 2 }}
            />
            {amount}
        </Button>
    );
}
