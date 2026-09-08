import { NavLink } from "react-router-dom";

const navigationItems = [
  {
    path: "/admin",
    icon: "space_dashboard",
    label: "Dashboard General",
  },

  {
    path: "/admin/prestamos",
    icon: "assignment_return",
    label: "Gestión de Préstamos",
  },

  {
    path: "/admin/catalogo",
    icon: "menu_book",
    label: "Catálogo & Recursos",
  },

  {
    path: "/admin/usuarios",
    icon: "badge",
    label: "Usuarios & Carnés",
  },

  {
    path: "/admin/aforo-espacios",
    icon: "meeting_room",
    label: "Aforo & Espacios STEM",
  },

  {
    path: "/admin/mesa-tramites",
    icon: "inbox",
    label: "Mesa de Trámites",
  },

  {
    path: "/admin/reportes",
    icon: "query_stats",
    label: "Reportes & Analítica",
  },

  {
    path: "/admin/configuracion",
    icon: "settings",
    label: "Configuración",
  },
];

export default function NavigationMenu({
  onNavigate,
}) {
  return (
    <nav
      className="nav-menu"
      aria-label="Navegación principal"
    >
      {navigationItems.map(
        ({ path, icon, label }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/admin"}
            className={({ isActive }) =>
              `nav-item ${
                isActive
                  ? "active"
                  : ""
              }`
            }
            onClick={onNavigate}
          >
            <span className="material-symbols-outlined">
              {icon}
            </span>

            <span>{label}</span>
          </NavLink>
        )
      )}
    </nav>
  );
}