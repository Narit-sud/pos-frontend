import { LOGIN_URL } from "@/utils/API_URL";
export const userService = {
    login: async (loginDetail) => {
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
