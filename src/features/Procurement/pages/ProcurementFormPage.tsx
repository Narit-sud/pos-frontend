import { useParams } from "react-router";
import Container from "@mui/material/Container";
import ProcurementForm from "../components/ProcurementForm";

export default function ProcurementFormPage() {
    const { uuid } = useParams();
    return (
        <Container>
            <ProcurementForm existedProcurementUUID={uuid} />
        </Container>
    );
}
