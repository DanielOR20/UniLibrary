import QuickActions from "./QuickActions";

export default function DashboardHeader({
  onRegister,
  onIdCard,
  onReport,
}) {
  return (
    <section className="dashboard-header">
      <div className="dashboard-header-content">
        <div className="dashboard-heading">
          <div className="context-row">
            <span className="production-badge">
              <span className="status-dot" />

              SIBI v2.4 • Producción
            </span>

            <span className="context-text">
              •
            </span>

            <span className="context-text">
              <span className="material-symbols-outlined">
                apartment
              </span>

              Campus Central & Red Remota SIBI
              (14 Sedes)
            </span>
          </div>

          <h1>
            Consola de Gestión Administrativa &
            Operaciones SIBI
          </h1>

          <p>
            Supervisión en tiempo real de
            circulación bibliográfica, aforo de
            recintos STEM y resoluciones de
            trámites de paz y salvo.
          </p>
        </div>

        <QuickActions
          onRegister={onRegister}
          onIdCard={onIdCard}
          onReport={onReport}
        />
      </div>
    </section>
  );
}