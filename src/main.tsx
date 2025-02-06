import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Providers from "./Providers.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
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
                </Routes>
            </BrowserRouter>
        </Providers>
    </StrictMode>,
);
