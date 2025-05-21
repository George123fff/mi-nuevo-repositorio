
export default function RestauranteCard({ restaurante }) {
  return (
    <div className="card mb-3" style={{ width: '18rem' }}>
      <img src={restaurante.imagen} className="card-img-top" alt={restaurante.nombre} />
      <div className="card-body">
        <h5 className="card-title">{restaurante.nombre}</h5>
        <p className="card-text">{restaurante.descripcion}</p>
        <p className="card-text"><small className="text-muted">{restaurante.direccion}</small></p>
      </div>
    </div>
  );
}
