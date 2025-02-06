import { Link } from "@mui/material";
import {
    Button,
    Container,
    FormControl,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { emptyNewUser, NewUser } from "../types";
import { useNavigate } from "react-router";
import { useAuth } from "../useAuth";

function RegisterPage() {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [newUser, setNewUser] = useState<NewUser>(emptyNewUser);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        //validate phone number
        if (id === "phone_number" && value.length > 10 && Number(value)) {
            return;
        }
        setNewUser((prev) => ({ ...prev, [id]: value }));
    };
    const handleRegisterButton = async () => {
        try {
            await register(newUser);
            setTimeout(() => {
                navigate("/auth/login");
            });
        } catch (error) {
            alert("Register failed");
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
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Register NaritPOS
                </Typography>
                <FormControl
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                >
                    <TextField
                        type="text"
                        id="name"
                        label="First name"
                        value={newUser.name}
                        onChange={handleChange}
                    />
                    <TextField
                        type="text"
                        id="surname"
                        label="Last name"
                        value={newUser.surname}
                        onChange={handleChange}
                    />
                    <TextField
                        type="email"
                        id="email"
                        label="email"
                        value={newUser.email}
                        onChange={handleChange}
                    />
                    <TextField
                        type="number"
                        id="phone_number"
                        label="Phone number"
                        value={newUser.phone_number}
                        onChange={handleChange}
                    />
                    <TextField
                        type="text"
                        id="username"
                        label="Username"
                        value={newUser.username}
                        onChange={handleChange}
                    />
                    <TextField
                        type="password"
                        id="password"
                        label="Password"
                        value={newUser.password}
                        onChange={handleChange}
                    />
                    <Button variant="contained" onClick={handleRegisterButton}>
                        Register
                    </Button>
                </FormControl>

                <Typography sx={{ fontSize: 14, textAlign: "center" }}>
                    Already has an accout? <Link href="login">Login here</Link>
                </Typography>
            </Paper>
        </Container>
    );
}

export default RegisterPage;
