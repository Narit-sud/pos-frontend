import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Providers from "./contexts/Providers.tsx"
import MainLayout from "./layouts/app/MainLayout.tsx"
import HomePage from "./pages/HomePage.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import RegisterPage from "./pages/RegisterPage.tsx"
import DashboardPage from "./pages/app/DashboardPage.tsx"
import ProductPage from "./pages/app/ProductPage.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/app" element={<MainLayout />}>
                        <Route index element={<DashboardPage />} />
                        <Route path="product" element={<ProductPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Providers>
    </StrictMode>,
)
