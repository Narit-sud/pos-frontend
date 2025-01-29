import { Box, FormControl, Grid2, Modal, TextField } from "@mui/material";
import { ProductMain } from "../../interfaces/Product";

type Props = {
    open: boolean;
    handleClose: () => void;
    product: ProductMain;
};
export default function ProductModal2({ open, handleClose, product }: Props) {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "90vw", md: "75vw", xl: "60vw" },
                    height: "80vh",
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1,
                    p: 1,
                    overflowY: "scroll",
                    borderRadius: 2,
                }}
            >
                <FormControl>
                    <div>{JSON.stringify(product)}</div>
                </FormControl>
            </Box>
        </Modal>
    );
}
