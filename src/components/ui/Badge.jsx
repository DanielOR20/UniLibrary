export default function Badge({
  children,
  tone = "primary",
}) {
  return (
    <span
      className={`status-badge status-${tone}`}
    >
      {children}
    </span>
  );
}