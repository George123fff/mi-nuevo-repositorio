import { useState, useEffect } from "react";

function BusquedaPage() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    const datosGuardados = localStorage.getItem("restaurantes");
    if (datosGuardados) {
      setRestaurantes(JSON.parse(datosGuardados));
    }
  }, []);

  const handleBuscar = (e) => {
    e.preventDefault();
    const filtrados = restaurantes.filter((restaurante) =>
      restaurante.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
    setResultados(filtrados);
  };

  return (
    <div className="container mt-4">
      <h2>Búsqueda de Restaurantes</h2>
      <form onSubmit={handleBuscar} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del restaurante"
            value={terminoBusqueda}
            onChange={(e) => setTerminoBusqueda(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Buscar
          </button>
        </div>
      </form>

      {resultados.length > 0 ? (
        <ul className="list-group">
          {resultados.map((restaurante, index) => (
            <li key={index} className="list-group-item">
              <strong>{restaurante.nombre}</strong> – {restaurante.ubicacion}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default BusquedaPage;
