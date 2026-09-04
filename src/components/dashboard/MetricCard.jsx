export default function MetricCard({
  metric,
}) {
  const isCapacity =
    metric.id === "capacity";

  return (
    <article className="metric-card">
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

      {isCapacity ? (
        <div>
          <div className="progress">
            <span
              style={{
                width: "78%",
              }}
            />
          </div>

          <div className="metric-footer">
            <span>
              {metric.footer}
            </span>

            <span className="positive">
              {metric.footerRight}
            </span>
          </div>
        </div>
      ) : (
        <div className="metric-footer">
          <span
            className={
              metric.tone === "tertiary"
                ? "tertiary-text"
                : "positive"
            }
          >
            {metric.id ===
              "circulation" && (
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 14,
                  verticalAlign: "middle",
                  marginRight: 3,
                }}
              >
                trending_up
              </span>
            )}

            {metric.footer}
          </span>

          <span
            className={
              metric.tone === "tertiary"
                ? "tertiary-text"
                : ""
            }
          >
            {metric.footerRight}
          </span>
        </div>
      )}
    </article>
  );
}