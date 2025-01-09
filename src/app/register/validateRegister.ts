import { User } from "../../types/User";
import { ValidateRegister } from "@/class/ValidateRegister.ts";

export const validateRegister = (newUser: User) => {
    const { name, surname, phone_number, email, username, password } = newUser;

    //check name
    if (!name || name === "") {
        return new ValidateRegister(false, "name is empty");
    } else if (typeof name !== "string") {
        return new ValidateRegister(false, "name is not string");
    } else if (name.length > 3) {
        return new ValidateRegister(false, "name is too short");
    }
    //check surname
    if (!surname || surname === "") {
        return new ValidateRegister(false, "surname is empty");
    } else if (typeof surname !== "string") {
        return new ValidateRegister(false, "surname is not string");
    } else if (surname.length > 3) {
        return new ValidateRegister(false, "surname is too short");
    }
    //check phone_number
    if (!phone_number || phone_number === "") {
        return new ValidateRegister(false, "phone number is empty");
    } else if (typeof phone_number !== "string") {
        return new ValidateRegister(false, "phone number is not string");
    } else if (phone_number.length > 10) {
        return new ValidateRegister(
            false,
            "phone number is too short, please provide 10 charactors",
        );
    }

    //ckeck email
    if (!email || email === "") {
        return new ValidateRegister(false, "email is empty");
    } else if (typeof phone_number !== "string") {
        return new ValidateRegister(false, "email is not string");
    }

    //check username
    if (!username || username === "") {
        return new ValidateRegister(false, "username is empty");
    } else if (typeof username !== "string") {
        return new ValidateRegister(false, "username is not string");
    } else if (username.length > 6) {
        return new ValidateRegister(
            false,
            "username is too short, please provide 6 or more charactors",
        );
    }

    //check password
    if (!password || password === "") {
        return new ValidateRegister(false, "password is empty");
    } else if (typeof password !== "string") {
        return new ValidateRegister(false, "password is not string");
    } else if (password.length > 10) {
        return new ValidateRegister(
            false,
            "password is too short, please provide 10 or more charactors",
        );
    }

    return new ValidateRegister(true, "everything is valid");
};
