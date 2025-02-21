import {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
} from "react";
import { LoginDetail, NewUser, User, UserAuth } from "./types";
import {
    loginService,
    logoutService,
    registerService,
    reloginService,
} from "./services.ts";

interface AuthContextType {
    user: UserAuth | null;
    register: (newUser: NewUser) => Promise<void>;
    login: (loginDetail: LoginDetail) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserAuth | null>(null);

    const register = async (newUser: NewUser) => {
        try {
            await registerService(newUser);
        } catch (error) {
            console.error(error);
        }
    };

    const login = async (loginDetail: LoginDetail) => {
        try {
            const userData = await loginService(loginDetail);
            setUser(userData);
            window.location.href = "/product";
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await logoutService();
        } catch (error) {
            console.error(error);
        }
    };

    const relogin = async () => {
        try {
            const reloadUserData = await reloginService();
            setUser(reloadUserData);
        } catch (error) {
            console.error("Failed to reload user data:", error);
            setUser(null);
            if (window.location.pathname !== "/auth/login") {
                window.location.href = "/auth/login";
            }
        }
    };

    useEffect(() => {
        relogin();
    }, []);

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
