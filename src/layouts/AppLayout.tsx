import { Box, Container, Typography, Grid2 as Grid } from "@mui/material"
import { Outlet } from "react-router"
import LoginModal from "../modals/LoginModal"
import RegisterModal from "../modals/RegisterModal"
import { useAuth } from "../contexts/AuthContext"
import UserModal from "../modals/UserModal"
import SideBar from "./SideBar"

function AppLayout() {
    const { user } = useAuth()
    return (
        <div>
            <header className="bg-gray-100">
                <Grid container sx={{ alignItems: "center", px: "10px" }}>
                    <Grid size={{ xs: 2 }}>
                        <div className="drawer z-10">
                            <input
                                id="my-drawer"
                                type="checkbox"
                                className="drawer-toggle"
                            />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label
                                    htmlFor="my-drawer"
                                    className="btn btn-primary drawer-button"
                                >
                                    Open drawer
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label
                                    htmlFor="my-drawer"
                                    aria-label="close sidebar"
                                    className="drawer-overlay"
                                ></label>
                                <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
                                    {/* Sidebar content here */}
                                    <li>
                                        <a>Sidebar Item 1</a>
                                    </li>
                                    <li>
                                        <a>Sidebar Item 2</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                                    {/* <SideBar /> */}
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

export default AppLayout
