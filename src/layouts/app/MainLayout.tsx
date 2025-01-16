import { Box, Container, Typography, Grid2 as Grid } from "@mui/material"
import { Outlet } from "react-router"
import LoginModal from "../../modals/LoginModal"
import RegisterModal from "../../modals/RegisterModal"
import { useAuth } from "../../contexts/AuthContext"
import UserModal from "../../modals/UserModal"
import SideBar from "./SideBar"
import UserButton from "../../components/UserButton"

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
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "10px",
                                    }}
                                >
                                    <Typography variant="h6">Logo</Typography>
                                    <SideBar />
                                </Box>
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
                        {/* <UserButton /> */}
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
