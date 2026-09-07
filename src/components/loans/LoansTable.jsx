import LoanRow from "./LoanRow";

export default function LoansTable({
  loans,
}) {
  return (
    <div className="table-wrapper">
      <table className="loans-table">
        <thead>
          <tr>
            <th>
              Estudiante / Carné
            </th>

            <th>
              Recurso Solicitado
            </th>

            <th>
              Cota / Código
            </th>

            <th>
              Solicitud
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
          {loans.length ? (
            loans.map((loan) => (
              <LoanRow
                key={loan.id}
                loan={loan}
              />
            ))
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
                No hay solicitudes
                que coincidan con
                los filtros.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}