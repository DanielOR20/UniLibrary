import {
  useDashboard,
} from "../../context/DashboardContext";

export default function ProcedureCard({
  procedure,
}) {
  const {
    showToast,
  } = useDashboard();

  return (
    <article className="procedure-card">
      <div className="procedure-top">
        <span
          className="procedure-title"
          style={
            procedure.tone ===
            "tertiary"
              ? {
                  color:
                    "var(--tertiary)",
                }
              : undefined
          }
        >
          {procedure.title}
        </span>

        <span className="procedure-time">
          {procedure.time}
        </span>
      </div>

      <div className="procedure-person">
        <strong>
          {procedure.student}
        </strong>

        <span>
          {procedure.card}
        </span>
      </div>

      <p>
        {procedure.description}
      </p>

      <div className="procedure-actions">
        <button
          type="button"
          className="small-btn btn-success"
          onClick={() =>
            showToast(
              `${procedure.primaryAction} ejecutado.`,
              "done_all"
            )
          }
        >
          {procedure.primaryAction}
        </button>

        <button
          type="button"
          className="small-btn"
          style={{
            background:
              "var(--surface-high)",
            color:
              "var(--text)",
          }}
          onClick={() =>
            showToast(
              `Abriendo ${procedure.secondaryAction}.`,
              "folder_open"
            )
          }
        >
          {procedure.secondaryAction}
        </button>
      </div>
    </article>
  );
}