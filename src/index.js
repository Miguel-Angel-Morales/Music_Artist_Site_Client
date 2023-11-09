// src/index.js
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import HomePage from './pages/HomePage';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <HomePage />
    </BrowserRouter>
)


 