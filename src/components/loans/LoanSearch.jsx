export default function LoanSearch({
  value,
  onChange,
  onSearch,
}) {
  const handleKeyDown = (
    event
  ) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="loan-search">
      <span className="material-symbols-outlined">
        badge
      </span>

      <input
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
        onKeyDown={handleKeyDown}
        placeholder="Búsqueda rápida por Carné (ej. 2024-ING-0482) o Cédula de Identidad..."
        aria-label="Buscar préstamo"
      />

      <button
        type="button"
        onClick={onSearch}
      >
        Buscar Carné
      </button>
    </div>
  );
}