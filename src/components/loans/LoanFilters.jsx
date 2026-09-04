export default function LoanFilters({
  value,
  onChange,
}) {
  return (
    <div className="filter-row">
      <label htmlFor="loan-status">
        Filtrar:
      </label>

      <select
        id="loan-status"
        className="select"
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
      >
        <option value="todos">
          Todos los Estados
        </option>

        <option value="pendiente">
          Pendientes de Aprobación
        </option>

        <option value="listo">
          Listos para Entrega
        </option>

        <option value="mora">
          Retenidos / Mora
        </option>
      </select>
    </div>
  );
}