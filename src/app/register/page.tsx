"use client";
import React, { useState } from "react";
import { userServices } from "@/services/user";

export default function Page() {
    const [newUser, setNewUser] = useState({
        name: "",
        surname: "",
        email: "",
        phone_number: "",
        username: "",
        password: "",
    });

    const defaultInputStyle = "p-2 border rounded";

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewUser((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isRegistered = await userServices.register(newUser);
        if (isRegistered) {
            alert("Success!");
        } else {
            alert("False");
        }
    };
    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={newUser.name}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="surname">Surname</label>
                    <input
                        id="surname"
                        type="text"
                        value={newUser.surname}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="phone_number">Phone number</label>
                    <input
                        id="phone_number"
                        type="text"
                        value={newUser.phone_number}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={newUser.email}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={newUser.username}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={newUser.password}
                        onChange={handleInputChange}
                        className={defaultInputStyle}
                    />
                </div>
                <button type="submit" className={defaultInputStyle}>
                    Submit
                </button>
            </form>
        </div>
    );
}
