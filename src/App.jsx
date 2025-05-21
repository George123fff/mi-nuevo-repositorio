
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import BusquedaPage from "./pages/BusquedaPage";
import NuevoPage from "./pages/NuevoPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <Link className="navbar-brand" to="/">Restaurantes</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Inicio</Link>
          <Link className="nav-link" to="/buscar">Búsqueda</Link>
          <Link className="nav-link" to="/nuevo">Nuevo</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/buscar" element={<BusquedaPage />} />
        <Route path="/nuevo" element={<NuevoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
