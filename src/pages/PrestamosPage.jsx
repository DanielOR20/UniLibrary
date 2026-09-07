import PageHeading from "../Components/Ui/PageHeading";
import LoansSection from "../Components/Loans/LoansSection";
import NewLoanModal from "../Components/Loans/NewLoanModal";

import { useDashboard } from "../Context/DashboardContext";

export default function PrestamosPage() {
  const {
    setModalOpen,
    showToast,
  } = useDashboard();

  return (
    <>
      <PageHeading
        eyebrow="SIBI v2.4 • Circulación"
        title="Gestión de Préstamos & Reservas"
        description="Aprobación, entrega física y trazabilidad de solicitudes de circulación bibliográfica en todas las sedes."
        actions={
          <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                setModalOpen(true)
              }
            >
              <span className="material-symbols-outlined">
                add_circle
              </span>

              Registrar Préstamo
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                showToast(
                  "Exportando cola de préstamos activa.",
                  "download"
                )
              }
            >
              Exportar Cola
            </button>
          </>
        }
      />

      <LoansSection />

      <NewLoanModal />
    </>
  );
}