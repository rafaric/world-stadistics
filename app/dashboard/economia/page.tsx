import DashboardTemplate from "@/app/components/DashboardTemplate";
import { ECONOMIC_INDICATORS } from "@/app/constants/constants";
import { Suspense } from "react";

const EconomiaDashboard = () => {
  return (
    <Suspense>
      <DashboardTemplate
        title="Economía"
        description="Explorá indicadores económicos clave por país"
        metrics={ECONOMIC_INDICATORS}
      />
    </Suspense>
  );
};
export default EconomiaDashboard;
