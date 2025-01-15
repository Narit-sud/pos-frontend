import { Modal, Box, TextField, Button, FormControl } from "@mui/material"
import { Close as CloseIcon, Login } from "@mui/icons-material"
import { LoginDetail } from "../interfaces/LoginDetail"
import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"

function LoginModal() {
    const { login } = useAuth()
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [loginDetail, setLoginDetail] = useState<LoginDetail>({
        username: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setLoginDetail((prev) => ({ ...prev, [e.target.id]: e.target.value }))

    const handleLogin = async () => {
        login(loginDetail)
    }

    const handleFotget = () => {
        console.log("forget")
    }

    useEffect(() => {}, [login])
    return (
        <>
            <Button variant="contained" onClick={handleOpen}>
                Login
                <Login />
            </Button>
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
                        borderRadius: "10px",
                        boxShadow: 24,
                        p: 2,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <FormControl>
                        <TextField
                            type="text"
                            id="username"
                            label="Username"
                            value={loginDetail.username}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            type="password"
                            id="password"
                            label="Password"
                            value={loginDetail.password}
                            onChange={handleChange}
                        />
                        <Button onClick={handleLogin} variant="contained">
                            Login
                        </Button>
                        <Button onClick={handleFotget} variant="outlined">
                            Forget pasword
                        </Button>
                    </FormControl>
                    <CloseIcon
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: "3%",
                            left: "90%",
                            cursor: "pointer",
                        }}
                    />
                </Box>
            </Modal>
        </>
    )
}

export default LoginModal
