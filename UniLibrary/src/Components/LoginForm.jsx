function LoginForm() {
  return (
    <div className="login-container">
      {/* Panel Izquierdo: Información Institucional */}
      <div className="login-left">
        <div className="login-left-content">
          <div className="login-badge">
            <span className="material-symbols-outlined">verified_user</span>
            <span>Portal Centralizado UniLibrary</span>
          </div>
          
          <h2 className="login-title">Acceso a Recursos de Investigación &amp; Colección Digital</h2>
          <p className="login-description">
            Conéctese al ecosistema académico institucional. Consulte el catálogo general, bases de datos indexadas, repositorios de tesis y reservas de salas especializadas.
          </p>

          <div className="login-stats">
            <div className="login-stat-card">
              <span className="material-symbols-outlined">menu_book</span>
              <span className="stat-value">+240,000</span>
              <p className="stat-label">Títulos y e-books</p>
            </div>
            <div className="login-stat-card">
              <span className="material-symbols-outlined">hub</span>
              <span className="stat-value">14 Sedes</span>
              <p className="stat-label">Interconexión SIBI</p>
            </div>
          </div>
        </div>

        <div className="login-left-footer">
          <div className="login-server-status">
            <span className="status-indicator"></span>
            <span>Servidores Institucionales Activos</span>
            <span className="status-protocol">TLS 1.3 / 256-bit</span>
          </div>
          <div className="login-security-info">
            <span className="material-symbols-outlined">shield</span>
            <span>MFA Integrado bajo norma ISO/IEC 27001</span>
          </div>
        </div>
      </div>

      {/* Panel Derecho: Formulario de Autenticación */}
      <div className="login-right">
        <div className="login-header">
          <img 
            className="login-logo"
            src="https://lh3.googleusercontent.com/aida/AEtjO1V1-lmLuNXaUpNNjKeaz19QjQw5eM9Da6UOGL7td7wiBLb1YlWZF8gDXMOevmtlOmKejnLVhZ6qRDG2ItOYgXRU6BgIATqniHsOT_U1lhvHcASppeKRVq9CHF_zxulu0cfWvhlix8NXt88lsBQACY6IDGuDsyCh7oAJROlLHv35hP0c9znnB0eBonRZ5FYblVx6mte0qFhVTTLlVoWXIuNhE26SRSsUO_d8NEhGguojnqjekgTuxVh0rqgL" 
            alt="UniLibrary Logo Institucional" 
          />
          <div className="login-secure-badge">
            <span className="material-symbols-outlined">domain</span>
            <span>Autenticación Segura</span>
          </div>
        </div>

        <div className="login-role-info">
          <span className="material-symbols-outlined icon-large">shield_person</span>
          <div className="role-details">
            <div className="role-title-row">
              <h3>Inicio de Sesión Único</h3>
              <span className="role-badge">Detección Automática</span>
            </div>
            <p>El sistema identifica automáticamente tu rol institucional (Estudiante, Docente o Administrador) para dirigirte al portal correspondiente.</p>
          </div>
        </div>

        <form className="login-form">
          <div className="login-field">
            <label htmlFor="campus-select">Sede o Recinto Académico</label>
            <div className="input-wrapper">
              <span className="material-symbols-outlined input-icon">location_on</span>
              <select id="campus-select" className="login-input" defaultValue="virtual">
                <option value="san-pedro">Campus Rodrigo Facio - San Pedro</option>
                <option value="heredia">Campus Benjamín Núñez - Heredia</option>
                <option value="cartago">Campus Tecnológico - Cartago</option>
                <option value="virtual">Campus Virtual &amp; Recursos Remotos Globales</option>
              </select>
              <span className="material-symbols-outlined select-arrow">expand_more</span>
            </div>
          </div>

          <div className="login-field">
            <div className="label-row">
              <label htmlFor="user-identity">Correo Institucional</label>
              <span className="domain-tag">Dominio @unilibrary.edu.cr</span>
            </div>
            <div className="input-wrapper">
              <span className="material-symbols-outlined input-icon">alternate_email</span>
              <input 
                type="text" 
                id="user-identity" 
                className="login-input" 
                placeholder="ejemplo.estudiante@unilibrary.edu.cr" 
              />
            </div>
          </div>

          <div className="login-field">
            <div className="label-row">
              <label htmlFor="user-password">Contraseña Unificada</label>
              <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>
            </div>
            <div className="input-wrapper">
              <span className="material-symbols-outlined input-icon">lock</span>
              <input 
                type="password" 
                id="user-password" 
                className="login-input" 
                placeholder="••••••••••••" 
              />
              <button type="button" className="toggle-password-btn">
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>

          <div className="login-routing-info">
            <div className="routing-title">
              <span className="material-symbols-outlined">alt_route</span>
              <span>Enrutamiento Inteligente por Credencial:</span>
            </div>
            <div className="routing-roles">
              <div className="routing-role">
                <span className="material-symbols-outlined">school</span>
                <span><strong>Estudiantes:</strong> Portal Académico y Biblioteca Digital</span>
              </div>
              <div className="routing-role">
                <span className="material-symbols-outlined">admin_panel_settings</span>
                <span><strong>Docentes / TI:</strong> Consola de Gestión SIBI &amp; Repositorio</span>
              </div>
            </div>
          </div>

          <div className="login-options-row">
            <label className="remember-device">
              <input type="checkbox" defaultChecked />
              <span>Recordar dispositivo seguro (30 días)</span>
            </label>
            <span className="encrypted-session">
              <span className="material-symbols-outlined">verified</span>
              Sesión Encriptada
            </span>
          </div>

          <button type="button" className="login-button primary-btn">
            <span>Iniciar Sesión Institucional</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>

        <div className="login-divider">
          <span>O federación de identidad institucional</span>
        </div>

        <div className="login-sso-options">
          <button type="button" className="login-button sso-btn">
            <svg className="sso-icon" fill="none" viewBox="0 0 21 21" width="16" height="16">
              <rect fill="#F25022" height="9" width="9" x="1" y="1"></rect>
              <rect fill="#7FBA00" height="9" width="9" x="11" y="1"></rect>
              <rect fill="#00A4EF" height="9" width="9" x="1" y="11"></rect>
              <rect fill="#FFB900" height="9" width="9" x="11" y="11"></rect>
            </svg>
            <span>Microsoft 365 Institucional</span>
          </button>
          <button type="button" className="login-button sso-btn">
            <svg className="sso-icon" viewBox="0 0 24 24" width="16" height="16">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
            </svg>
            <span>Google Workspace Edu</span>
          </button>
        </div>

        <div className="login-footer">
          <span className="material-symbols-outlined help-icon">contact_support</span>
          <div className="help-text">
            <p>Sistema protegido con autenticación multifactor (2FA).</p>
            <p className="help-details">
              Mesa de Ayuda TI &amp; Soporte de Acceso: 
              <a href="mailto:soporte@unilibrary.edu.cr">soporte@unilibrary.edu.cr</a> 
              &nbsp;|&nbsp; Teléfono Central: <span>(+506) 2511-0000</span>, Ext. <span>2400</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
