import PageHeading from "../Components/Ui/PageHeading";
import SettingsSection from "../Components/Settings/SettingsSection";

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