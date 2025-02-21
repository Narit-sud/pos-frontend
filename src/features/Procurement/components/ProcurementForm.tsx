import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

type Props = {
    existedProcurementUUID: string | undefined;
};

export default function ProcurementForm({ existedProcurementUUID }: Props) {
    return (
        <Grid>
            procurement form with uuid = {existedProcurementUUID}
            <Grid container sx={{}}>
                <Typography>Date</Typography>
                <Typography>Bill No.</Typography>
                <Typography></Typography>
            </Grid>
        </Grid>
    );
}
