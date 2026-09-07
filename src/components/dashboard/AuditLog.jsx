import { auditLog } from "../../data/dashboardData";

export default function AuditLog() {
  return (
    <section className="panel">
      <div className="panel-header">
        <div className="panel-title-wrap">
          <span
            className="material-symbols-outlined"
            style={{
              color:
                "var(--muted)",
            }}
          >
            history
          </span>

          <h2 className="panel-title">
            Bitácora de Auditoría SIBI
          </h2>
        </div>

        <span className="live-label">
          EN VIVO
        </span>
      </div>

      <ul className="audit-list">
        {auditLog.map((item) => (
          <li
            key={item.id}
            className="audit-item"
          >
            <span
              className="audit-dot"
              style={{
                background:
                  item.tone ===
                  "secondary"
                    ? "var(--secondary)"
                    : item.tone ===
                      "primary"
                    ? "var(--primary)"
                    : item.tone ===
                      "tertiary"
                    ? "var(--tertiary)"
                    : "var(--muted)",
              }}
            />

            <div>
              <strong>
                {item.actor}
              </strong>{" "}
              {item.action}

              <span className="audit-meta">
                {item.meta}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}