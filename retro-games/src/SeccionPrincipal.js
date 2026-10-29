import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">
      <h1>Revive la Era Dorada de los 8 y 16 Bits</h1>
      <p>Consolas clásicas, cartuchos originales y coleccionables arcade.</p>

      <img 
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80" 
        alt="Consolas y videojuegos retro" 
        className="imagen-destacada"
      />

      <br />
      <button className="boton-accion" onClick={() => setMostrarMensaje(!mostrarMensaje)}>
        {mostrarMensaje ? "Ocultar Cheat Code" : "🎮 Desbloquear Cheat Code (Descuento)"}
      </button>

      {mostrarMensaje && (
        <p className="mensaje-sorpresa">
          👾 ¡CÓDIGO ACTIVADO! Usa el cupón <strong>RETRO2026</strong> y obtén un 20% de descuento en tu primer juego.
        </p>
      )}
    </main>
  );
}

export default SeccionPrincipal;