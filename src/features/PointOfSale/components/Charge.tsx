import {
    Box,
    Button,
    Typography,
    TextField,
    Paper,
    IconButton,
} from "@mui/material";
import { RestartAlt } from "@mui/icons-material";
import { useState } from "react";

interface ChargeProps {
    total: number;
    onConfirm: () => void;
    onCancel: () => void;
}

export function Charge({ total, onConfirm, onCancel }: ChargeProps) {
    const [received, setReceived] = useState<number>(0);
    const denominations = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
    const needMore = total - received;

    const handleAddAmount = (amount: number) => {
        setReceived((prev) => prev + amount);
    };

    const handleReceivedChange = (value: string) => {
        const numValue = parseFloat(value) || 0;
        setReceived(numValue);
    };

    const handleReset = () => {
        setReceived(0);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Payment Details
            </Typography>

            {/* Payment Info */}
            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                <Box sx={{ "& > *:not(:last-child)": { mb: 3 } }}>
                    {/* Total Due */}
                    <Box>
                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            gutterBottom
                        >
                            Total Due
                        </Typography>
                        <Typography
                            variant="h4"
                            color="primary.main"
                            sx={{ fontWeight: 500 }}
                        >
                            ฿
                            {total.toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                            })}
                        </Typography>
                    </Box>

                    {/* Received Amount */}
                    <Box>
                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            gutterBottom
                        >
                            Received
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <TextField
                                type="number"
                                value={received}
                                onChange={(e) =>
                                    handleReceivedChange(e.target.value)
                                }
                                fullWidth
                                sx={{
                                    "& input": {
                                        fontSize: "2rem",
                                        padding: "8px 14px",
                                        textAlign: "right",
                                    },
                                }}
                            />
                            <IconButton
                                onClick={handleReset}
                                color="primary"
                                sx={{
                                    border: "1px solid",
                                    borderColor: "primary.main",
                                }}
                            >
                                <RestartAlt />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Change/Need More */}
                    <Box>
                        <Typography
                            variant="subtitle2"
                            color={needMore > 0 ? "error.main" : "success.main"}
                            gutterBottom
                        >
                            {needMore > 0 ? "Still Needed" : "Change"}
                        </Typography>
                        <Typography
                            variant="h4"
                            color={needMore > 0 ? "error.main" : "success.main"}
                            sx={{ fontWeight: 500 }}
                        >
                            ฿
                            {Math.abs(needMore).toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                            })}
                        </Typography>
                    </Box>
                </Box>
            </Paper>

            {/* Quick Add Buttons */}
            <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                    Quick Add Amount
                </Typography>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 1,
                    }}
                >
                    {denominations.map((amount) => (
                        <Button
                            key={amount}
                            variant="outlined"
                            onClick={() => handleAddAmount(amount)}
                            sx={{
                                height: "48px",
                                fontSize: "1.1rem",
                                "&:hover": {
                                    backgroundColor: "primary.light",
                                    color: "white",
                                },
                            }}
                        >
                            ฿{amount}
                        </Button>
                    ))}
                </Box>
            </Paper>

            {/* Action Buttons */}
            <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={onConfirm}
                    disabled={needMore > 0}
                    sx={{ py: 2 }}
                >
                    {needMore > 0 ? "Insufficient Amount" : "Complete Payment"}
                </Button>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={onCancel}
                    sx={{ py: 2 }}
                >
                    Cancel
                </Button>
            </Box>
        </Box>
    );
}
