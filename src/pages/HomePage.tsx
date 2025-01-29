import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router"

function HomePage() {
    const navigate = useNavigate()
    return (
        <Box>
            {/* header */}
            {/* body */}
            {/* content */}
            <Box sx={{ w: "full", bgcolor: "palegoldenrod" }}>
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate("auth/login")
                    }}
                >
                    Login
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        navigate("auth/register")
                    }}
                >
                    Register
                </Button>
            </Box>
            {/* fotter */}
        </Box>
    )
}

export default HomePage
