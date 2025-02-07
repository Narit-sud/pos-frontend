import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Providers from "./Providers.tsx";
import HomePage from "./pages/HomePage.tsx";
import { ProductPage } from "./features/Product/index";
import LoginPage from "./features/Auth/Pages/LoginPage.tsx";
import RegisterPage from "./features/Auth/Pages/RegisterPage.tsx";
import CategoryPage from "./features/Category/pages/CategoryPage.tsx";
import { AuthProvider } from "./features/Auth/useAuth.tsx";
import ProductForm from "./features/Product/pages/ProductForm.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />

                    <Route path="/product">
                        <Route
                            index
                            element={
                                <Providers>
                                    <ProductPage />
                                </Providers>
                            }
                        />
                        <Route
                            path=":uuid"
                            element={
                                <Providers>
                                    <ProductForm />
                                </Providers>
                            }
                        />
                    </Route>

                    <Route
                        path="/category"
                        element={
                            <Providers>
                                <CategoryPage />
                            </Providers>
                        }
                    />
                </Route>

                <Route path="/auth">
                    <Route
                        path="login"
                        element={
                            <AuthProvider>
                                <LoginPage />
                            </AuthProvider>
                        }
                    />
                    <Route
                        path="register"
                        element={
                            <AuthProvider>
                                <RegisterPage />
                            </AuthProvider>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
