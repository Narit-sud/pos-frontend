import { useState } from "react"
import {
    Box,
    Button,
    Container,
    Typography,
    Modal,
    Grid2 as Grid,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { Outlet } from "react-router"
import {
    Login as LoginIcon,
    AppRegistration as RegisterIcon,
    Close as CloseIcon,
} from "@mui/icons-material"
import LoginModal from "../modals/LoginModal"
import RegisterModal from "../modals/RegisterModal"
import { useAuth } from "../contexts/AuthContext"
import UserModal from "../modals/UserModal"
import SideBar from "./SideBar"

const style = {
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
}

function MainLayout() {
    const { user } = useAuth()
    return (
        <div>
            <header className="bg-gray-100">
                <Grid container sx={{ alignItems: "center", px: "10px" }}>
                    <Grid size={{ xs: 2 }}>
                        {user === null ? (
                            <Typography variant="h6">Logo</Typography>
                        ) : (
                            <>
                                <Typography variant="h6">Logo</Typography>
                                <SideBar />
                            </>
                        )}
                    </Grid>
                    <Grid
                        size={{ xs: 10 }}
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            columnGap: "0.5rem",
                        }}
                    >
                        {user === null ? (
                            <>
                                <LoginModal />
                                <RegisterModal />
                            </>
                        ) : (
                            <UserModal />
                        )}
                    </Grid>
                </Grid>
            </header>
            <Box sx={{ h: "86vh" }}>
                <Container>
                    <Outlet />
                </Container>
            </Box>
        </div>
    )
}

export default MainLayout
