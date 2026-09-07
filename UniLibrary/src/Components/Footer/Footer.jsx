import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-top">
        {/* Columna 1 */}
        <div className="footer-col brand-col">
          <h2>Uni<span>Library</span></h2>
          <p>
            Formando a los líderes, científicos y tecnólogos que transforman la sociedad global 
            a través del conocimiento de vanguardia y la investigación rigurosa.
          </p>
          <div className="footer-seals">
            <span className="seal">Acreditación SINAES</span>
            <span className="seal">Campus Sostenible</span>
          </div>
        </div>

        {/* Columna 2 */}
        <div className="footer-col">
          <h4>Institución</h4>
          <ul>
            <li><a href="#mision">Misión, Visión y Valores</a></li>
            <li><a href="#gobierno">Gobierno Universitario</a></li>
            <li><a href="#investigacion">Investigación & Laboratorios</a></li>
            <li><a href="#sostenibilidad">Sostenibilidad</a></li>
            <li><a href="#noticias">Noticias y Sala de Prensa</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="footer-col">
          <h4>Carreras & Grados</h4>
          <ul>
            <li><a href="#software">Ingeniería de Software & IA</a></li>
            <li><a href="#ciber">Ciberseguridad y Redes</a></li>
            <li><a href="#biotec">Biotecnología Médica</a></li>
            <li><a href="#administracion">Administración Tecnológica</a></li>
            <li><a href="#posgrados">Posgrados y Maestrías</a></li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div className="footer-col">
          <h4>Sedes & Contacto</h4>
          <p>📍 Campus Tecnológico Central, Vía 104, San José, Costa Rica.</p>
          <p>📞 +506 2500-8000</p>
          <p>✉️ admisiones@innovatec.ac.cr</p>
          <p>🕒 Lun - Vie: 7:00 a.m. - 8:00 p.m.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 UniLibrary. Todos los derechos reservados.</p>
        <div className="footer-legal">
          <a href="#privacidad">Políticas de Privacidad</a>
          <a href="#terminos">Términos de Uso</a>
          <a href="#reglamento">Reglamento Estudiantil</a>
        </div>
      </div>
    </footer>
  );
};