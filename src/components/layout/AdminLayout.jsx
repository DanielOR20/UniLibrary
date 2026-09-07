import { useState } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminLayout({
  children,
  onGlobalSearch,
  globalSearch,
  onNotify,
}) {
  const [activeItem, setActiveItem] = useState(
    "dashboard-general"
  );

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (id) => {
    setActiveItem(id);
    setSidebarOpen(false);
  };

  return (
    <div className="admin-shell">
      <Sidebar
        activeItem={activeItem}
        onNavigate={handleNavigate}
        open={sidebarOpen}
      />

      <div className="content-shell">
        <Topbar
          globalSearch={globalSearch}
          onGlobalSearch={onGlobalSearch}
          onNotify={onNotify}
        />

        <main className="main-content">
          {children}
        </main>
      </div>

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() =>
          setSidebarOpen((open) => !open)
        }
        aria-label="Abrir menú"
      >
        <span className="material-symbols-outlined">
          {sidebarOpen ? "close" : "menu"}
        </span>
      </button>
    </div>
  );
}