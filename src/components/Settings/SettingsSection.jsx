import {
  useState,
} from "react";

import {
  useDashboard,
} from "../../context/DashboardContext";

export default function SettingsSection() {
  const {
    showToast,
  } = useDashboard();

  const [institution, setInstitution] =
    useState("UniLibrary — Sistema de Bibliotecas SIBI");

  const [sede, setSede] =
    useState("Campus Central & Red Remota (14 Sedes)");

  const [loanDays, setLoanDays] =
    useState("7");

  const [dailyFine, setDailyFine] =
    useState("1.50");

  const [sigb, setSigb] =
    useState(true);

  const [rfid, setRfid] =
    useState(true);

  const saveConfig = (
    message
  ) => {
    showToast(
      `Parámetros guardados: ${message}.`,
      "save"
    );
  };

  return (
    <>
      <section className="panel">
        <div className="panel-header">
          <div className="panel-title-wrap">
            <span
              className="material-symbols-outlined"
              style={{
                color:
                  "var(--primary)",
              }}
            >
              account_balance
            </span>

            <h2 className="panel-title">
              Datos Institucionales
            </h2>
          </div>
        </div>

        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            saveConfig(
              "datos institucionales"
            );
          }}
        >
          <div className="form-group">
            <label htmlFor="institution">
              Denominación del Sistema
            </label>

            <input
              id="institution"
              className="form-control"
              value={institution}
              onChange={(event) =>
                setInstitution(
                  event.target.value
                )
              }
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="sede">
                Sede Principal
              </label>

              <input
                id="sede"
                className="form-control"
                value={sede}
                onChange={(event) =>
                  setSede(
                    event.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="period">
                Período Académico
              </label>

              <select
                id="period"
                className="form-control"
                defaultValue="2024-II"
              >
                <option value="2024-I">
                  2024-I
                </option>

                <option value="2024-II">
                  2024-II
                </option>

                <option value="2025-I">
                  2025-I
                </option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Guardar Datos
            </button>
          </div>
        </form>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div className="panel-title-wrap">
            <span
              className="material-symbols-outlined"
              style={{
                color:
                  "var(--secondary)",
              }}
            >
              history_edu
            </span>

            <h2 className="panel-title">
              Parámetros de Circulación
            </h2>
          </div>
        </div>

        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            saveConfig(
              "políticas de circulación"
            );
          }}
        >
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="loan-days">
                Duración Estándar (días)
              </label>

              <input
                id="loan-days"
                type="number"
                min="1"
                className="form-control"
                value={loanDays}
                onChange={(event) =>
                  setLoanDays(
                    event.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="daily-fine">
                Multa Diaria por Mora (USD)
              </label>

              <input
                id="daily-fine"
                type="number"
                min="0"
                step="0.25"
                className="form-control"
                value={dailyFine}
                onChange={(event) =>
                  setDailyFine(
                    event.target.value
                  )
                }
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="max-copies">
                Máximo de Ejemplares por Usuario
              </label>

              <select
                id="max-copies"
                className="form-control"
                defaultValue="3"
              >
                <option value="2">
                  2
                </option>

                <option value="3">
                  3
                </option>

                <option value="5">
                  5
                </option>

                <option value="8">
                  8
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="reservation-window">
                Ventana de Reserva (horas)
              </label>

              <select
                id="reservation-window"
                className="form-control"
                defaultValue="24"
              >
                <option value="12">
                  12
                </option>

                <option value="24">
                  24
                </option>

                <option value="48">
                  48
                </option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Guardar Parámetros
            </button>
          </div>
        </form>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div className="panel-title-wrap">
            <span
              className="material-symbols-outlined"
              style={{
                color:
                  "var(--tertiary)",
              }}
            >
              hub
            </span>

            <h2 className="panel-title">
              Integraciones & Sensores
            </h2>
          </div>

          <span className="status-badge status-ready">
            Conectado
          </span>
        </div>

        <div className="integration-list">
          <div className="integration-row">
            <div>
              <div className="integration-name">
                SIGB Moodle / Koha
              </div>

              <p>
                Sincronización del
                catálogo y circulación
                académica.
              </p>
            </div>

            <button
              type="button"
              className={`small-btn ${
                sigb ? "btn-success" : ""
              }`}
              style={
                sigb
                  ? undefined
                  : {
                      background:
                        "var(--surface-high)",
                      color:
                        "var(--muted)",
                    }
              }
              onClick={() => {
                setSigb((value) =>
                  !value
                );

                showToast(
                  `Conexión SIGB ${
                    sigb
                      ? "desactivada"
                      : "activada"
                  }.`,
                  sigb
                    ? "link_off"
                    : "link"
                );
              }}
            >
              {sigb
                ? "Conectado"
                : "Desconectar"}
            </button>
          </div>

          <div className="integration-row">
            <div>
              <div className="integration-name">
                Gateway RFID Antirrobo
              </div>

              <p>
                Telemetría de puertas y
                llaveros electrónicos
                de recintos STEM.
              </p>
            </div>

            <button
              type="button"
              className={`small-btn ${
                rfid ? "btn-success" : ""
              }`}
              style={
                rfid
                  ? undefined
                  : {
                      background:
                        "var(--surface-high)",
                      color:
                        "var(--muted)",
                    }
              }
              onClick={() => {
                setRfid((value) =>
                  !value
                );

                showToast(
                  `Gateway RFID ${
                    rfid
                      ? "apagado"
                      : "encendido"
                  }.`,
                  rfid
                    ? "power_off"
                    : "power"
                );
              }}
            >
              {rfid
                ? "En línea"
                : "Apagar"}
            </button>
          </div>

          <div className="integration-row">
            <div>
              <div className="integration-name">
                Repositorio Digital OAI-PMH
              </div>

              <p>
                Intercambio de
                metadatos MARC21 con la
                Red Nacional.
              </p>
            </div>

            <button
              type="button"
              className="small-btn btn-success"
              onClick={() =>
                showToast(
                  "Sincronización OAI-PMH completada.",
                  "sync"
                )
              }
            >
              Sincronizar
            </button>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div className="panel-title-wrap">
            <span
              className="material-symbols-outlined"
              style={{
                color:
                  "var(--muted)",
              }}
            >
              security
            </span>

            <h2 className="panel-title">
              Seguridad & Sesión
            </h2>
          </div>
        </div>

        <div className="integration-list">
          <div className="integration-row">
            <div>
              <div className="integration-name">
                Administradora Activa
              </div>

              <p>
                Licda. Marcela Solís • Rol:
                Administradora de Sistema
              </p>
            </div>

            <button
              type="button"
              className="small-btn"
              style={{
                background:
                  "var(--surface-high)",
                color:
                  "var(--tertiary)",
              }}
              onClick={() =>
                showToast(
                  "Sesión de SSO renovada correctamente.",
                  "verified_user"
                )
              }
            >
              Renovar SSO
            </button>
          </div>

          <div className="integration-row">
            <div>
              <div className="integration-name">
                Auditoría de Cambios
              </div>

              <p>
                Bitácora de
                resolución y
                modificaciones
                habilitada.
              </p>
            </div>

            <span className="status-badge status-ready">
              EN VIVO
            </span>
          </div>
        </div>
      </section>
    </>
  );
}