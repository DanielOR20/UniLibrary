import DashboardHeader from "../components/dashboard/DashboardHeader";
import MetricGrid from "../components/dashboard/MetricGrid";
import CriticalAlerts from "../components/dashboard/CriticalAlerts";
import AuditLog from "../components/dashboard/AuditLog";

import LoansSection from "../Components/Loans/LoansSection";
import SpacesSection from "../Components/Spaces/SpacesSection";
import ProceduresPanel from "../Components/Procedures/ProceduresPanel";

import NewLoanModal from "../Components/Loans/NewLoanModal";

import { useDashboard } from "../Context/DashboardContext";

export default function AdminDashboard() {
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
    <>
      <DashboardHeader
        onRegister={() =>
          setModalOpen(true)
        }
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
    </>
  );
}