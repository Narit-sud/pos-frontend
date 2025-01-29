import { Box, Modal } from "@mui/material"

type Props = {
    isOpen: boolean
    handleClose: () => void
}
export default function CartEditModal({ isOpen, handleClose }: Props) {
    return (
        <Modal open={isOpen}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: 300, md: 500 },
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1,
                    borderRadius: 2,
                }}
            ></Box>
        </Modal>
    )
}
