import { useState } from "react";

import AdminLayout from "../components/layout/AdminLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import MetricGrid from "../components/dashboard/MetricGrid";
import CriticalAlerts from "../components/dashboard/CriticalAlerts";
import AuditLog from "../components/dashboard/AuditLog";

import LoansSection from "../components/loans/LoansSection";
import SpacesSection from "../components/spaces/SpacesSection";
import ProceduresPanel from "../components/procedures/ProceduresPanel";

import NewLoanModal from "../components/loans/NewLoanModal";
import Toast from "../components/ui/Toast";

import {
  DashboardProvider,
  useDashboard,
} from "../context/DashboardContext";

function DashboardContent() {
  const [globalSearch, setGlobalSearch] = useState("");

  const {
    setModalOpen,
    showToast,
  } = useDashboard();

  const handleReport = () => {
    showToast(
      "Generando consolidado PDF de gestión académica SIBI 2024...",
      "picture_as_pdf"
    );
  };

  const handleIdCard = () => {
    showToast(
      "Apertura de terminal de captura biométrica y carnización...",
      "badge"
    );
  };

  return (
    <AdminLayout
      globalSearch={globalSearch}
      onGlobalSearch={setGlobalSearch}
      onNotify={() =>
        showToast(
          "Tienes 3 notificaciones pendientes.",
          "notifications"
        )
      }
    >
      <DashboardHeader
        onRegister={() => setModalOpen(true)}
        onIdCard={handleIdCard}
        onReport={handleReport}
      />

      <MetricGrid />

      <div className="dashboard-grid">
        <div className="left-column">
          <LoansSection />

          <SpacesSection />
        </div>

        <div className="right-column">
          <ProceduresPanel />

          <CriticalAlerts />

          <AuditLog />
        </div>
      </div>

      <NewLoanModal />

      <Toast />
    </AdminLayout>
  );
}

export default function AdminDashboard() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}