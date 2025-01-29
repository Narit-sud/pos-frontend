import { Box, Button, Card, CardContent, Grid2 as Grid } from "@mui/material"
import { useEffect } from "react"
import { useNavigate } from "react-router"

function DashboardPage() {
    const navigate = useNavigate()
    useEffect(() => {
        // navigate(0)
    }, [])
    return (
        <Grid container sx={{ placeContent: "center", gap: 1 }}>
            <Grid>
                <Card>
                    <CardContent>
                        <Button
                            onClick={() => {
                                navigate("product")
                            }}
                        >
                            Product Page
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid>
                <Card>
                    <CardContent>
                        <Button
                            onClick={() => {
                                navigate("sale")
                            }}
                        >
                            Sale Page
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default DashboardPage
