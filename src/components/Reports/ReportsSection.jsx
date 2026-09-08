import {
  reportMetrics,
  reports,
} from "../../data/reportsData";

import {
  useDashboard,
} from "../../context/DashboardContext";

export default function ReportsSection() {
  const {
    showToast,
  } = useDashboard();

  const exportReport = (
    report,
    format
  ) => {
    showToast(
      `Exportando "${report.title}" a ${format}.`,
      format === "PDF"
        ? "picture_as_pdf"
        : "table_view"
    );
  };

  return (
    <>
      <section
        className="metrics-grid"
        aria-label="Indicadores de reportes"
      >
        {reportMetrics.map(
          (metric) => (
            <article
              key={metric.id}
              className="metric-card"
            >
              <div className="metric-top">
                <div>
                  <div className="metric-label">
                    {metric.label}
                  </div>

                  <div
                    className={`metric-value ${metric.tone}`}
                  >
                    {metric.value}
                  </div>

                  <div className="metric-description">
                    {metric.description}
                  </div>
                </div>

                <div
                  className={`metric-icon ${metric.tone}`}
                >
                  <span className="material-symbols-outlined">
                    {metric.icon}
                  </span>
                </div>
              </div>

              <div className="metric-footer">
                <span
                  className={
                    metric.tone ===
                    "tertiary"
                      ? "tertiary-text"
                      : "positive"
                  }
                >
                  {metric.footer}
                </span>

                <span
                  className={
                    metric.tone ===
                    "tertiary"
                      ? "tertiary-text"
                      : ""
                  }
                >
                  {metric.footerRight}
                </span>
              </div>
            </article>
          )
        )}
      </section>

      <section className="panel">
        <div className="panel-header">
          <div className="panel-title-wrap">
            <span
              className="material-symbols-outlined"
              style={{
                color:
                  "var(--primary)",
              }}
            >
              query_stats
            </span>

            <h2 className="panel-title">
              Plantillas de Reportes SIBI
            </h2>
          </div>

          <span className="status-badge status-ready">
            6 Plantillas Activas
          </span>
        </div>

        <div className="report-grid">
          {reports.map(
            (report) => (
              <article
                key={report.id}
                className="report-card"
              >
                <div
                  className={`metric-icon ${report.tone}`}
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <span className="material-symbols-outlined">
                    {report.icon}
                  </span>
                </div>

                <div className="report-title">
                  {report.title}
                </div>

                <p className="report-description">
                  {report.description}
                </p>

                <div className="procedure-actions">
                  {report.formats.map(
                    (format) => (
                      <button
                        key={format}
                        type="button"
                        className={
                          format === "PDF"
                            ? "small-btn btn-success"
                            : "small-btn"
                        }
                        style={{
                          ...(format !==
                          "PDF"
                            ? {
                                background:
                                  "var(--surface-high)",
                                color:
                                  "var(--text)",
                              }
                            : {}),
                        }}
                        onClick={() =>
                          exportReport(
                            report,
                            format
                          )
                        }
                      >
                        {format}
                      </button>
                    )
                  )}

                  <button
                    type="button"
                    className="small-btn"
                    style={{
                      background:
                        "var(--surface-low)",
                      color:
                        "var(--muted)",
                    }}
                    onClick={() =>
                      showToast(
                        `Programando envío automático de "${report.title}".`,
                        "schedule"
                      )
                    }
                    title="Programar"
                  >
                    <span className="material-symbols-outlined">
                      schedule
                    </span>
                  </button>
                </div>
              </article>
            )
          )}
        </div>

        <button
          type="button"
          className="btn btn-primary"
          style={{
            width: "100%",
            marginTop: 12,
          }}
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

          Generar Consolidado General
        </button>
      </section>
    </>
  );
}