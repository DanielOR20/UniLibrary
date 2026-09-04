export default function Button({
  children,
  variant = "primary",
  icon,
  ...props
}) {
  return (
    <button
      className={`btn btn-${variant}`}
      {...props}
    >
      {icon && (
        <span className="material-symbols-outlined">
          {icon}
        </span>
      )}

      {children}
    </button>
  );
}