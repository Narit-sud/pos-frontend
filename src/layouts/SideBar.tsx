import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
} from "@mui/material";
import { Home, ShoppingCart, People, Inventory } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SideBarProps {
    open: boolean;
    onClose: () => void;
}

export function SideBar({ open, onClose }: SideBarProps) {
    const navigate = useNavigate();

    const menuItems = [
        { text: "Home", icon: <Home />, path: "/" },
        { text: "Point of Sale", icon: <ShoppingCart />, path: "/pos" },
        { text: "Products", icon: <Inventory />, path: "/product" }, // Changed from /products
        { text: "Customers", icon: <People />, path: "/customer" }, // Changed from /customers
    ];

    const handleNavigation = (path: string) => {
        navigate(path);
        onClose();
    };

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 240,
                    bgcolor: "background.default",
                },
            }}
        >
            <Box sx={{ mt: 7 }}>
                <List>
                    {menuItems.map((item) => (
                        <ListItemButton
                            key={item.text}
                            onClick={() => handleNavigation(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}
