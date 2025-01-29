import { Alert, Box, Button, Modal, Typography } from "@mui/material"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router"
import { useState } from "react"

type Props = {
    open: boolean
    handleClose: () => void
}
export default function UserModal({ open, handleClose }: Props) {
    const navigate = useNavigate()
    const { user, logout } = useAuth()
    const [alertTag, setAlertTag] = useState<{
        open: boolean
        message: string
    }>({ open: false, message: "" })

    const handleLogoutButton = async () => {
        try {
            await logout()
            setAlertTag({
                open: true,
                message: "Logout complete, redirecting to home page",
            })
            setTimeout(() => {
                navigate("/")
            }, 2000)
        } catch (error) {}
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
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
            >
                {alertTag.open && (
                    <Alert severity="success">{alertTag.message}</Alert>
                )}
                <Typography>{user?.name}</Typography>
                <Button onClick={handleLogoutButton} sx={{ alignSelf: "end" }}>
                    Logout
                </Button>
            </Box>
        </Modal>
    )
}
