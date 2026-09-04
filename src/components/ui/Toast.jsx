import {
  useDashboard,
} from "../../context/DashboardContext";

export default function Toast() {
  const { toast } =
    useDashboard();

  if (!toast) {
    return null;
  }

  return (
    <div
      className="toast"
      role="status"
      aria-live="polite"
    >
      <span className="material-symbols-outlined">
        {toast.icon}
      </span>

      <span>
        {toast.message}
      </span>
    </div>
  );
}