import DashboardTemplate from "@/app/components/DashboardTemplate";
import { DEMOGRAPHIC_INDICATORS } from "@/app/constants/constants";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import { Suspense } from "react";

const categorias = {
  dinamica: {
    label: "Dinámica poblacional",
    metrics: {
      natalidad: DEMOGRAPHIC_INDICATORS.natalidad,
      fertilidad: DEMOGRAPHIC_INDICATORS.fertilidad,
      migracion: DEMOGRAPHIC_INDICATORS.migracion,
      crecimiento: DEMOGRAPHIC_INDICATORS.crecimiento,
    },
  },
  estructura: {
    label: "Estructura etaria",
    metrics: {
      esperanzaVida: DEMOGRAPHIC_INDICATORS.esperanzaVida,
      adultosMayores: DEMOGRAPHIC_INDICATORS.adultosMayores,
      jovenes: DEMOGRAPHIC_INDICATORS.jovenes,
    },
  },
  urbanizacion: {
    label: "Urbanización y densidad",
    metrics: {
      poblacion: DEMOGRAPHIC_INDICATORS.poblacion,
      urbanos: DEMOGRAPHIC_INDICATORS.urbanos,
      densidad: DEMOGRAPHIC_INDICATORS.densidad,
    },
  },
};

const DemogDashboard = () => {
  return (
    <div className="p-6 space-y-6 animate-in fade-in slide-in-from-bottom h-screen">
      <h1 className="text-3xl font-bold">Demografía</h1>
      <p className="text-muted-foreground">Indicadores clave por país</p>

      <Tabs
        defaultValue="dinamica"
        className="space-y-6 flex items-center flex-col"
      >
        <TabsList>
          {Object.entries(categorias).map(([key, cat]) => (
            <TabsTrigger key={key} value={key}>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(categorias).map(([key, cat]) => (
          <TabsContent key={key} value={key}>
            <Suspense>
              <DashboardTemplate
                title={cat.label}
                description={`Explorá métricas de ${cat.label.toLowerCase()}`}
                metrics={cat.metrics}
              />
            </Suspense>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
export default DemogDashboard;
