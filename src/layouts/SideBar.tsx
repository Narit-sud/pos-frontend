import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Inventory from "@mui/icons-material/Inventory";
import Home from "@mui/icons-material/Home";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import People from "@mui/icons-material/People";
import Assessment from "@mui/icons-material/Assessment";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
    open: boolean;
    onClose: () => void;
}

export function SideBar({ open, onClose }: SideBarProps) {
    const navigate = useNavigate();

    const menuItems = [
        { text: "Home", icon: <Home />, path: "/" },
        { text: "Point of Sale", icon: <ShoppingCart />, path: "/pos" },
        { text: "Products", icon: <Inventory />, path: "/product" },
        { text: "Customers", icon: <People />, path: "/customer" },
        {
            text: "Suppliers",
            icon: <AccountBoxIcon />,
            path: "/supplier",
        },
        { text: "Report", icon: <Assessment />, path: "/report" },
        {
            text: "Procurement",
            icon: <AssignmentReturnedIcon />,
            path: "/procurement",
        },
    ];
    //TODO: divide menu items into groups
    const menuItemGroup1 = [];
    const menuItemGroup2 = [];

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
