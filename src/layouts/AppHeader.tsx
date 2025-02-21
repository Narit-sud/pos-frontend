import {
    Box,
    IconButton,
    Typography,
    Button,
    Menu,
    MenuItem,
    Avatar,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useAuth } from "../features/Auth/useAuth";

interface AppHeaderProps {
    onMenuClick: () => void;
}

export function AppHeader({ onMenuClick }: AppHeaderProps) {
    const { user, logout } = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        await logout();
        handleMenuClose();
    };

    return (
        <Box
            sx={{
                p: 1,
                mx: 1,
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

            <Button
                onClick={handleMenuOpen}
                variant="outlined"
                startIcon={
                    <Avatar sx={{ width: 24, height: 24 }}>
                        {user?.name?.charAt(0) || "U"}
                    </Avatar>
                }
                sx={{ minWidth: 120, textTransform: "none" }}
            >
                {`Hi! ${user?.name || "User"}`}
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem disabled>
                    <Typography variant="body2" color="textSecondary">
                        {user?.email || ""}
                    </Typography>
                </MenuItem>
                <MenuItem disabled>
                    <Typography variant="body2" color="textSecondary">
                        Role: {user?.role || ""}
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </Box>
    );
}
