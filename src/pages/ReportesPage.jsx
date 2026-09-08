import PageHeading from "../components/ui/PageHeading";
import ReportsSection from "../components/reports/ReportsSection";

import { useDashboard } from "../context/DashboardContext";

export default function ReportesPage() {
  const { showToast } = useDashboard();

  return (
    <>
      <PageHeading
        eyebrow="SIBI v2.4 • Analítica"
        title="Reportes & Analítica"
        description="Indicadores de gestión, plantillas de exportación y automatizaciones programadas de la red SIBI."
        actions={
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              showToast(
                "Generando consolidado PDF de gestión académica SIBI 2024...",
                "picture_as_pdf"
              )
            }
          >
            <span className="material-symbols-outlined">
              picture_as_pdf
            </span>

            Generar PDF
          </button>
        }
      />

      <ReportsSection />
    </>
  );
}