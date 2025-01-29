import {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
} from "react"
import { LoginDetail } from "../interfaces/LoginDetail"
import { NewUser, User, UserAuth } from "../interfaces/User"
import {
    loginService,
    logoutService,
    registerService,
    reloginService,
} from "../services/auth"

interface AuthContextType {
    user: UserAuth | null
    register: (newUser: NewUser) => Promise<void>
    login: (loginDetail: LoginDetail) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserAuth>({} as UserAuth)

    const register = async (newUser: NewUser) => {
        try {
            await registerService(newUser)
        } catch (error) {
            console.error(error)
        }
    }

    const login = async (loginDetail: LoginDetail) => {
        try {
            await loginService(loginDetail)
            await relogin()
        } catch (error) {
            console.error(error)
        }
    }

    const logout = async () => {
        try {
            await logoutService()
        } catch (error) {
            console.error(error)
        }
    }

    const relogin = async () => {
        try {
            const reloadUserData = await reloginService()
            setUser(reloadUserData)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        relogin()
    }, [])
    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
