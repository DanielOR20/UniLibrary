import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { LoginUsuario } from '../pages/LoginUsuario';
import { DashboardUsuario } from '../pages/DashboardUsuario';
import AdminDashboard from '../pages/AdminDashboard';
import { AccessDeniedUsuario } from '../pages/AccessDeniedUsuario';
import { ProtectedRouteUsuario } from './ProtectedRouteUsuario';

// Admin imports
import AdminLayout from '../components/layout/AdminLayout';
import PrestamosPage from '../pages/PrestamosPage';
import CatalogoPage from '../pages/CatalogoPage';
import UsuariosPage from '../pages/UsuariosPage';
import EspaciosPage from '../pages/EspaciosPage';
import TramitesPage from '../pages/TramitesPage';
import ReportesPage from '../pages/ReportesPage';
import ConfiguracionPage from '../pages/ConfiguracionPage';

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
            <AdminLayout />
          </ProtectedRouteUsuario>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="prestamos" element={<PrestamosPage />} />
        <Route path="catalogo" element={<CatalogoPage />} />
        <Route path="usuarios" element={<UsuariosPage />} />
        <Route path="aforo-espacios" element={<EspaciosPage />} />
        <Route path="mesa-tramites" element={<TramitesPage />} />
        <Route path="reportes" element={<ReportesPage />} />
        <Route path="configuracion" element={<ConfiguracionPage />} />
      </Route>

      {/* Redirección por defecto para rutas no encontradas */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
