export default function Modal({
  open,
  onClose,
  title,
  icon = "info",
  children,
}) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">
            <span className="material-symbols-outlined">
              {icon}
            </span>

            {title}
          </h2>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined">
              close
            </span>
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}