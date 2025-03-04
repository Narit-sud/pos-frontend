import { Alert, Link } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
    Button,
    Container,
    FormControl,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useAuth } from "../useAuth";

function LoginPage() {
    const navigate = useNavigate();
    const [loginDetail, setLoginDetail] = useState({
        username: "",
        password: "",
    });
    const [alertTag, setAlertTag] = useState<{
        isOpen: boolean;
        message: string;
    }>({ isOpen: false, message: "" });

    const { login } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setLoginDetail((prev) => ({ ...prev, [id]: value }));
    };

    const handleLogin = async () => {
        try {
            await login(loginDetail);
            setAlertTag({ isOpen: true, message: "Login success!" });
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            setAlertTag({ isOpen: true, message: "Login failed" });
            alert("login failed");
        }
    };

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
                {alertTag.isOpen && (
                    <Alert severity="success">{alertTag.message}</Alert>
                )}
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
    );
}

export default LoginPage;
