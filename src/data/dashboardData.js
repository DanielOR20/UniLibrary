export const metrics = [
  {
    id: "circulation",
    label: "Circulación Bibliográfica",
    value: "1,482",
    description: "Libros físicos en préstamo activo",
    icon: "book",
    tone: "primary",
    footer: "+12% vs mes anterior",
    footerRight: "18 hoy pendientes",
  },

  {
    id: "capacity",
    label: "Aforo Global & STEM",
    value: "78%",
    description: "420 concurrentes en 14 sedes",
    icon: "groups",
    tone: "secondary",
    footer: "Capacidad nominal: 540 plazas",
    footerRight: "120 libres",
  },

  {
    id: "procedures",
    label: "Mesa de Trámites",
    value: "14",
    description: "Expedientes en cola de dictamen",
    icon: "pending_actions",
    tone: "tertiary",
    footer: "6 Paz y Salvo • 8 Prórrogas",
    footerRight: "Revisar cola →",
  },

  {
    id: "digital",
    label: "Bases Digitales & Repositorios",
    value: "98.4%",
    description: "SLA IEEE, ScienceDirect & ACM",
    icon: "cloud_done",
    tone: "primary",
    footer: "Proxies Shiro Activos",
    footerRight: "18.4k accesos/mes",
  },
];

export const auditLog = [
  {
    id: 1,
    tone: "secondary",
    actor: "Bibliotecario R. Mendoza",
    action:
      "procesó devolución de 4 ejemplares físicos en Ventanilla 2.",
    meta: "10:14 AM • Estación WS-04",
  },

  {
    id: 2,
    tone: "primary",
    actor: "Coord. M. Solís",
    action:
      "renovó carné de posgrado a 2024-DOC-0021 con acceso extendido.",
    meta: "10:02 AM • Panel Central",
  },

  {
    id: 3,
    tone: "tertiary",
    actor: "Sistema Automático",
    action:
      "emitió recordatorio por SMS/Correo a 18 usuarios con entrega hoy.",
    meta: "09:45 AM • CronJob SIBI-Core",
  },

  {
    id: 4,
    tone: "muted",
    actor: "Soporte Red",
    action:
      "sincronizó catálogo de metadatos MARC21 con la Red Nacional Universitaria.",
    meta: "09:00 AM • Servidor OAI-PMH",
  },
];

export const alerts = [
  {
    id: 1,
    type: "critical",
    icon: "lock_person",
    title: "Carné Suspendido: Mora > 15 Días",
    description:
      "Julián Ortega (2022-ECO-0312) mantiene Atlas de Econometría con vencimiento al 12-Oct.",
    action: "Generar Multa Automática",
    secondary: "Contactar Decanatura",
  },

  {
    id: 2,
    type: "info",
    icon: "router",
    title: "Gateway RFID Puerta Norte Sede Central",
    description:
      "Pérdida de paquetes 1.2%. Antena 2 requiere calibración de sensibilidad antirrobo.",
    action:
      "Ingeniería Telemática asignada • Ticket #TEL-409",
  },
];