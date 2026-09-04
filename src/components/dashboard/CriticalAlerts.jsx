import { alerts } from "../../data/dashboardData";

import { useDashboard } from "../../context/DashboardContext";

export default function CriticalAlerts() {
  const { showToast } =
    useDashboard();

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
            crisis_alert
          </span>

          <h2 className="panel-title">
            Alertas Críticas & Moras
          </h2>
        </div>

        <span
          className="status-dot"
          style={{
            background:
              "var(--tertiary)",
          }}
        />
      </div>

      <div className="alert-list">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`alert-item ${alert.type}`}
          >
            <span className="material-symbols-outlined">
              {alert.icon}
            </span>

            <div>
              <div className="alert-title">
                {alert.title}
              </div>

              <p>
                {alert.description}
              </p>

              {alert.secondary ? (
                <div className="alert-actions">
                  <button
                    type="button"
                    onClick={() =>
                      showToast(
                        "Multa automática generada correctamente.",
                        "done_all"
                      )
                    }
                  >
                    {alert.action}
                  </button>

                  <span>•</span>

                  <button
                    type="button"
                    style={{
                      color:
                        "var(--muted)",
                      textDecoration:
                        "none",
                    }}
                    onClick={() =>
                      showToast(
                        "Contacto enviado a Decanatura.",
                        "mail"
                      )
                    }
                  >
                    {alert.secondary}
                  </button>
                </div>
              ) : (
                <span
                  style={{
                    color:
                      "var(--muted)",
                    fontSize: 9,
                  }}
                >
                  {alert.action}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}