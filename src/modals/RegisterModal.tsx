import { useState } from "react";
import { useNavigate } from "react-router";
import { Modal, Box, Button, FormControl, TextField } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

function RegisterModal() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [register, setRegister] = useState({
        name: "",
        surname: "",
        phone_number: "",
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        if (id === "phone_number" && value.length > 10) {
            return;
        }

        setRegister((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = () => {};

    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>
                Register
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        borderRadius: "10px",
                        boxShadow: 24,
                        p: 2,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <FormControl>
                        <TextField
                            type="text"
                            id="name"
                            label="Name"
                            variant="standard"
                            value={register.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            type="text"
                            id="surname"
                            label="Surname"
                            variant="standard"
                            value={register.surname}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            type="number"
                            id="phone_number"
                            label="Phone Number"
                            variant="standard"
                            value={register.phone_number}
                            onChange={handleChange}
                            sx={{
                                "& input[type=number]": {
                                    MozAppearance: "textfield",
                                },
                                "& input[type=number]::-webkit-outer-spin-button":
                                    {
                                        WebkitAppearance: "none",
                                        margin: 0,
                                    },
                                "& input[type=number]::-webkit-inner-spin-button":
                                    {
                                        WebkitAppearance: "none",
                                        margin: 0,
                                    },
                            }}
                            required
                        />
                        <TextField
                            type="email"
                            id="email"
                            label="Email"
                            variant="standard"
                            value={register.email}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            type="text"
                            id="username"
                            label="Username"
                            variant="standard"
                            value={register.username}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            type="password"
                            id="password"
                            label="Password"
                            variant="standard"
                            value={register.password}
                            onChange={handleChange}
                            required
                        />
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{ marginBottom: "4px" }}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => handleClose()}
                        >
                            Cancel
                        </Button>
                    </FormControl>
                    <CloseIcon
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: "3%",
                            left: "90%",
                            cursor: "pointer",
                        }}
                    />
                </Box>
            </Modal>
        </>
    );
}

export default RegisterModal;
