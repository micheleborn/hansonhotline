import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"
import App from "./App"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"
import PrivacyControl from "./components/PrivacyControl"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <PrivacyControl />
    </BrowserRouter>
  </StrictMode>
)