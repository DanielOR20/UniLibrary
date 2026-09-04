// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProviderUsuario } from './Context/AuthContextUsuario';
import { ProtectedRouteUsuario } from './Routes/ProtectedRouteUsuario';

import { LoginUsuario } from './Pages/LoginUsuario';
import { DashboardUsuario } from './Pages/DashboardUsuario';
import { AccessDeniedUsuario } from './Pages/AccessDeniedUsuario';

import './Styles/themeUsuario.css';

function App() {
  return (
    <AuthProviderUsuario>
      <BrowserRouter>
        <Routes>
          {/* Ruta pública */}
          <Route path="/login" element={<LoginUsuario />} />

          {/* Ruta protegida (Dashboard) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteUsuario>
                <DashboardUsuario />
              </ProtectedRouteUsuario>
            }
          />

          {/* Ruta de Acceso Denegado */}
          <Route path="/acceso-denegado" element={<AccessDeniedUsuario />} />

          {/* Redirección por defecto al Login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProviderUsuario>
  );
}

export default App;