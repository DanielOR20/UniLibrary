import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../Components/Layout/AdminLayout";

import AdminDashboard from "../Pages/AdminDashboard";
import PrestamosPage from "../Pages/PrestamosPage";
import CatalogoPage from "../Pages/CatalogoPage";
import UsuariosPage from "../Pages/UsuariosPage";
import EspaciosPage from "../Pages/EspaciosPage";
import TramitesPage from "../Pages/TramitesPage";
import ReportesPage from "../Pages/ReportesPage";
import ConfiguracionPage from "../Pages/ConfiguracionPage";

export const router = createBrowserRouter([
  {
    element: <AdminLayout />,

    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },

      {
        path: "prestamos",
        element: <PrestamosPage />,
      },

      {
        path: "catalogo",
        element: <CatalogoPage />,
      },

      {
        path: "usuarios",
        element: <UsuariosPage />,
      },

      {
        path: "aforo-espacios",
        element: <EspaciosPage />,
      },

      {
        path: "mesa-tramites",
        element: <TramitesPage />,
      },

      {
        path: "reportes",
        element: <ReportesPage />,
      },

      {
        path: "configuracion",
        element: <ConfiguracionPage />,
      },
    ],
  },
]);