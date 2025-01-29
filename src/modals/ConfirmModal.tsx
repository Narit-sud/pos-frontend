import { Button, Modal, Paper, Typography } from "@mui/material"
type Props = {
    open: boolean
    handleClose: () => void
}
export default function ConfirmModal({ open = false, handleClose }: Props) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                borderRadius: "10px",
                boxShadow: 24,
                p: 2,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Paper>
                <Typography>Confirm to delete this Product?</Typography>
                <Button variant="contained">Comfirm</Button>
                <Button variant="outlined">Cancel</Button>
            </Paper>
        </Modal>
    )
}
