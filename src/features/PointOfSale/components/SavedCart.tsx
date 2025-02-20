import { Box, Button, Typography, Stack, Divider } from "@mui/material";
import { localOrder } from "../utils/localOrder";
import { useCart } from "../useCart";
import { OrderType } from "../types";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface SavedCartProps {
    onClose: () => void;
}

export function SavedCart({ onClose }: SavedCartProps) {
    const { loadSavedOrder, currentCart } = useCart();
    const [savedOrders, setSavedOrders] = useState(localOrder.get());
    const [confirmDialog, setConfirmDialog] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
    const [deleteConfirmDialog, setDeleteConfirmDialog] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState<string | null>(null);

    const handleLoadCart = (order: OrderType) => {
        if (currentCart.length > 0) {
            setSelectedOrder(order);
            setConfirmDialog(true);
        } else {
            loadSavedOrder(order);
            onClose();
        }
    };

    const handleConfirmLoad = () => {
        if (selectedOrder) {
            loadSavedOrder(selectedOrder, true); // true for force clear
            setConfirmDialog(false);
            onClose();
        }
    };

    const handleDeleteClick = (uuid: string) => {
        setOrderToDelete(uuid);
        setDeleteConfirmDialog(true);
    };

    const handleConfirmDelete = () => {
        if (orderToDelete) {
            localOrder.remove(orderToDelete);
            setSavedOrders(localOrder.get());
            setDeleteConfirmDialog(false);
            setOrderToDelete(null);
        }
    };

    return (
        <Box sx={{ p: 2 }}>
            <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
                <Typography variant="h6">Saved Carts</Typography>
                <Button onClick={onClose} variant="outlined" size="small">
                    Back to Cart
                </Button>
            </Box>

            <Box
                sx={{
                    minHeight: "200px",
                    maxHeight: "400px",
                    overflowY: "auto",
                    mb: 2,
                    p: 1,
                    border: "1px solid #ddd",
                    borderRadius: 1,
                }}
            >
                {savedOrders.map((order) => (
                    <Box
                        key={order.uuid}
                        sx={{
                            mb: 2,
                            p: 1,
                            border: "1px solid #eee",
                            borderRadius: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mb: 1,
                            }}
                        >
                            <Typography variant="subtitle1">
                                Cart #{order.uuid.slice(-4)}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Button
                                    size="small"
                                    onClick={() => handleLoadCart(order)}
                                >
                                    Load
                                </Button>
                                <Button
                                    size="small"
                                    color="error"
                                    onClick={() =>
                                        handleDeleteClick(order.uuid)
                                    }
                                >
                                    Delete
                                </Button>
                            </Stack>
                        </Box>
                        <Divider sx={{ my: 1 }} />
                        <Box
                            sx={{
                                mt: 1,
                                p: 1,
                                bgcolor: "grey.50",
                                borderRadius: 1,
                            }}
                        >
                            {order.saleItems.map((item) => (
                                <Typography
                                    key={item.uuid}
                                    variant="body2"
                                    sx={{ mb: 0.5 }}
                                >
                                    {item.mainName}: {item.variantName} x
                                    {item.qty} (฿{item.total})
                                </Typography>
                            ))}
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="subtitle2" align="right">
                                Total: ฿
                                {order.saleItems.reduce(
                                    (sum, item) => sum + item.total,
                                    0,
                                )}
                            </Typography>
                        </Box>
                    </Box>
                ))}
                {savedOrders.length === 0 && (
                    <Typography
                        color="text.secondary"
                        sx={{ textAlign: "center", mt: 2 }}
                    >
                        No saved carts
                    </Typography>
                )}
            </Box>

            {/* Delete Confirmation Dialog */}
            <Dialog
                open={deleteConfirmDialog}
                onClose={() => setDeleteConfirmDialog(false)}
            >
                <DialogTitle>Delete Saved Cart?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this saved cart? This
                        action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteConfirmDialog(false)}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirmDelete}
                        color="error"
                        autoFocus
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Confirmation Dialog */}
            <Dialog
                open={confirmDialog}
                onClose={() => setConfirmDialog(false)}
            >
                <DialogTitle>Replace Current Cart?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your current cart has items. Loading a saved cart will
                        replace all current items. Do you want to continue?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmDialog(false)}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirmLoad}
                        color="primary"
                        autoFocus
                    >
                        Replace Cart
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
