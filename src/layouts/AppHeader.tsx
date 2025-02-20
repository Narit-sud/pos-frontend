import {
    Box,
    IconButton,
    Typography,
    Button,
    Grid2 as Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthProvider, useAuth } from "../features/Auth/useAuth";

interface AppHeaderProps {
    onMenuClick: () => void;
}

export function AppHeader({ onMenuClick }: AppHeaderProps) {
    const { user } = useAuth();

    return (
        <AuthProvider>
            <Box
                sx={{
                    p: 1,
                    bgcolor: "background.paper",
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <IconButton onClick={onMenuClick} edge="start">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        POS System
                    </Typography>
                </Box>
                <Button variant="outlined" sx={{ minWidth: 120 }}>
                    {`Hi! ${user?.name || ""}`}
                </Button>
            </Box>
        </AuthProvider>
    );
}
