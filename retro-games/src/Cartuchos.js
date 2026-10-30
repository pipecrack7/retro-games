import React from "react";
import "./App.css";

function Cartuchos() {
  return (
    <main className="seccion-principal">
      <h1>Cartuchos y Juegos</h1>
      <p>Explora nuestra colección de cartuchos originales testeados y funcionando.</p>

      <div className="catalogo-grid" style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        <div style={{ background: "#27272a", padding: "20px", borderRadius: "8px", width: "250px", color: "#f4f4f5" }}>
          <h3>👾 Super Mario World</h3>
          <p>Super Nintendo (SNES) - Edición Original.</p>
        </div>
        <div style={{ background: "#27272a", padding: "20px", borderRadius: "8px", width: "250px", color: "#f4f4f5" }}>
          <h3>⚔️ The Legend of Zelda</h3>
          <p>Nintendo 64 (N64) - Versión dorada coleccionable.</p>
        </div>
      </div>
    </main>
  );
}

export default Cartuchos; // (Asegúrate de exportar Cartuchos)