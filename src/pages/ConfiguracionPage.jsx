import PageHeading from "../components/ui/PageHeading";
import SettingsSection from "../components/settings/SettingsSection";

export default function ConfiguracionPage() {
  return (
    <>
      <PageHeading
        eyebrow="SIBI v2.4 • Sistema"
        title="Configuración del Sistema"
        description="Datos institucionales, políticas de circulación, integraciones técnicas y seguridad de la plataforma."
      />

      <SettingsSection />
    </>
  );
}