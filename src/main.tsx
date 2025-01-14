import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App.tsx"
import HomePage from "./pages/HomePage.tsx"
import MainLayout from "./layouts/MainLayout.tsx"
import Providers from "./contexts/Providers.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Providers>
    </StrictMode>,
)
