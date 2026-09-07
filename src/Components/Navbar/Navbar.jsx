import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header className="home-header">
      {/* Fila 1: Top Bar institucional */}
      <div className="home-topbar">
        <div className="home-topbar-inner">
          <div className="home-topbar-left">
            <span>📞 +506 2500-8000</span>
            <span className="topbar-divider">|</span>
            <span>✉️ contacto@innovatec.ac.cr</span>
          </div>
          <div className="home-topbar-right">
            <a href="#estudiantes">Estudiantes</a>
            <a href="#admisiones">Admisiones</a>
            <a href="#eventos">Eventos</a>
            <Link to="/login">Biblioteca Virtual</Link>
          </div>
        </div>
      </div>

      {/* Fila 2: Navbar principal */}
      <nav className="home-navbar">
        <div className="home-navbar-inner">
          {/* Logo a la izquierda */}
          <Link to="/" className="home-logo">
            <h2>Uni<span>Library</span></h2>
            <small>Sistema Bibliotecario & Académico</small>
          </Link>

          {/* Menú centrado */}
          <ul className="home-nav-menu">
            <li><a href="#carreras">Carreras</a></li>
            <li><a href="#admision">Admisiones</a></li>
            <li><a href="#vida-universitaria">Vida Universitaria</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto-asesor">Contacto</a></li>
          </ul>

          {/* Botón a la derecha */}
          <div className="home-nav-actions">
            <Link to="/login" className="btn-portal-estudiantil">
              Portal Estudiantil
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
