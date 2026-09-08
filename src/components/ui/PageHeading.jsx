export default function PageHeading({
  eyebrow = "SIBI v2.4 • Producción",
  title,
  description,
  actions,
}) {
  return (
    <section className="dashboard-header">
      <div className="dashboard-header-content">
        <div className="dashboard-heading">
          <div className="context-row">
            <span className="production-badge">
              <span className="status-dot" />

              {eyebrow}
            </span>
          </div>

          <h1>{title}</h1>

          <p>{description}</p>
        </div>

        {actions && (
          <div className="quick-actions">
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}