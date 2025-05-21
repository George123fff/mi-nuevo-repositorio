
import { restaurantes } from "../data";
import RestauranteCard from "../components/RestauranteCard";

export default function Inicio() {
  return (
    <div className="container mt-4">
      <h2>Lista de Restaurantes</h2>
      <div className="d-flex flex-wrap gap-3">
        {restaurantes.map((r, i) => (
          <RestauranteCard key={i} restaurante={r} />
        ))}
      </div>
    </div>
  );
}
