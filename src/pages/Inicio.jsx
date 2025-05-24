import { useEffect, useState } from "react";
import { restaurantes as datosIniciales } from "../data/data";

function App() {
  useEffect(() => {
    const datosGuardados = localStorage.getItem("restaurantes");
    if (!datosGuardados) {
      localStorage.setItem("restaurantes", JSON.stringify(datosIniciales));
    }
  }, []);

  
}

function Inicio() {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    const datosGuardados = localStorage.getItem("restaurantes");
    if (datosGuardados) {
      setRestaurantes(JSON.parse(datosGuardados));
    }
  }, []);

  return (
    <div className="container mt-4">
      <h2>Restaurantes guardados</h2>

      {restaurantes.length > 0 ? (
        <ul className="list-group">
          {restaurantes.map((restaurante, index) => (
            <li key={index} className="list-group-item">
              <strong>{restaurante.nombre}</strong> – {restaurante.ubicacion}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay restaurantes guardados aún.</p>
      )}
    </div>
  );
}

export default Inicio;
