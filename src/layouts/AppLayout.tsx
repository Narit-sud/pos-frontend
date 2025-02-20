import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import { SideBar } from "./SideBar";

function AppLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <AppHeader onMenuClick={() => setSidebarOpen(true)} />

            <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                <Outlet />
            </Box>
        </Box>
    );
}

export default AppLayout;
