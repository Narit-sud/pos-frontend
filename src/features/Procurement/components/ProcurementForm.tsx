type Props = {
    existedProcurementUUID: string | undefined;
};

export default function ProcurementForm({ existedProcurementUUID }: Props) {
    return <div>procurement form with uuid = {existedProcurementUUID}</div>;
}
