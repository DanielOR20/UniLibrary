const navigationItems = [
  [
    "dashboard-general",
    "space_dashboard",
    "Dashboard General",
  ],

  [
    "gestion-de-prestamos",
    "assignment_return",
    "Gestión de Préstamos",
  ],

  [
    "catalogo-y-recursos",
    "menu_book",
    "Catálogo & Recursos",
  ],

  [
    "usuarios-y-carnes",
    "badge",
    "Usuarios & Carnés",
  ],

  [
    "aforo-y-espacios-stem",
    "meeting_room",
    "Aforo & Espacios STEM",
  ],

  [
    "mesa-de-tramites",
    "inbox",
    "Mesa de Trámites",
  ],

  [
    "reportes-y-analitica",
    "query_stats",
    "Reportes & Analítica",
  ],

  [
    "configuracion",
    "settings",
    "Configuración",
  ],
];

export default function NavigationMenu({
  activeItem,
  onNavigate,
}) {
  return (
    <nav
      className="nav-menu"
      aria-label="Navegación principal"
    >
      {navigationItems.map(
        ([id, icon, label]) => (
          <button
            key={id}
            type="button"
            className={`nav-item ${
              activeItem === id
                ? "active"
                : ""
            }`}
            onClick={() =>
              onNavigate(id)
            }
          >
            <span className="material-symbols-outlined">
              {icon}
            </span>

            <span>{label}</span>
          </button>
        )
      )}
    </nav>
  );
}