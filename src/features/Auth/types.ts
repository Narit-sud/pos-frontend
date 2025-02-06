export interface LoginDetail {
    username: string;
    password: string;
}

export interface User {
    id?: number;
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    username: string;
    password?: string;
    status?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
}

export interface LoginDetail {
    username: string;
    password: string;
}

export interface UserAuth {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    username: string;
    status: string;
    role: string;
}

export interface NewUser {
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    username: string;
    password: string;
}

export const emptyNewUser: NewUser = {
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    username: "",
    password: "",
};
