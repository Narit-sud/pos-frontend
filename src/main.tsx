import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Providers from "./contexts/Providers.tsx"
import MainLayout from "./layouts/AppLayout.tsx"
import HomePage from "./pages/HomePage.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import RegisterPage from "./pages/RegisterPage.tsx"
import DashboardPage from "./pages/app/DashboardPage.tsx"
import ProductPage from "./pages/app/ProductPage.tsx"
import ProductForm from "./pages/ProductForm.tsx"
import ProductFormTw from "./pages/ProductFormTw.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                    </Route>
                    <Route path="/auth">
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                    </Route>
                    <Route path="/app" element={<MainLayout />}>
                        <Route index element={<DashboardPage />} />
                        <Route path="product">
                            <Route index element={<ProductPage />} />
                            <Route path="create" element={<ProductFormTw />} />
                            <Route
                                path="edit/:id"
                                element={<ProductFormTw />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Providers>
    </StrictMode>,
)
