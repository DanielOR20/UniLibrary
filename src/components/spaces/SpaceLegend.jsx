export default function SpaceLegend() {
  return (
    <div className="legend">
      <span className="legend-item">
        <span
          className="legend-dot"
          style={{
            background:
              "var(--secondary)",
          }}
        />

        Disponible
      </span>

      <span className="legend-item">
        <span
          className="legend-dot"
          style={{
            background:
              "var(--tertiary)",
          }}
        />

        Ocupado
      </span>

      <span className="legend-item">
        <span
          className="legend-dot"
          style={{
            background:
              "var(--muted)",
          }}
        />

        Mantenimiento
      </span>
    </div>
  );
}