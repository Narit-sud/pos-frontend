"use client";
import React, { useState } from "react";
import { userServices } from "@/services/user";

export default function Page() {
    const [user, setUser] = useState({ username: "", password: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setUser((prev) => ({ ...prev, [id]: value }));
    };

    const defaultInputStyle = "p-2 border rounded";
    const handleLoginButton = async () => {
        const isLogin = await userServices.login(user);
        console.log("isLogin", isLogin);
        if (isLogin) {
            // redirect("/testCookie");
        }
    };
    const handleForgetPasswordButton = () => {
        console.log("fotget clicked");
    };

    return (
        <div>
            <div className="flex flex-col items-center">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={handleInputChange}
                    className={defaultInputStyle}
                />
            </div>
            <div className="flex flex-col items-center">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={handleInputChange}
                    className={defaultInputStyle}
                />
            </div>
            <div className="flex flex-col items-center">
                <button
                    onClick={handleLoginButton}
                    className="p-2 border rounded"
                >
                    Login
                </button>
                <button
                    onClick={handleForgetPasswordButton}
                    className="p-2 border rounded"
                >
                    Forget password
                </button>
            </div>
        </div>
    );
}
