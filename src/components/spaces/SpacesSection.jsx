import {
  useDashboard,
} from "../../context/DashboardContext";

import SpaceCard from "./SpaceCard";
import SpaceLegend from "./SpaceLegend";

export default function SpacesSection() {
  const { spaces } =
    useDashboard();

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <div className="panel-title-wrap">
            <span
              className="material-symbols-outlined"
              style={{
                color:
                  "var(--secondary)",
              }}
            >
              meeting_room
            </span>

            <h2 className="panel-title">
              Supervisión de
              Espacios STEM &
              Cubículos de Estudio
            </h2>
          </div>

          <p className="panel-subtitle">
            Monitoreo de telemetría
            y llaves electrónicas
            por recinto.
          </p>
        </div>

        <SpaceLegend />
      </div>

      <div className="spaces-grid">
        {spaces.map(
          (space) => (
            <SpaceCard
              key={space.id}
              space={space}
            />
          )
        )}
      </div>
    </section>
  );
}