import {
    Button,
    Drawer,
    Box,
    List,
    ListItemButton,
    ListItem,
} from "@mui/material"
import { Link } from "react-router"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"

function SideBar() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <>
            <Button variant="contained" onClick={handleOpen}>
                Menu <MenuIcon />
            </Button>
            <Drawer open={open} onClose={handleClose} sx={{ width: 400 }}>
                <Box sx={{ width: 250 }} onClick={handleClose}>
                    <List>
                        <ListItem>
                            <Link to={"/"} className="w-full bg-red-100">
                                <ListItemButton>Home</ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to={"product"} className="w-full bg-red-100">
                                <ListItemButton>Product</ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default SideBar
