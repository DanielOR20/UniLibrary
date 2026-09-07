export const reportMetrics = [
  {
    id: "generados",
    label: "Reportes Generados Hoy",
    value: "12",
    description: "8 PDF • 4 Excel uf exportados al buzón",
    icon: "description",
    tone: "primary",
    footer: "+3 vs día anterior",
    footerRight: "Automatización activa",
  },

  {
    id: "descargas",
    label: "Descargas de Proxies",
    value: "18.4k",
    description: "Accesos a IEEE, ScienceDirect y ACM",
    icon: "cloud_download",
    tone: "secondary",
    footer: "SLA 98.4% cumplido",
    footerRight: "Shiro Activo",
  },

  {
    id: "morosidad",
    label: "Multas y Moras Activas",
    value: "317",
    description: "Usuarios con adeudo en colecciones",
    icon: "account_balance_wallet",
    tone: "tertiary",
    footer: "$4,280.15 recaudado este mes",
    footerRight: "86 en segunda notificación",
  },

  {
    id: "aforo",
    label: "Ocupación Promedio Semanal",
    value: "72%",
    description: "420 concurrentes en 14 sedes",
    icon: "meeting_room",
    tone: "primary",
    footer: "Pico: 92% (jueves 14:00)",
    footerRight: "Tendencia estable",
  },
];

export const reports = [
  {
    id: 1,
    title: "Consolidado de Circulación",
    description:
      "Préstamos, devoluciones y reservas por sede y ventanilla.",
    icon: "swap_horizontal_circle",
    tone: "primary",
    formats: ["PDF", "Excel"],
  },

  {
    id: 2,
    title: "Aforo & Ocupación STEM",
    description:
      "Ocupación de laboratorios, salas VR y cubículos en tiempo real.",
    icon: "meeting_room",
    tone: "secondary",
    formats: ["PDF"],
  },

  {
    id: 3,
    title: "Cola de Mesa de Trámites",
    description:
      "Expedientes pendientes, tiempos de resolución y responsables.",
    icon: "inbox",
    tone: "tertiary",
    formats: ["PDF", "Excel"],
  },

  {
    id: 4,
    title: "Inventario y Catálogo MARC21",
    description:
      "Existencia, disponibilidad y altas/bajas del fondo bibliográfico.",
    icon: "menu_book",
    tone: "primary",
    formats: ["Excel", "PDF"],
  },

  {
    id: 5,
    title: "Usuarios, Carnés y Renovaciones",
    description:
      "Población activa por carrera, vencimientos y carnés emitidos.",
    icon: "badge",
    tone: "secondary",
    formats: ["Excel"],
  },

  {
    id: 6,
    title: "Multas y Moras por Usuario",
    description:
      "Detalle de adeudos, notificaciones enviadas y recaudación.",
    icon: "warning",
    tone: "tertiary",
    formats: ["PDF", "Excel"],
  },
];