import {
    Box,
    Container,
    Typography,
    Grid2 as Grid,
    Button,
} from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";
import { useAuth } from "../_contexts/AuthContext";
import UserModal from "../_components/UserModal";

function AppLayout() {
    const { user } = useAuth();
    const [userModalOpen, setUserModalOpen] = useState<boolean>(false);
    return (
        <div>
            <header className="bg-gray-200 p-1">
                <Grid container sx={{ alignItems: "center", px: "10px" }}>
                    <Grid size={1}>
                        <Typography
                            textAlign="center"
                            variant="h6"
                            bgcolor="paleturquoise"
                        >
                            Logo
                        </Typography>
                    </Grid>
                    <Grid
                        size={11}
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            columnGap: "0.5rem",
                        }}
                    >
                        {/* <UserButton /> */}
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setUserModalOpen(true);
                            }}
                        >{`Hi! ${user?.name || ""}`}</Button>
                    </Grid>
                </Grid>
            </header>
            <Box sx={{ h: "86vh" }}>
                {/* <Container> */}
                <Outlet />
                {/* </Container> */}
            </Box>
            {userModalOpen && (
                <UserModal
                    open={userModalOpen}
                    handleClose={() => {
                        setUserModalOpen(false);
                    }}
                />
            )}
        </div>
    );
}

export default AppLayout;
