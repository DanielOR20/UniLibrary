// src/Pages/AccessDeniedUsuario.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const AccessDeniedUsuario = () => {
  return (
    <div className="panel-container-usuario" style={{ textAlign: 'center', paddingTop: '4rem' }}>
      <div className="card-usuario" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h1 style={{ color: 'var(--danger-usuario)', fontSize: '3rem', margin: 0 }}>403</h1>
        <h2>Acceso Denegado</h2>
        <p style={{ color: 'var(--text-muted-usuario)', marginBottom: '1.5rem' }}>
          No tienes permisos suficientes para acceder a esta área. Esta sección está reservada para administradores.
        </p>
        <Link to="/dashboard" className="btn-usuario" style={{ textDecoration: 'none', display: 'inline-block' }}>
          Volver al Dashboard
        </Link>
      </div>
    </div>
  );
};
