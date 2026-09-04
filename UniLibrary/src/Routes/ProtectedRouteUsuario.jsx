// src/Routes/ProtectedRouteUsuario.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContextUsuario } from '../Context/AuthContextUsuario';

export const ProtectedRouteUsuario = ({ children, allowedRoleUsuario }) => {
  const { isAuthenticatedUsuario, roleUsuario, loadingUsuario } = useContext(AuthContextUsuario);

  if (loadingUsuario) {
    return <div style={{ color: '#fff', padding: '2rem' }}>Cargando sesión...</div>;
  }

  if (!isAuthenticatedUsuario) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoleUsuario && roleUsuario !== allowedRoleUsuario) {
    return <Navigate to="/acceso-denegado" replace />;
  }

  return children;
};
