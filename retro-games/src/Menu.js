import React from "react";
import "./App.css";

function Menu() {
  return (
    <nav className="menu-navegacion">
      <h2 className="logo">🕹️ PixelRetro Games</h2>
      <ul>
        <li>Inicio</li>
        <li>Consolas</li>
        <li>Cartuchos</li>
        <li>Ofertas</li>
      </ul>
    </nav>
  );
}

export default Menu;