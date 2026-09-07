import {
  useDashboard,
} from "../../context/DashboardContext";

const statusLabels = {
  disponible: "Disponible",
  ocupado: "Ocupado",
  mantenimiento:
    "Mantenimiento",
};

export default function SpaceCard({
  space,
}) {
  const {
    releaseSpace,
    assignSpace,
    setMaintenance,
    enableSpace,
  } = useDashboard();

  const status =
    space.status;

  const action =
    status === "ocupado"
      ? () =>
          releaseSpace(
            space.id
          )
      : status ===
        "disponible"
      ? () =>
          assignSpace(
            space.id
          )
      : () =>
          enableSpace(
            space.id
          );

  const actionLabel =
    status === "ocupado"
      ? "Liberar Espacio"
      : status ===
        "disponible"
      ? "Asignar Ahora"
      : "Reactivar";

  return (
    <article className="space-card">
      <div className="space-head">
        <div className="space-name">
          <span
            className="status-dot"
            style={{
              width: 8,
              height: 8,

              background:
                status ===
                "disponible"
                  ? "var(--secondary)"
                  : status ===
                    "ocupado"
                  ? "var(--tertiary)"
                  : "var(--muted)",
            }}
          />

          {space.name}
        </div>

        <span
          className="space-status"
          style={{
            color:
              status ===
              "disponible"
                ? "var(--secondary)"
                : status ===
                  "ocupado"
                ? "var(--tertiary)"
                : "var(--muted)",

            background:
              status ===
              "disponible"
                ? "rgba(0,106,96,.13)"
                : status ===
                  "ocupado"
                ? "rgba(104,12,55,.1)"
                : "var(--surface-container)",
          }}
        >
          {statusLabels[status]}
        </span>
      </div>

      <div className="space-info">
        <strong>
          {space.detail}
        </strong>

        <span>
          {space.subdetail}
        </span>
      </div>

      <div className="space-footer">
        <span className="space-capacity">
          Capacidad:{" "}
          {space.capacity}
        </span>

        <button
          type="button"
          className="space-action"
          onClick={action}
        >
          {actionLabel}
        </button>
      </div>

      {status ===
        "ocupado" && (
        <button
          type="button"
          className="space-action"
          style={{
            marginTop: 7,
            color:
              "var(--muted)",
          }}
          onClick={() =>
            setMaintenance(
              space.id
            )
          }
        >
          Mantenimiento
        </button>
      )}
    </article>
  );
}