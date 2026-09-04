import NavigationMenu from "./NavigationMenu";

export default function Sidebar({
  activeItem,
  onNavigate,
  open = false,
}) {
  return (
    <aside
      className={`sidebar ${
        open ? "open" : ""
      }`}
    >
      <div className="brand">
        <div className="brand-mark">
          <span className="material-symbols-outlined">
            local_library
          </span>
        </div>

        <div>
          <div className="brand-title">
            UniLibrary
          </div>

          <div className="brand-subtitle">
            Gestión Académica
          </div>
        </div>
      </div>

      <div className="portal-badge">
        <span className="status-dot" />

        <span>
          Portal Administrativo & Gestión
        </span>
      </div>

      <NavigationMenu
        activeItem={activeItem}
        onNavigate={onNavigate}
      />

      <div className="system-status">
        <div className="system-status-row">
          <span className="material-symbols-outlined">
            verified
          </span>

          <span>
            Sistema v2.4 Activo
          </span>
        </div>

        <p>
          Período Académico 2024-II
        </p>
      </div>
    </aside>
  );
}