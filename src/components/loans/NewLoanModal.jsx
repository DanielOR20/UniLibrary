import { useState } from "react";

import Modal from "../ui/Modal";

import {
  useDashboard,
} from "../../context/DashboardContext";

const initialForm = {
  cardNumber: "",
  code: "",
  loanType:
    "Circulación Regular (7 días)",
  branch:
    "Sede Central - Mostrador 1",
};

export default function NewLoanModal() {
  const {
    modalOpen,
    setModalOpen,
    addLoan,
  } = useDashboard();

  const [form, setForm] =
    useState(initialForm);

  const update = (
    field,
    value
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (
    event
  ) => {
    event.preventDefault();

    addLoan({
      student:
        "Nuevo usuario",

      cardNumber:
        form.cardNumber,

      resource:
        "Recurso registrado desde consola administrativa",

      collection:
        `${form.loanType} • ${form.branch}`,

      code:
        form.code,
    });

    setForm(initialForm);
  };

  return (
    <Modal
      open={modalOpen}
      onClose={() =>
        setModalOpen(false)
      }
      title="Registro Rápido de Préstamo"
      icon="assignment_add"
    >
      <form
        className="form"
        onSubmit={
          handleSubmit
        }
      >
        <div className="form-group">
          <label htmlFor="card-number">
            Carné Universitario o Documento
          </label>

          <input
            id="card-number"
            className="form-control"
            value={
              form.cardNumber
            }
            onChange={(event) =>
              update(
                "cardNumber",
                event.target.value
              )
            }
            placeholder="Ej: 2024-ING-8831"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="copy-code">
            Código de Barras / Cota del Ejemplar
          </label>

          <input
            id="copy-code"
            className="form-control"
            value={form.code}
            onChange={(event) =>
              update(
                "code",
                event.target.value
              )
            }
            placeholder="Escanee o ingrese cota MARC21..."
            required
          />
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="loan-type">
              Tipo de Préstamo
            </label>

            <select
              id="loan-type"
              className="form-control"
              value={
                form.loanType
              }
              onChange={(event) =>
                update(
                  "loanType",
                  event.target.value
                )
              }
            >
              <option>
                Circulación Regular (7 días)
              </option>

              <option>
                Préstamo en Sala (Mismo día)
              </option>

              <option>
                Docente Investigador (30 días)
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="branch">
              Sede de Entrega
            </label>

            <select
              id="branch"
              className="form-control"
              value={form.branch}
              onChange={(event) =>
                update(
                  "branch",
                  event.target.value
                )
              }
            >
              <option>
                Sede Central - Mostrador 1
              </option>

              <option>
                Biblioteca Ciencias Médicas
              </option>

              <option>
                Campus Tecnológico Norte
              </option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              setModalOpen(false)
            }
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Registrar Préstamo
          </button>
        </div>
      </form>
    </Modal>
  );
}