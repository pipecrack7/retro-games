import React from "react";
import "./App.css";

function Consolas() {
  return (
    <main className="seccion-principal">
      <h1>Consolas Clásicas</h1>
      <p>Encuentra consolas retro originales listas para conectar y jugar.</p>
      
      <div className="catalogo-grid" style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        <div style={{ background: "#27272a", padding: "20px", borderRadius: "8px", width: "250px", color: "#f4f4f5" }}>
          <h3>🎮 NES Classic Edition</h3>
          <p>La consola de 8 bits que revivió la nostalgia.</p>
        </div>
        <div style={{ background: "#27272a", padding: "20px", borderRadius: "8px", width: "250px", color: "#f4f4f5" }}>
          <h3>🕹️ Sega Genesis</h3>
          <p>Velocidad y los mejores clásicos de 16 bits.</p>
        </div>
      </div>
    </main>
  );
}

export default Consolas;