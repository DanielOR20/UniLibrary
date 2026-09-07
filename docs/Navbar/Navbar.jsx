import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      {/* Topbar Pequeña */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-contact">
            <span>📞 +506 2500-8000</span>
            <span className="separator">|</span>
            <span>✉️ admisiones@innovatec.ac.cr</span>
          </div>
          <div className="topbar-links">
            <a href="#estudiantes">Estudiantes</a>
            <a href="#admisiones">Admisiones</a>
            <a href="#eventos">Eventos</a>
            <a href="#biblioteca">Biblioteca Virtual</a>
            <div className="topbar-user-icon">👤</div>
          </div>
        </div>
      </div>

      {/* Navbar Principal */}
      <nav className="main-nav">
        <div className="nav-inner">
          <Link to="/" className="nav-brand">
            <h2>Uni<span>Library</span></h2>
            <small>Sistema Bibliotecario & Académico</small>
          </Link>

          <div className="nav-menu">
            <Link to="/carreras">Carreras</Link>
            <a href="#admision">Admisiones</a>
            <a href="#vida-universitaria">Vida Universitaria</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div className="nav-actions">
            <a href="#portal" className="btn-portal">Portal Estudiantil</a>
          </div>
        </div>
      </nav>
    </header>
  );
};