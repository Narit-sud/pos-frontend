import { Button, Drawer } from "@mui/material"
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
            <Drawer open={open} onClose={handleClose} sx={{ width: 250 }}>
                SideBar
            </Drawer>
        </>
    )
}

export default SideBar
