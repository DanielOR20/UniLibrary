import { useDashboard } from "../../context/DashboardContext";

export default function LoanRow({
  loan,
}) {
  const {
    approveLoan,
    rejectLoan,
    deliverLoan,
    showToast,
  } = useDashboard();

  const handleAction = () => {
    if (loan.status === "pendiente") {
      approveLoan(loan.id);
    } else if (loan.status === "listo") {
      deliverLoan(loan.id);
    } else {
      showToast(
        `Inspeccionando bloqueo de ${loan.student}.`,
        "search"
      );
    }
  };

  return (
    <tr>
      <td>
        <div className="student-name">
          {loan.student}
        </div>

        <div className="student-card">
          {loan.cardNumber}
        </div>
      </td>

      <td>
        <div className="resource-name">
          {loan.resource}
        </div>

        <div className="resource-sub">
          {loan.collection}
        </div>
      </td>

      <td className="code">
        {loan.code}
      </td>

      <td>
        {loan.request}
      </td>

      <td>
        <span
          className={`status-badge ${
            loan.status ===
            "pendiente"
              ? "status-pending"
              : loan.status ===
                "listo"
              ? "status-ready"
              : "status-hold"
          }`}
        >
          {loan.statusLabel}
        </span>
      </td>

      <td>
        <div className="table-actions">
          {loan.status ===
            "pendiente" && (
            <>
              <button
                type="button"
                className="action-icon success"
                title="Aprobar y Asignar"
                onClick={() =>
                  approveLoan(
                    loan.id
                  )
                }
              >
                <span className="material-symbols-outlined">
                  check_circle
                </span>
              </button>

              <button
                type="button"
                className="action-icon danger"
                title="Rechazar"
                onClick={() =>
                  rejectLoan(
                    loan.id
                  )
                }
              >
                <span className="material-symbols-outlined">
                  cancel
                </span>
              </button>

              <button
                type="button"
                className="action-icon"
                title="Notificar por Correo"
                onClick={() =>
                  showToast(
                    "Notificación enviada por correo.",
                    "mail"
                  )
                }
              >
                <span className="material-symbols-outlined">
                  mail
                </span>
              </button>
            </>
          )}

          {loan.status ===
            "listo" && (
            <>
              <button
                type="button"
                className="action-text btn-success"
                onClick={() =>
                  deliverLoan(
                    loan.id
                  )
                }
              >
                Entregar
              </button>

              <button
                type="button"
                className="action-icon"
                onClick={() =>
                  showToast(
                    "Más opciones del préstamo.",
                    "more_vert"
                  )
                }
                title="Más opciones"
              >
                <span className="material-symbols-outlined">
                  more_vert
                </span>
              </button>
            </>
          )}

          {loan.status ===
            "mora" && (
            <>
              <button
                type="button"
                className="action-text"
                style={{
                  background:
                    "var(--surface-high)",
                  color:
                    "var(--text)",
                }}
                onClick={
                  handleAction
                }
              >
                Inspeccionar
              </button>

              <button
                type="button"
                className="action-icon"
                style={{
                  color:
                    "var(--tertiary)",
                }}
                onClick={() =>
                  showToast(
                    "Aviso de multa enviado.",
                    "warning"
                  )
                }
                title="Notificar Multa"
              >
                <span className="material-symbols-outlined">
                  warning
                </span>
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}