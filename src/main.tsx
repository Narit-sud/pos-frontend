import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Providers from "./contexts/Providers.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import DashboardPage from "./pages/app/DashboardPage.tsx";
import SalePage from "./pages/app/SalePage.tsx";
import ProductPage2 from "./pages/app/ProductPage2.tsx";
import { ProductPage } from "./features/Product/index";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                        <Route path="/product" element={<ProductPage />} />
                    </Route>

                    <Route path="/auth">
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                    </Route>

                    <Route path="/app" element={<AppLayout />}>
                        <Route index element={<DashboardPage />} />
                        <Route path="product2">
                            <Route index element={<ProductPage2 />} />
                        </Route>

                        <Route path="test" element={<ProductPage />} />

                        <Route path="sale">
                            <Route index element={<SalePage />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Providers>
    </StrictMode>,
);
