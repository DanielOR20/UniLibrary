import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import { loans as initialLoans } from "../data/loansData";
import { spaces as initialSpaces } from "../data/spacesData";

const DashboardContext = createContext(null);

export function DashboardProvider({ children }) {
  const [loans, setLoans] = useState(initialLoans);

  const [spaces, setSpaces] = useState(initialSpaces);

  const [toast, setToast] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  const showToast = (
    message,
    icon = "check_circle"
  ) => {
    setToast({
      message,
      icon,
    });

    window.clearTimeout(showToast.timer);

    showToast.timer = window.setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const approveLoan = (id) => {
    setLoans((current) =>
      current.map((loan) =>
        loan.id === id
          ? {
              ...loan,
              status: "listo",
              statusLabel: "Listo Recojo",
            }
          : loan
      )
    );

    showToast(
      "Préstamo aprobado y ejemplar asignado.",
      "check_circle"
    );
  };

  const rejectLoan = (id) => {
    setLoans((current) =>
      current.filter((loan) => loan.id !== id)
    );

    showToast(
      "Solicitud rechazada y retirada de la cola.",
      "cancel"
    );
  };

  const deliverLoan = (id) => {
    setLoans((current) =>
      current.filter((loan) => loan.id !== id)
    );

    showToast(
      "Entrega física confirmada correctamente.",
      "done_all"
    );
  };

  const addLoan = (loan) => {
    setLoans((current) => [
      {
        ...loan,
        id: Date.now(),
        status: "pendiente",
        statusLabel: "Pendiente",
        request: "Ahora",
      },

      ...current,
    ]);

    setModalOpen(false);

    showToast(
      "Préstamo formalizado exitosamente. Comprobante digital enviado.",
      "done_all"
    );
  };

  const updateSpace = (id, status) => {
    setSpaces((current) =>
      current.map((space) =>
        space.id === id
          ? {
              ...space,
              status,
            }
          : space
      )
    );
  };

  const releaseSpace = (id) => {
    const space = spaces.find(
      (item) => item.id === id
    );

    if (!space) return;

    updateSpace(id, "disponible");

    showToast(
      `Recinto ${space.name} marcado como LIBRE en telemetría SIBI.`,
      "check_circle"
    );
  };

  const assignSpace = (id) => {
    const space = spaces.find(
      (item) => item.id === id
    );

    if (!space) return;

    updateSpace(id, "ocupado");

    showToast(
      `Recinto ${space.name} reservado y baliza activada.`,
      "key"
    );
  };

  const setMaintenance = (id) => {
    const space = spaces.find(
      (item) => item.id === id
    );

    if (!space) return;

    updateSpace(id, "mantenimiento");

    showToast(
      `Orden de bloqueo preventivo emitida para ${space.name}.`,
      "engineering"
    );
  };

  const enableSpace = (id) => {
    const space = spaces.find(
      (item) => item.id === id
    );

    if (!space) return;

    updateSpace(id, "disponible");

    showToast(
      `Recinto ${space.name} habilitado tras servicio técnico.`,
      "verified"
    );
  };

  const value = useMemo(
    () => ({
      loans,
      spaces,
      toast,
      modalOpen,

      setModalOpen,

      showToast,

      approveLoan,
      rejectLoan,
      deliverLoan,
      addLoan,

      releaseSpace,
      assignSpace,
      setMaintenance,
      enableSpace,
    }),
    [
      loans,
      spaces,
      toast,
      modalOpen,
    ]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error(
      "useDashboard debe utilizarse dentro de DashboardProvider."
    );
  }

  return context;
}