import DashboardHeader from "../components/dashboard/DashboardHeader";
import MetricGrid from "../components/dashboard/MetricGrid";
import CriticalAlerts from "../components/dashboard/CriticalAlerts";
import AuditLog from "../components/dashboard/AuditLog";

import { useDashboard } from "../context/DashboardContext";

export default function AdminDashboard() {
  const {
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
    <>
      <DashboardHeader
        onIdCard={handleIdCard}
        onReport={handleReport}
      />

      <MetricGrid />

      <div className="dashboard-grid">
        <div className="left-column">
          <CriticalAlerts />
        </div>

        <div className="right-column">
          <AuditLog />
        </div>
      </div>
    </>
  );
}