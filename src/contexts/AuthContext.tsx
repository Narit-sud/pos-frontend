import { createContext, useState, useContext, ReactNode } from "react";
import { LoginDetail } from "../interfaces/LoginDetail";
import { userServices } from "../services/user";
import { User } from "../interfaces/User";

interface AuthContextType {
    user: User | null;
    login: (loginDetail: LoginDetail) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (loginDetail: LoginDetail) => {
        const tryLogin = await userServices.login(loginDetail);
        if (tryLogin?.success) {
            setUser(tryLogin.data.data);
            console.log("get and set auth success");
            console.log(user);
        }
    };
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
