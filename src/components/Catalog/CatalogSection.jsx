import {
  useMemo,
  useState,
} from "react";

import {
  catalog,
} from "../../data/catalogData";

import {
  useDashboard,
} from "../../context/DashboardContext";

const statusTone = {
  disponible: "status-ready",
  limitado: "status-pending",
  agotado: "status-hold",
};

export default function CatalogSection() {
  const { showToast } =
    useDashboard();

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

      return catalog.filter(
        (item) => {
          const matchesQuery =
            !normalized ||
            [
              item.title,
              item.author,
              item.collection,
              item.code,
            ]
              .join(" ")
              .toLowerCase()
              .includes(
                normalized
              );

          const matchesStatus =
            status === "todos" ||
            item.status === status;

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
        `Buscando en el catálogo por "${query.trim()}"`,
        "search"
      );
    }
  };

  const handleReserve = (
    item
  ) => {
    if (item.available > 0) {
      showToast(
        `Reserva confirmada de "${item.title}". Solicitud en cola.`,
        "bookmark_added"
      );
    } else {
      showToast(
        `Sin ejemplares circulantes. Ingresó a lista de espera.`,
        "event_available"
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
                "var(--primary)",
            }}
          >
            menu_book
          </span>

          <h2 className="panel-title">
            Fondo Bibliográfico &
            Recursos Digitales
          </h2>
        </div>

        <div className="filter-row">
          <label htmlFor="catalog-status">
            Filtrar:
          </label>

          <select
            id="catalog-status"
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

            <option value="disponible">
              Disponibles en Estante
            </option>

            <option value="limitado">
              Pocos Ejemplares
            </option>

            <option value="agotado">
              Solo Consulta en Sala
            </option>
          </select>
        </div>
      </div>

      <div className="loan-search">
        <span className="material-symbols-outlined">
          search
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
          placeholder="Buscar por título, autor, colección o cota MARC21..."
          aria-label="Buscar en catálogo"
        />

        <button
          type="button"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>

      <div className="table-wrapper">
        <table className="loans-table">
          <thead>
            <tr>
              <th>
                Título / Autor
              </th>

              <th>
                Colección
              </th>

              <th>
                Cota MARC21
              </th>

              <th>
                Ejemplares
              </th>

              <th>
                Estado
              </th>

              <th>
                Acción Inmediata
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.length ? (
              filtered.map(
                (item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="resource-name">
                        {item.title}
                      </div>

                      <div className="resource-sub">
                        {item.author}
                      </div>
                    </td>

                    <td>
                      {item.collection}
                    </td>

                    <td className="code">
                      {item.code}
                    </td>

                    <td>
                      <span style={{ color: "var(--text)", fontWeight: 600 }}>
                        {item.available}
                      </span>{" "}
                      de {item.total}
                    </td>

                    <td>
                      <span
                        className={`status-badge ${statusTone[item.status]}`}
                      >
                        {item.statusLabel}
                      </span>
                    </td>

                    <td>
                      <div className="table-actions">
                        <button
                          type="button"
                          className="action-text btn-success"
                          onClick={() =>
                            handleReserve(item)
                          }
                        >
                          {item.available > 0
                            ? "Reservar"
                            : "Lista Espera"}
                        </button>

                        <button
                          type="button"
                          className="action-icon"
                          title="Ver ficha bibliográfica"
                          onClick={() =>
                            showToast(
                              `Abriendo ficha de "${item.title}".`,
                              "visibility"
                            )
                          }
                        >
                          <span className="material-symbols-outlined">
                            visibility
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
                  colSpan="6"
                  style={{
                    textAlign:
                      "center",
                    padding: 28,
                  }}
                >
                  No hay recursos que
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
          de {catalog.length}{" "}
          registros del catálogo
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
                "Cargando página 2 del catálogo.",
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