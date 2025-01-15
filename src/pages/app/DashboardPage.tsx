import { Button } from "@mui/material"
import { useAuth } from "../../contexts/AuthContext"

function DashboardPage() {
    const { logout } = useAuth()
    const handleLogout = async () => {
        const isLogout = await logout()
        if (isLogout) {
            alert("logout")
        } else {
            alert("not logout")
        }
    }
    return (
        <div>
            dashboard<Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default DashboardPage
