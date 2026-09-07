import React, { useContext } from 'react';
import { AuthContextUsuario } from '../context/AuthContextUsuario';

export const NavbarUsuario = ({ onAbrirModulo }) => {
  const { userUsuario, logoutUsuario } = useContext(AuthContextUsuario);

  const avatarUrl = userUsuario?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(userUsuario?.name || 'Usuario')}&background=00346a&color=fff`;

  return (
    <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '0.75rem 1.5rem', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* LOGO */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div style={{ backgroundColor: '#00346a', color: '#fff', fontWeight: '900', padding: '0.4rem 0.6rem', borderRadius: '8px', fontSize: '1rem' }}>
            UL
          </div>
          <div>
            <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#00346a', letterSpacing: '-0.5px' }}>UniLibrary</span>
            <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>PORTAL ESTUDIANTIL</span>
          </div>
        </div>

        {/* NAVEGACIÓN PRINCIPAL CON CLICS */}
        <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ background: 'none', border: 'none', color: '#00346a', borderBottom: '2px solid #00346a', paddingBottom: '0.25rem', fontWeight: 'bold', cursor: 'pointer' }}>Inicio</button>
          <button onClick={() => onAbrirModulo('constancia')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontWeight: '600' }}>Expediente & Notas</button>
          <button onClick={() => onAbrirModulo('tramite')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontWeight: '600' }}>Trámites</button>
        </nav>

        {/* USUARIO & CERRAR SESIÓN */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => onAbrirModulo('carne')}>
            <img
              src={avatarUrl}
              alt="User"
              onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userUsuario?.name || 'Usuario')}&background=00346a&color=fff`; }}
              style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0f172a' }}>
              {userUsuario?.name?.split(' ')[0]}
            </span>
          </div>

          <button
            onClick={logoutUsuario}
            style={{ backgroundColor: '#ef4444', color: '#ffffff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}
          >
            Cerrar Sesión
          </button>
        </div>

      </div>
    </header>
  );
};