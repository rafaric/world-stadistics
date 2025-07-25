"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { TECHNOLOGY_INDICATORS } from "@/app/constants/constants";
import DashboardTemplate from "@/app/components/DashboardTemplate";
import { Suspense } from "react";

const categorias = {
  conectividad: {
    label: "Conectividad",
    metrics: {
      internet: TECHNOLOGY_INDICATORS.internet,
      celulares: TECHNOLOGY_INDICATORS.celulares,
      electricidad: TECHNOLOGY_INDICATORS.electricidad,
    },
  },
  innovacion: {
    label: "Innovación",
    metrics: {
      investigacion: TECHNOLOGY_INDICATORS.investigacion,
      patentes: TECHNOLOGY_INDICATORS.patentes,
    },
  },
  produccion: {
    label: "Producción tecnológica",
    metrics: {
      exportacionesTech: TECHNOLOGY_INDICATORS.exportacionesTech,
      energia: TECHNOLOGY_INDICATORS.energia,
    },
  },
};

export default function TecnologiaDashboard() {
  return (
    <div className="p-6 space-y-6 animate-in fade-in slide-in-from-bottom">
      <h1 className="text-3xl font-bold">Tecnología</h1>
      <p className="text-muted-foreground">Indicadores clave por país</p>

      <Tabs defaultValue="conectividad" className="space-y-6 flex items-center">
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
}
