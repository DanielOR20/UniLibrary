import UserProfile from "./UserProfile";

export default function Topbar({
  globalSearch,
  onGlobalSearch,
  onNotify,
}) {
  return (
    <header className="topbar">
      <div className="global-search">
        <span className="material-symbols-outlined">
          search
        </span>

        <input
          value={globalSearch}
          onChange={(event) =>
            onGlobalSearch(
              event.target.value
            )
          }
          placeholder="Buscar usuario, carné, libro, reporte, aula..."
          aria-label="Búsqueda global"
        />
      </div>

      <div className="topbar-actions">
        <button
          type="button"
          className="icon-button"
          onClick={onNotify}
          title="Notificaciones"
          aria-label="Notificaciones"
        >
          <span className="material-symbols-outlined">
            notifications
          </span>

          <span className="notification-dot" />
        </button>

        <UserProfile />
      </div>
    </header>
  );
}