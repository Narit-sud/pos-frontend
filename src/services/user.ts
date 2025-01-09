import { validateRegister } from "@/app/register/validateRegister";
import { User, LoginDetail } from "@/types/User";
import { LOGIN_URL, REGISTER_URL } from "@/utils/API_URL";

export const userServices = {
    register: async (newUser: User) => {
        //validate newUser
        const newUserValid = validateRegister(newUser);
        if (!newUserValid) {
            alert("user is not valid to register");
            return;
        }
        //try create new user

        const config = {
            method: "POST",
            // prettier-ignore
            headers: { "Accept": "*/*", "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        };

        try {
            const res = await fetch(REGISTER_URL, config);

            if (res.ok) {
                const data = await res.json();
                console.log(data);
                return true;
            } else {
                alert("not ok");
                console.log("res is not ok");
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    login: async (loginDetail: LoginDetail) => {
        const config = {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginDetail),
        };

        try {
            const res = await fetch(LOGIN_URL, config);
            if (res.ok) {
                res.json();
                console.log(res);
                return true;
            } else {
                console.log("res not ok");
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },
};
