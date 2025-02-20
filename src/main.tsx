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
import ProductForm from "./features/Product/pages/ProductFormPage.tsx";
import CustomerPage from "./features/Customer/pages/CustomerPage.tsx";
import { SupplierPage } from "./features/Supplier/index.ts";
import { POSDisplay } from "./features/PointOfSale/pages/POSDisplay";
import AppLayout from "./layouts/AppLayout.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Providers>
                            <AppLayout />
                        </Providers>
                    }
                >
                    <Route index element={<HomePage />} />

                    <Route path="/pos">
                        <Route index element={<POSDisplay />} />
                    </Route>

                    <Route path="/product">
                        <Route index element={<ProductPage />} />
                        <Route path=":uuid" element={<ProductForm />} />
                    </Route>

                    <Route path="/customer">
                        <Route index element={<CustomerPage />} />
                    </Route>

                    <Route path="/supplier">
                        <Route index element={<SupplierPage />} />
                    </Route>

                    <Route path="/category" element={<CategoryPage />} />
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
