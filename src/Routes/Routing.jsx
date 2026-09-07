import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { LoginUsuario } from '../pages/LoginUsuario';
import { DashboardUsuario } from '../pages/DashboardUsuario';
import AdminDashboard from '../pages/AdminDashboard';
import { AccessDeniedUsuario } from '../pages/AccessDeniedUsuario';
import { ProtectedRouteUsuario } from './ProtectedRouteUsuario';

export const Routing = () => {
  return (
    <Routes>
      {/* Ruta principal: Landing / Home */}
      <Route path="/" element={<Home />} />
      <Route path="/carreras" element={<Home />} />

      {/* Autenticación */}
      <Route path="/login" element={<LoginUsuario />} />
      <Route path="/acceso-denegado" element={<AccessDeniedUsuario />} />

      {/* Portal Estudiantil / Usuario */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRouteUsuario allowedRoleUsuario="user">
            <DashboardUsuario />
          </ProtectedRouteUsuario>
        }
      />

      {/* Portal Administrador */}
      <Route
        path="/admin"
        element={
          <ProtectedRouteUsuario allowedRoleUsuario="admin">
            <AdminDashboard />
          </ProtectedRouteUsuario>
        }
      />

      {/* Redirección por defecto para rutas no encontradas */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
