import React from "react";
import "./App.css";

function Ofertas() {
  return (
    <main className="seccion-principal">
      <h1>🔥 Ofertas Especiales</h1>
      <p>Descuentos por tiempo limitado en packs de juegos retro.</p>

      <div style={{ background: "#dc2626", padding: "25px", borderRadius: "8px", maxWidth: "400px", margin: "30px auto", color: "#ffffff" }}>
        <h3>⚡ Pack Retro Gamer</h3>
        <p>Lleva una consola + 2 cartuchos sorpresa con un 25% de descuento este fin de semana.</p>
      </div>
    </main>
  );
}

export default Ofertas;