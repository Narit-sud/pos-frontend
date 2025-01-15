import { Alert, Link } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"
import {
    Button,
    Container,
    FormControl,
    Paper,
    TextField,
    Typography,
} from "@mui/material"
import { useAuth } from "../contexts/AuthContext"

function LoginPage() {
    const navigate = useNavigate()
    const [loginDetail, setLoginDetail] = useState({
        username: "",
        password: "",
    })
    const [alert, setAlert] = useState(false)

    const { login } = useAuth()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setLoginDetail((prev) => ({ ...prev, [id]: value }))
    }

    const handleLogin = async () => {
        const isLogin = await login(loginDetail)
        console.log(isLogin)

        if (isLogin) {
            setAlert(true)
            setTimeout(() => {
                navigate("/app")
            }, 1500)
        } else {
        }
    }

    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Paper
                elevation={2}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 20,
                    p: 4,
                    gap: 2,
                }}
            >
                {alert && <Alert severity="success">Login success!</Alert>}
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Login NaritPOS
                </Typography>
                <FormControl
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                >
                    <TextField
                        type="text"
                        label="Username"
                        id="username"
                        value={loginDetail.username}
                        onChange={handleChange}
                    />
                    <TextField
                        type="password"
                        id="password"
                        label="Password"
                        value={loginDetail.password}
                        onChange={handleChange}
                    />
                    <Button variant="contained" onClick={handleLogin}>
                        Login
                    </Button>
                    <Link
                        href="recoverPassword"
                        color="inherit"
                        sx={{ textAlign: "right", fontSize: 12 }}
                    >
                        Forget Password?
                    </Link>
                </FormControl>

                <Typography sx={{ fontSize: 14, textAlign: "center" }}>
                    No accout? <Link href="register">Register here</Link>
                </Typography>
            </Paper>
        </Container>
    )
}

export default LoginPage
