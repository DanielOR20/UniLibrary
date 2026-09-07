import { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import Toast from "../Ui/Toast";

import { useDashboard } from "../../Context/DashboardContext";

export default function AdminLayout() {
  const { showToast } =
    useDashboard();

  const [globalSearch, setGlobalSearch] =
    useState("");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const handleNavigate = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="admin-shell">
      <Sidebar
        onNavigate={handleNavigate}
        open={sidebarOpen}
      />

      <div className="content-shell">
        <Topbar
          globalSearch={globalSearch}
          onGlobalSearch={setGlobalSearch}
          onNotify={() =>
            showToast(
              "Tienes 3 notificaciones pendientes.",
              "notifications"
            )
          }
        />

        <main className="main-content">
          <Outlet />
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

      <Toast />
    </div>
  );
}