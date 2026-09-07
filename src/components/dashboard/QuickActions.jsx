export default function QuickActions({
  onRegister,
  onIdCard,
  onReport,
}) {
  return (
    <div className="quick-actions">
      <button
        type="button"
        className="btn btn-primary"
        onClick={onRegister}
      >
        <span className="material-symbols-outlined">
          add_circle
        </span>

        Registrar Préstamo
      </button>

      <button
        type="button"
        className="btn btn-secondary"
        onClick={onIdCard}
      >
        <span className="material-symbols-outlined">
          badge
        </span>

        Emitir Carné
      </button>

      <button
        type="button"
        className="btn btn-tertiary"
        onClick={onReport}
      >
        <span className="material-symbols-outlined">
          picture_as_pdf
        </span>

        Generar Reporte PDF
      </button>
    </div>
  );
}