// Punto de entrada para reemplazar posteriormente
// los datos simulados por una API real.

export async function getDashboardData() {
  return {
    ok: true,
    message: "Datos simulados de UniLibrary.",
  };
}

export async function createLoan(payload) {
  return {
    ok: true,
    data: payload,
  };
}