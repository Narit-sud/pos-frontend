import { Button, Modal, TextField } from "@mui/material"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"

function UserModal() {
    const [open, setOpen] = useState(false)
    const { user } = useAuth()
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <>
            <Button variant="contained" onClick={handleOpen}>
                {user === null ? "login" : user.username}
            </Button>
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
                <TextField disabled value={user?.username} />
            </Modal>
        </>
    )
}

export default UserModal
