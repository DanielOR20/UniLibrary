import {
  useMemo,
  useState,
} from "react";

import {
  useDashboard,
} from "../../context/DashboardContext";

import LoanFilters from "./LoanFilters";
import LoanSearch from "./LoanSearch";
import LoansTable from "./LoansTable";

export default function LoansSection() {
  const {
    loans,
    showToast,
  } = useDashboard();

  const [query, setQuery] =
    useState("");

  const [status, setStatus] =
    useState("todos");

  const filteredLoans =
    useMemo(() => {
      const normalized =
        query
          .toLowerCase()
          .trim();

      return loans.filter(
        (loan) => {
          const matchesQuery =
            !normalized ||
            [
              loan.student,
              loan.cardNumber,
              loan.resource,
              loan.code,
              loan.collection,
            ]
              .join(" ")
              .toLowerCase()
              .includes(
                normalized
              );

          const matchesStatus =
            status === "todos" ||
            loan.status === status;

          return (
            matchesQuery &&
            matchesStatus
          );
        }
      );
    }, [
      loans,
      query,
      status,
    ]);

  const handleSearch = () => {
    if (query.trim()) {
      showToast(
        `Filtrando registros por "${query.trim()}"`,
        "search"
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
            swap_horizontal_circle
          </span>

          <h2 className="panel-title">
            Gestión de Préstamos
            Rápidos & Reservas
          </h2>
        </div>

        <LoanFilters
          value={status}
          onChange={setStatus}
        />
      </div>

      <LoanSearch
        value={query}
        onChange={setQuery}
        onSearch={handleSearch}
      />

      <LoansTable
        loans={filteredLoans}
      />

      <div className="pagination">
        <span>
          Mostrando{" "}
          {filteredLoans.length}{" "}
          de {loans.length}{" "}
          solicitudes activas
        </span>

        <div className="pagination-controls">
          <button
            className="page-button"
            type="button"
            disabled
          >
            ← Previo
          </button>

          <button
            className="page-button active"
            type="button"
          >
            1
          </button>

          <button
            className="page-button"
            type="button"
            onClick={() =>
              showToast(
                "Página 2 seleccionada.",
                "chevron_right"
              )
            }
          >
            2
          </button>

          <button
            className="page-button"
            type="button"
            onClick={() =>
              showToast(
                "Cargando siguiente página.",
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