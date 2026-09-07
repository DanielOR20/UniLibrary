import PageHeading from "../Components/Ui/PageHeading";
import CatalogSection from "../Components/Catalog/CatalogSection";

import { useDashboard } from "../Context/DashboardContext";

export default function CatalogoPage() {
  const { showToast } = useDashboard();

  return (
    <>
      <PageHeading
        eyebrow="SIBI v2.4 • Colecciones"
        title="Catálogo & Recursos Bibliográficos"
        description="Fondo físico, ejemplares digitales y cobertura de repositorios IEEE, ScienceDirect y ACM por cota MARC21."
        actions={
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              showToast(
                "Abriendo formulario de alta de recurso bibliográfico.",
                "add_book"
              )
            }
          >
            <span className="material-symbols-outlined">
              add_book
            </span>

            Alta de Recurso
          </button>
        }
      />

      <CatalogSection />
    </>
  );
}