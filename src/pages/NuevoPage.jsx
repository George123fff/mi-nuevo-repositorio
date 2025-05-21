
import { useState } from "react";

export default function NuevoPage() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    direccion: "",
    imagen: ""
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nuevo restaurante:", formulario);
    alert("Restaurante registrado (pero no se guarda aún).");
  };

  return (
    <div className="container mt-4">
      <h2>Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" placeholder="Nombre" name="nombre" onChange={handleChange} />
        <textarea className="form-control mb-2" placeholder="Descripción" name="descripcion" onChange={handleChange}></textarea>
        <input type="text" className="form-control mb-2" placeholder="Dirección" name="direccion" onChange={handleChange} />
        <input type="text" className="form-control mb-2" placeholder="URL de imagen" name="imagen" onChange={handleChange} />
        <button className="btn btn-primary" type="submit">Guardar</button>
      </form>
    </div>
  );
}
