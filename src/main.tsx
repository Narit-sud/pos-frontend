import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Providers from "./Providers.tsx";
import HomePage from "./pages/HomePage.tsx";
import { ProductPage } from "./features/Product/index";
import LoginPage from "./features/Auth/Pages/LoginPage.tsx";
import RegisterPage from "./features/Auth/Pages/RegisterPage.tsx";
import { AuthProvider } from "./features/Auth/useAuth.tsx";
import ProductForm from "./features/Product/pages/ProductFormPage.tsx";
import CustomerPage from "./features/Customer/pages/CustomerPage.tsx";
import { SupplierPage } from "./features/Supplier/index.ts";
import { POSDisplay } from "./features/PointOfSale/pages/POSDisplay";
import AppLayout from "./layouts/AppLayout.tsx";
import ReportPage from "./features/Report/pages/ReportPage.tsx";
import ProcurementPage from "./features/Procurement/pages/ProcurementPage.tsx";
import ProcurementFormPage from "./features/Procurement/pages/ProcurementFormPage.tsx";
import { ProcurementProvider } from "./features/Procurement/useProcurement.tsx";
import SupplierFormPage from "./features/Supplier/pages/SupplierFormPage";
import CustomerFormPage from "./features/Customer/pages/CustomerFormPage";

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
                        <Route path="new" element={<CustomerFormPage />} />
                    </Route>

                    <Route path="/supplier">
                        <Route index element={<SupplierPage />} />
                        <Route path="new" element={<SupplierFormPage />} />
                    </Route>

                    <Route path="/report" element={<ReportPage />} />
                    <Route path="/procurement">
                        <Route index element={<ProcurementPage />} />
                        <Route path=":uuid" element={<ProcurementFormPage />} />
                    </Route>
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
