import { Box, Modal } from "@mui/material";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
    width?: number;
};
export default function CustomModal({
    children,
    open,
    onClose,
    width = 1000,
}: Props) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    position: "relative", // Changed from absolute
                    width: { width },
                    maxHeight: "90vh", // Use viewport height instead of fixed pixels
                    height: "auto",
                    overflowY: "auto",
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    borderRadius: 2,
                    margin: 2, // Add some margin to prevent touching screen edges
                }}
            >
                {children}
            </Box>
        </Modal>
    );
}
