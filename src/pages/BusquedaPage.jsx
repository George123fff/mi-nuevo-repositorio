
import { useState } from "react";
import { restaurantes } from "../data";
import RestauranteCard from "../components/RestauranteCard";

export default function BusquedaPage() {
  const [busqueda, setBusqueda] = useState("");

  const resultados = restaurantes.filter(r =>
    r.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Búsqueda de Restaurantes</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="d-flex flex-wrap gap-3">
        {resultados.map((r, i) => (
          <RestauranteCard key={i} restaurante={r} />
        ))}
      </div>
    </div>
  );
}
