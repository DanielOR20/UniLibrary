import { metrics } from "../../data/dashboardData";

import MetricCard from "./MetricCard";

export default function MetricGrid() {
  return (
    <section
      className="metrics-grid"
      aria-label="Indicadores principales"
    >
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          metric={metric}
        />
      ))}
    </section>
  );
}