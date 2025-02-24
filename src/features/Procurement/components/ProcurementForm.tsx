import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import { createProcurement, ProcurementType } from "../types/ProcurementType";
import { ProcurementItemType } from "../types/ProcurementItemType";
import { useProduct } from "../../Product";
import Adding from "./Adding";
import CustomModal from "../../../_components/CustomModal";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";

interface Props {
    existedProcurementUUID: string | undefined;
}

const headerCellStyle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.2rem",
};

const bodyCellStyle = { textAlign: "center" };

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
}));

export default function ProcurementForm({ existedProcurementUUID }: Props) {
    const navigate = useNavigate();
    const { fullProducts } = useProduct();
    const [procurement, setProcurement] = useState<ProcurementType | null>(
        createProcurement(),
    );
    const [procurementItems, setProcurementItems] = useState<
        ProcurementItemType[]
    >([]);
    const [addOpen, setAddOpen] = useState<boolean>(false);
    const [dialogPopup, setDialogPopup] = useState<{
        open: boolean;
        title: string;
        content: string;
    }>({ open: false, title: "", content: "" });

    const addItemToBill = (newItem: ProcurementItemType) => {
        setProcurementItems((prev) => {
            const itemExists = prev.some(
                (item) =>
                    item.mainUUID === newItem.mainUUID &&
                    item.variantUUID === newItem.variantUUID,
            );
            if (itemExists) {
                setDialogPopup({
                    open: true,
                    content:
                        "This item has already been added to the procurement list.",
                    title: "Item Already Added",
                });
                return prev;
            }
            return [...prev, newItem];
        });
    };

    const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const locator = { uuid: name.split("/")[0], field: name.split("/")[1] };
        setProcurementItems((prev) =>
            prev.map((item) => {
                if (item.variantUUID === locator.uuid) {
                    const updatedItem = { ...item, [locator.field]: value };
                    if (locator.field === "total") {
                        updatedItem.cost =
                            Number(updatedItem.total) /
                                Number(updatedItem.qty) || 0;
                    }
                    if (locator.field === "cost" || locator.field === "qty") {
                        updatedItem.total =
                            Number(updatedItem.cost) *
                                Number(updatedItem.qty) || 0;
                    }
                    return updatedItem;
                }
                return item;
            }),
        );
    };

    const handleProcurementChange = (
        e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent,
    ) => {
        const { name, value } = e.target;
        setProcurement(
            (prev) => ({ ...prev, [name]: value }) as ProcurementType,
        );
    };

    const handleSubmitButton = () => {
        if (procurementItems.length === 0) {
            setDialogPopup({
                open: true,
                title: "No Items Added",
                content:
                    "Please add at least one item to the procurement list.",
            });

            return;
        }
        const finalItems = procurementItems.map((item) => ({
            ...item,
            procurementUUID: procurement!.uuid,
        }));

        const newProcurement = { ...procurement, procurementItems: finalItems };
        console.log(newProcurement);
    };

    return (
        <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 2 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>
                Procurement Form
            </Typography>

            <StyledPaper>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="date"
                                name="billDate"
                                value={procurement?.billDate}
                                onChange={handleProcurementChange}
                                label="Date of bill"
                                InputLabelProps={{ shrink: true }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                name="supplierUUID"
                                label="Supplier"
                                onChange={handleProcurementChange}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Bill No."
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </StyledPaper>

            <StyledPaper>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                    }}
                >
                    <Typography variant="h6">Items</Typography>
                    <Button
                        variant="contained"
                        onClick={() => setAddOpen(true)}
                        startIcon={<AddIcon />}
                    >
                        Add item
                    </Button>
                </Box>

                <TableContainer component={Paper} sx={{ mb: 3 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "grey.100" }}>
                                <TableCell sx={headerCellStyle}>Name</TableCell>
                                <TableCell sx={headerCellStyle}>
                                    Variant
                                </TableCell>
                                <TableCell sx={headerCellStyle}>Cost</TableCell>
                                <TableCell sx={headerCellStyle}>
                                    Quantity
                                </TableCell>
                                <TableCell sx={headerCellStyle}>
                                    Total
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {procurementItems.map((item) => (
                                <TableRow
                                    key={item.variantUUID + item.variantName}
                                >
                                    <TableCell sx={bodyCellStyle}>
                                        {item.mainName}
                                    </TableCell>
                                    <TableCell sx={bodyCellStyle}>
                                        {item.variantName}
                                    </TableCell>
                                    <TableCell sx={bodyCellStyle}>
                                        <TextField
                                            name={`${item.variantUUID}/cost`}
                                            size="small"
                                            variant="outlined"
                                            type="number"
                                            value={item.cost}
                                            onChange={handleItemChange}
                                            InputProps={{
                                                inputProps: { min: 0 },
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell sx={bodyCellStyle}>
                                        <TextField
                                            name={`${item.variantUUID}/qty`}
                                            size="small"
                                            variant="outlined"
                                            type="number"
                                            value={item.qty}
                                            onChange={handleItemChange}
                                            InputProps={{
                                                inputProps: { min: 0 },
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell sx={bodyCellStyle}>
                                        <TextField
                                            name={`${item.variantUUID}/total`}
                                            size="small"
                                            variant="outlined"
                                            type="number"
                                            value={item.total}
                                            onChange={handleItemChange}
                                            InputProps={{
                                                inputProps: { min: 0 },
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                            <Paper sx={{ p: 2, minWidth: 300 }}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Payment Status</InputLabel>
                                    <Select
                                        value={procurement?.isPaid.toString()}
                                        onChange={handleProcurementChange}
                                        name="isPaid"
                                        label="Payment Status"
                                        variant="outlined"
                                    >
                                        <MenuItem value="true">Paid</MenuItem>
                                        <MenuItem value="false">
                                            Not Paid
                                        </MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Product Status</InputLabel>
                                    <Select
                                        value={procurement?.isReceived.toString()}
                                        onChange={handleProcurementChange}
                                        name="isReceived"
                                        label="Product Status"
                                        variant="outlined"
                                    >
                                        <MenuItem value="true">
                                            Received
                                        </MenuItem>
                                        <MenuItem value="false">
                                            Not Received
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Paper>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                            <Paper sx={{ p: 2, minWidth: 300 }}>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Summary
                                </Typography>
                                <Stack spacing={2}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography>Total Items:</Typography>
                                        <Typography>
                                            {procurementItems.length}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography variant="h6">
                                            Total Amount:
                                        </Typography>
                                        <Typography variant="h6">
                                            ฿
                                            {procurementItems.reduce(
                                                (sum, item) =>
                                                    Number(sum) +
                                                        Number(item.total) || 0,
                                                0,
                                            )}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </StyledPaper>

            {addOpen && (
                <CustomModal
                    width={500}
                    open={addOpen}
                    onClose={() => setAddOpen(false)}
                >
                    <Adding
                        onClose={() => setAddOpen(false)}
                        addItemToBill={addItemToBill}
                    />
                </CustomModal>
            )}
            {dialogPopup && (
                <Dialog
                    open={dialogPopup.open}
                    onClose={() =>
                        setDialogPopup((prev) => ({ ...prev, open: false }))
                    }
                >
                    <DialogTitle>{dialogPopup.title}</DialogTitle>
                    <DialogContent>{dialogPopup.content}</DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() =>
                                setDialogPopup((prev) => ({
                                    ...prev,
                                    open: false,
                                }))
                            }
                            color="primary"
                        >
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            )}

            <Stack
                direction="row"
                justifyContent="center"
                gap={1}
                paddingBottom={15}
            >
                <Button variant="contained" onClick={handleSubmitButton}>
                    Submit
                </Button>
                <Button variant="outlined" onClick={() => navigate(-1)}>
                    Cancel
                </Button>
            </Stack>
        </Box>
    );
}
