import {
  useMemo,
  useState,
} from "react";

import {
  users,
} from "../../Data/usersData";

import {
  useDashboard,
} from "../../Context/DashboardContext";

const statusTone = {
  activo: "status-ready",
  suspendido: "status-hold",
  pendiente: "status-pending",
  inactivo: "status-muted",
};

export default function UsersSection() {
  const {
    showToast,
  } = useDashboard();

  const [query, setQuery] =
    useState("");

  const [status, setStatus] =
    useState("todos");

  const filtered =
    useMemo(() => {
      const normalized =
        query
          .toLowerCase()
          .trim();

      return users.filter(
        (user) => {
          const matchesQuery =
            !normalized ||
            [
              user.name,
              user.cardNumber,
              user.program,
              user.school,
            ]
              .join(" ")
              .toLowerCase()
              .includes(
                normalized
              );

          const matchesStatus =
            status === "todos" ||
            user.status === status;

          return (
            matchesQuery &&
            matchesStatus
          );
        }
      );
    }, [
      query,
      status,
    ]);

  const handleSearch = () => {
    if (query.trim()) {
      showToast(
        `Buscando usuario o carné por "${query.trim()}"`,
        "badge"
      );
    }
  };

  return (
    <section className="panel">
      <div className="panel-header">
        <div className="panel-title-wrap">
          <span
            className="material-symbols-outlined"
            style={{
              color:
                "var(--secondary)",
            }}
          >
            badge
          </span>

          <h2 className="panel-title">
            Comunidad Universitaria &
            Emisión de Carnés
          </h2>
        </div>

        <div className="filter-row">
          <label htmlFor="user-status">
            Filtrar:
          </label>

          <select
            id="user-status"
            className="select"
            value={status}
            onChange={(event) =>
              setStatus(
                event.target.value
              )
            }
          >
            <option value="todos">
              Todos los Estados
            </option>

            <option value="activo">
              Activos
            </option>

            <option value="suspendido">
              Suspendidos
            </option>

            <option value="pendiente">
              En Renovación
            </option>

            <option value="inactivo">
              Inactivos
            </option>
          </select>
        </div>
      </div>

      <div className="loan-search">
        <span className="material-symbols-outlined">
          badge
        </span>

        <input
          value={query}
          onChange={(event) =>
            setQuery(
              event.target.value
            )
          }
          onKeyDown={(event) => {
            if (
              event.key === "Enter"
            ) {
              handleSearch();
            }
          }}
          placeholder="Búsqueda por nombre, carné universitario o programa..."
          aria-label="Buscar usuario"
        />

        <button
          type="button"
          onClick={handleSearch}
        >
          Buscar Carné
        </button>
      </div>

      <div className="table-wrapper">
        <table className="loans-table">
          <thead>
            <tr>
              <th>
                Usuario / Carné
              </th>

              <th>
                Programa / Sede
              </th>

              <th>
                Estado
              </th>

              <th>
                Préstamos
              </th>

              <th>
                Multa / Deuda
              </th>

              <th>
                Vencimiento
              </th>

              <th>
                Acción Inmediata
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.length ? (
              filtered.map(
                (user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="student-name">
                        {user.name}
                      </div>

                      <div className="student-card">
                        {user.cardNumber}
                      </div>
                    </td>

                    <td>
                      <div className="resource-name">
                        {user.program}
                      </div>

                      <div className="resource-sub">
                        {user.school}
                      </div>
                    </td>

                    <td>
                      <span
                        className={`status-badge ${statusTone[user.status]}`}
                      >
                        {user.statusLabel}
                      </span>
                    </td>

                    <td>
                      {user.activeLoans}
                    </td>

                    <td
                      style={{
                        color:
                          user.debt ===
                          "$0.00"
                            ? "var(--secondary)"
                            : "var(--tertiary)",
                        fontWeight: 600,
                      }}
                    >
                      {user.debt}
                    </td>

                    <td>
                      {user.expires}
                    </td>

                    <td>
                      <div className="table-actions">
                        <button
                          type="button"
                          className="action-text btn-success"
                          onClick={() =>
                            showToast(
                              `Abriendo gestión de ${user.name}.`,
                              "manage_accounts"
                            )
                          }
                        >
                          Gestionar
                        </button>

                        <button
                          type="button"
                          className="action-icon"
                          title="Renovar carné"
                          onClick={() =>
                            showToast(
                              `Renovación iniciada para ${user.cardNumber}.`,
                              "badge"
                            )
                          }
                        >
                          <span className="material-symbols-outlined">
                            badge
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td
                  colSpan="7"
                  style={{
                    textAlign:
                      "center",
                    padding: 28,
                  }}
                >
                  No hay usuarios que
                  coincidan con los
                  filtros.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span>
          Mostrando {filtered.length}{" "}
          de {users.length}{" "}
          usuarios registrados
        </span>

        <div className="pagination-controls">
          <button
            type="button"
            className="page-button active"
          >
            1
          </button>

          <button
            type="button"
            className="page-button"
            onClick={() =>
              showToast(
                "Cargando siguiente página de usuarios.",
                "arrow_forward"
              )
            }
          >
            Siguiente →
          </button>
        </div>
      </div>
    </section>
  );
}