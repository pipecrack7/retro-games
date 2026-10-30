import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SeccionPrincipal from "./SeccionPrincipal";
import Consolas from "./Consolas";
import Cartuchos from "./Cartuchos";
import Ofertas from "./Ofertas";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="contenedor-app">
        {/* Navegación para Retro-Games */}
        <nav className="menu-navegacion" style={{ display: "flex", gap: "20px", padding: "20px", background: "#18181b", color: "white", justifyContent: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link>
          <Link to="/consolas" style={{ color: "white", textDecoration: "none" }}>Consolas</Link>
          <Link to="/cartuchos" style={{ color: "white", textDecoration: "none" }}>Cartuchos</Link>
          <Link to="/ofertas" style={{ color: "white", textDecoration: "none" }}>Ofertas</Link>
        </nav>

        {/* Rutas de la aplicación */}
        <Routes>
          <Route path="/" element={<SeccionPrincipal />} />
          <Route path="/consolas" element={<Consolas />} />
          <Route path="/cartuchos" element={<Cartuchos />} />
          <Route path="/ofertas" element={<Ofertas />} />
        </Routes>

        {/* Footer si lo estabas utilizando */}
        {typeof Footer !== "undefined" && <Footer />}
      </div>
    </Router>
  );
}

export default App;