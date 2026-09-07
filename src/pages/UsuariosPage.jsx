import PageHeading from "../Components/Ui/PageHeading";
import UsersSection from "../Components/Users/UsersSection";

import { useDashboard } from "../Context/DashboardContext";

export default function UsuariosPage() {
  const { showToast } = useDashboard();

  return (
    <>
      <PageHeading
        eyebrow="SIBI v2.4 • Población"
        title="Usuarios & Emisión de Carnés"
        description="Estudiantes, docentes y personal con acceso activo, control de moras y renovación de carnés universitarios."
        actions={
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              showToast(
                "Apertura de terminal de captura biométrica y carnización...",
                "badge"
              )
            }
          >
            <span className="material-symbols-outlined">
              badge
            </span>

            Emitir Nuevo Carné
          </button>
        }
      />

      <UsersSection />
    </>
  );
}