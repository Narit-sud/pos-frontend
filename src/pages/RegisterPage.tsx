import { Link } from "@mui/material"
import {
    Button,
    Container,
    FormControl,
    Paper,
    TextField,
    Typography,
} from "@mui/material"

function RegisterPage() {
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
                    <TextField type="text" label="Username" />
                    <TextField type="password" label="Password" />
                    <Button variant="contained">Login</Button>
                </FormControl>

                <Typography sx={{ fontSize: 14, textAlign: "center" }}>
                    Already has an accout? <Link href="login">Login here</Link>
                </Typography>
            </Paper>
        </Container>
    )
}

export default RegisterPage
