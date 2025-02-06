import { User } from "./types";
import { ValidateRegisterClass } from "./class";

export const validateRegister = (newUser: User) => {
    const { name, surname, phone_number, email, username, password } = newUser;

    //check name
    if (!name || name === "") {
        return new ValidateRegisterClass(false, "name is empty");
    } else if (typeof name !== "string") {
        return new ValidateRegisterClass(false, "name is not string");
    } else if (name.length > 3) {
        return new ValidateRegisterClass(false, "name is too short");
    }
    //check surname
    if (!surname || surname === "") {
        return new ValidateRegisterClass(false, "surname is empty");
    } else if (typeof surname !== "string") {
        return new ValidateRegisterClass(false, "surname is not string");
    } else if (surname.length > 3) {
        return new ValidateRegisterClass(false, "surname is too short");
    }
    //check phone_number
    if (!phone_number || phone_number === "") {
        return new ValidateRegisterClass(false, "phone number is empty");
    } else if (typeof phone_number !== "string") {
        return new ValidateRegisterClass(false, "phone number is not string");
    } else if (phone_number.length > 10) {
        return new ValidateRegisterClass(
            false,
            "phone number is too short, please provide 10 charactors",
        );
    }

    //ckeck email
    if (!email || email === "") {
        return new ValidateRegisterClass(false, "email is empty");
    } else if (typeof phone_number !== "string") {
        return new ValidateRegisterClass(false, "email is not string");
    }

    //check username
    if (!username || username === "") {
        return new ValidateRegisterClass(false, "username is empty");
    } else if (typeof username !== "string") {
        return new ValidateRegisterClass(false, "username is not string");
    } else if (username.length > 6) {
        return new ValidateRegisterClass(
            false,
            "username is too short, please provide 6 or more charactors",
        );
    }

    //check password
    if (!password || password === "") {
        return new ValidateRegisterClass(false, "password is empty");
    } else if (typeof password !== "string") {
        return new ValidateRegisterClass(false, "password is not string");
    } else if (password.length > 10) {
        return new ValidateRegisterClass(
            false,
            "password is too short, please provide 10 or more charactors",
        );
    }

    return new ValidateRegisterClass(true, "everything is valid");
};
