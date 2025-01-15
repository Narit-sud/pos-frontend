import { Box, Button, Drawer, MenuItem } from "@mui/material"
import { useState, useRef } from "react"
import { useAuth } from "../contexts/AuthContext"

function UserButton() {
    const { user } = useAuth()
    const [open, setOpen] = useState(false)
    const buttonRef = useRef<HTMLDivElement>(null) // To capture button width

    return (
        <Box
            ref={buttonRef}
            sx={{ position: "relative", display: "inline-block" }}
        >
            <Button onClick={() => setOpen(!open)}>
                {user === null ? "Loading" : user.username}
            </Button>

            <Drawer
                open={open}
                anchor="top"
                onClose={() => setOpen(false)}
                sx={{ position: "absolute", top: "100%", left: 0 }}
                PaperProps={{
                    sx: {
                        width: buttonRef.current
                            ? `${buttonRef.current.offsetWidth}px`
                            : "100%",
                    },
                }}
            >
                <MenuItem>Menu A</MenuItem>
                <MenuItem>Menu B</MenuItem>
                <MenuItem>Menu C</MenuItem>
            </Drawer>
        </Box>
    )
}

export default UserButton
