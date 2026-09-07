import {
  procedures,
} from "../../data/proceduresData";

import {
  useDashboard,
} from "../../context/DashboardContext";

import ProcedureCard from "./ProcedureCard";

export default function ProceduresPanel() {
  const {
    showToast,
  } = useDashboard();

  return (
    <section className="panel">
      <div className="panel-header">
        <div className="panel-title-wrap">
          <span
            className="material-symbols-outlined"
            style={{
              color:
                "var(--tertiary)",
            }}
          >
            fact_check
          </span>

          <h2 className="panel-title">
            Mesa de Trámites
          </h2>
        </div>

        <span className="status-badge status-hold">
          14 Nuevos
        </span>
      </div>

      <p
        className="panel-subtitle"
        style={{
          marginBottom: 12,
        }}
      >
        Expedientes estudiantiles
        pendientes de resolución
        oficial.
      </p>

      <div className="procedure-list">
        {procedures.map(
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
            "Mostrando la cola completa de trámites.",
            "inbox"
          )
        }
      >
        Revisar cola completa →
      </button>
    </section>
  );
}