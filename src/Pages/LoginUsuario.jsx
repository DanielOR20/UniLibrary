// src/Pages/LoginUsuario.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContextUsuario } from '../Context/AuthContextUsuario';

export const LoginUsuario = () => {
  const [emailUsuario, setEmailUsuario] = useState('');
  const [passwordUsuario, setPasswordUsuario] = useState('');
  const [errorUsuario, setErrorUsuario] = useState('');
  const [cargando, setCargando] = useState(false);
  
  const { loginUsuario } = useContext(AuthContextUsuario);
  const navigate = useNavigate();

  const handleSubmitUsuario = async (e) => {
    e.preventDefault();
    setErrorUsuario('');
    setCargando(true);

    const res = await loginUsuario(emailUsuario, passwordUsuario);
    setCargando(false);

    if (res.success) {
      navigate('/dashboard');
    } else {
      setErrorUsuario(res.message || 'Credenciales no válidas para el sistema.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '1000px', backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', display: 'grid', gridTemplateColumns: '1fr 1.3fr' }}>
        
        {/* PANEL IZQUIERDO - INFORMACIÓN INSTITUCIONAL */}
        <div style={{ backgroundColor: '#00346a', color: '#ffffff', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🛡️</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>PORTAL CENTRALIZADO UNILIBRARY</span>
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '1rem' }}>
              Acceso a Recursos de Investigación & Colección Digital
            </h2>

            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '2rem' }}>
              Conéctese al ecosistema académico institucional. Consulte el catálogo general, bases de datos indexadas, repositorios de tesis y reservas de salas especializadas.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.25rem', borderRadius: '12px' }}>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>+240,000</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Títulos y e-books</div>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>14 Sedes</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Interconexión SIBI</div>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.75rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', marginTop: '2rem' }}>
            <p style={{ margin: '0 0 0.25rem 0' }}>🟢 Servidores Institucionales TLS 1.3 / Activos (256-bit)</p>
            <p style={{ margin: 0 }}>🔒 MFA Integrado bajo norma ISO/IEC 27001</p>
          </div>
        </div>

        {/* PANEL DERECHO - FORMULARIO DE ACCESO */}
        <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ backgroundColor: '#00346a', color: '#fff', fontWeight: '900', padding: '0.3rem 0.5rem', borderRadius: '6px', fontSize: '0.9rem' }}>UL</div>
              <span style={{ fontWeight: '800', color: '#00346a', fontSize: '1rem' }}>UNILIBRARY</span>
            </div>
            <span style={{ backgroundColor: '#dcfce7', color: '#166534', fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.65rem', borderRadius: '9999px' }}>
              ● Autenticación Segura
            </span>
          </div>

          <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0f172a' }}>Inicio de Sesión Único</span>
              <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '0.65rem', fontWeight: '800', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Detección Automática</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>
              El sistema identifica automáticamente tu rol institucional (Estudiante o Administrador) para dirigirte al portal correspondiente.
            </p>
          </div>

          {errorUsuario && (
            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '0.75rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center' }}>
              ⚠️ {errorUsuario}
            </div>
          )}

          <form onSubmit={handleSubmitUsuario} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#334155', marginBottom: '0.3rem' }}>
                Correo Institucional
              </label>
              <input
                type="email"
                value={emailUsuario}
                onChange={(e) => setEmailUsuario(e.target.value)}
                required
                placeholder="user@demo.com o admin@demo.com"
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: '700', color: '#334155' }}>Contraseña Unificada</label>
                <a href="#olvido" onClick={(e) => { e.preventDefault(); alert('Inicie el proceso de recuperación en la mesa de ayuda TI.'); }} style={{ fontSize: '0.75rem', color: '#0284c7', textDecoration: 'none', fontWeight: '600' }}>¿Olvidó su contraseña?</a>
              </div>
              <input
                type="password"
                value={passwordUsuario}
                onChange={(e) => setPasswordUsuario(e.target.value)}
                required
                placeholder="••••••••"
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked /> Recordar dispositivo seguro
              </label>
              <span>🔒 Sesión Encriptada</span>
            </div>

            <button
              type="submit"
              disabled={cargando}
              style={{ backgroundColor: '#00346a', color: '#ffffff', padding: '0.85rem', borderRadius: '8px', border: 'none', fontWeight: '800', fontSize: '0.9rem', cursor: 'pointer', marginTop: '0.5rem', transition: 'background-color 0.2s' }}
            >
              {cargando ? 'Autenticando...' : 'Iniciar Sesión Institucional →'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.7rem', color: '#94a3b8' }}>
            Mesa de Ayuda TI & Soporte de Acceso: soporte@unilibrary.edu.cr | (+506) 2511-0000
          </div>

        </div>

      </div>
    </div>
  );
};