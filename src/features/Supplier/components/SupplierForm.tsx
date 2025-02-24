import { Box, Button, Paper, Stack, TextField, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRef, FormEvent, ChangeEvent } from "react";
import { createSupplier } from "../types";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
}));

export function SupplierForm() {
    const navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const detailRef = useRef<HTMLInputElement>(null);

    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === "" || /^\d+$/.test(value)) {
            if (value.length <= 10) {
                e.target.value = value;
            }
        }
    };

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (
            !nameRef.current?.value ||
            !surnameRef.current?.value ||
            !phoneNumberRef.current?.value ||
            !emailRef.current?.value
        ) {
            alert("Please fill in all required fields");
            return;
        }

        if (phoneNumberRef.current?.value.length !== 10) {
            alert("Phone number must be 10 digits");
            return;
        }

        const newSupplier = createSupplier({
            name: nameRef.current?.value || "",
            surname: surnameRef.current?.value || "",
            phoneNumber: phoneNumberRef.current?.value || "",
            email: emailRef.current?.value || "",
            detail: detailRef.current?.value || "",
        });

        console.log(newSupplier);
        // TODO: Add API call to save supplier
        navigate("/supplier");
    };

    return (
        <StyledPaper>
            <form onSubmit={handleFormSubmit}>
                <Stack spacing={3}>
                    <TextField
                        inputRef={nameRef}
                        fullWidth
                        label="Name"
                        name="name"
                        variant="outlined"
                        required
                    />
                    <TextField
                        inputRef={surnameRef}
                        fullWidth
                        label="Surname"
                        name="surname"
                        variant="outlined"
                        required
                    />
                    <TextField
                        inputRef={phoneNumberRef}
                        fullWidth
                        label="Phone Number"
                        name="phoneNumber"
                        variant="outlined"
                        required
                        inputProps={{
                            minLength: 10,
                            maxLength: 10,
                            pattern: "\\d*",
                        }}
                        onChange={handlePhoneNumberChange}
                        helperText="Must be exactly 10 digits"
                    />
                    <TextField
                        inputRef={emailRef}
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        required
                    />
                    <TextField
                        inputRef={detailRef}
                        fullWidth
                        label="Details (Optional)"
                        name="detail"
                        multiline
                        rows={4}
                        variant="outlined"
                    />

                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                        <Button
                            type="button"
                            variant="outlined"
                            onClick={() => navigate("/supplier")}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Stack>
            </form>
        </StyledPaper>
    );
}
