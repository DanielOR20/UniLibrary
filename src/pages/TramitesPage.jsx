import PageHeading from "../components/ui/PageHeading";
import ProceduresPanel from "../components/procedures/ProceduresPanel";
import ProcedureCard from "../components/procedures/ProcedureCard";

import { resolvedProcedures } from "../data/proceduresData";

import { useDashboard } from "../context/DashboardContext";

export default function TramitesPage() {
  const { showToast } = useDashboard();

  return (
    <>
      <PageHeading
        eyebrow="SIBI v2.4 • Expedientes"
        title="Mesa de Trámites Estudiantiles"
        description="Paz y salvo, convalidaciones y prórrogas pendientes de resolución oficial por el consejo administrativo."
        actions={
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              showToast(
                "Historial completo de trámites y resoluciones exportado.",
                "inbox"
              )
            }
          >
            <span className="material-symbols-outlined">
              inbox
            </span>

            Ver Historial
          </button>
        }
      />

      <div className="dashboard-grid">
        <div className="left-column">
          <ProceduresPanel />
        </div>

        <div className="right-column">
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
                  task_alt
                </span>

                <h2 className="panel-title">
                  Expedientes Resueltos Hoy
                </h2>
              </div>

              <span className="status-badge status-ready">
                3 Resueltos
              </span>
            </div>

            <p
              className="panel-subtitle"
              style={{
                marginBottom: 12,
              }}
            >
              Resoluciones oficiales
              emitidas recientemente.
            </p>

            <div className="procedure-list">
              {resolvedProcedures.map(
                (procedure) => (
                  <ProcedureCard
                    key={procedure.id}
                    procedure={procedure}
                  />
                )
              )}
            </div>

            <button
              type="button"
              className="btn btn-tertiary"
              style={{
                width: "100%",
                marginTop: 10,
              }}
              onClick={() =>
                showToast(
                  "Mostrando el historial completo de trámites resueltos.",
                  "history"
                )
              }
            >
              Revisar historial completo →
            </button>
          </section>
        </div>
      </div>
    </>
  );
}