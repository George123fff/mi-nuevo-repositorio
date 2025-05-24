import { useState } from "react";

function NuevoPage() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [imagen, setImagen] = useState("");

  const handleGuardar = (e) => {
    e.preventDefault();
    const nuevo = { nombre, descripcion, direccion, imagen };

    const datosGuardados = localStorage.getItem("restaurantes");
    const restaurantes = datosGuardados ? JSON.parse(datosGuardados) : [];
    restaurantes.push(nuevo);
    localStorage.setItem("restaurantes", JSON.stringify(restaurantes));

    setNombre("");
    setDescripcion("");
    setDireccion("");
    setImagen("");
    alert("Restaurante guardado con éxito.");
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Nuevo Restaurante</h2>
      <form onSubmit={handleGuardar}>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción:</label>
          <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección:</label>
          <input className="form-control" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">URL de Imagen:</label>
          <input className="form-control" value={imagen} onChange={(e) => setImagen(e.target.value)} required />
        </div>
        <button className="btn btn-success" type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default NuevoPage;


