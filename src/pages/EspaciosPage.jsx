import PageHeading from "../components/ui/PageHeading";
import SpacesSection from "../components/spaces/SpacesSection";

import { useDashboard } from "../context/DashboardContext";

export default function EspaciosPage() {
  const { showToast } = useDashboard();

  return (
    <>
      <PageHeading
        eyebrow="SIBI v2.4 • Telemetría"
        title="Aforo & Espacios STEM"
        description="Monitoreo de ocupación en laboratorios, salas VR y cubículos mediante llaves electrónicas y telemetría RFID."
        actions={
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              showToast(
                "Enviando calibración de sensibilidad a antenas RFID.",
                "sensors"
              )
            }
          >
            <span className="material-symbols-outlined">
              sensors
            </span>

            Calibrar Antenas
          </button>
        }
      />

      <section className="panel">
        <div className="panel-header">
          <div className="panel-title-wrap">
            <span
              className="material-symbols-outlined"
              style={{
                color:
                  "var(--secondary)",
              }}
            >
              group
            </span>

            <h2 className="panel-title">
              Ocupación Global en Vivo
            </h2>
          </div>

          <span className="status-badge status-ready">
            420 Concurrentes
          </span>
        </div>

        <div className="progress">
          <span style={{ width: "78%" }} />
        </div>

        <div className="metric-footer">
          <span>
            Capacidad nominal: 540
            plazas en 14 sedes
          </span>

          <span className="positive">
            120 libres
          </span>
        </div>
      </section>

      <SpacesSection />
    </>
  );
}