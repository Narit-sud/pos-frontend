import {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
} from "react"
import { LoginDetail } from "../interfaces/LoginDetail"
import { publicServices } from "../services/public"
import { User, UserAuth } from "../interfaces/User"
import { userService } from "../services/user"

interface AuthContextType {
    user: User | null
    setUser: any
    login: (loginDetail: LoginDetail) => Promise<boolean>
    logout: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserAuth>({} as UserAuth)

    const login = async (loginDetail: LoginDetail) => {
        const isLogin = (await publicServices.login(loginDetail)) as {
            success: boolean
            message: string
            data: UserAuth
        }
        console.log(isLogin, "trylogin")

        if (isLogin.success && isLogin.data) {
            setUser(isLogin.data)
            return true
        } else {
            return false
        }
    }
    const logout = async () => {
        const isLogout = await userService.logout()
        if (isLogout) {
            setUser({} as UserAuth)
            return true
        } else {
            return false
        }
    }

    const relogin = async () => {
        const isLogin = await userService.relogin()
        if (typeof isLogin !== undefined) {
            const userData: UserAuth = isLogin
            setUser(userData)
        }
    }

    useEffect(() => {
        relogin()
    }, [])
    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
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
