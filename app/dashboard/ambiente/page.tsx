"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import DashboardTemplate from "@/app/components/DashboardTemplate";
import { ENVIRONMENT_INDICATORS } from "@/app/constants/constants";
import { Suspense } from "react";
import { motion } from "framer-motion";

const categorias = {
  emisionesYContaminacion: {
    label: "🌬️ Emisiones y Contaminación",
    metrics: {
      emisionesCO2: ENVIRONMENT_INDICATORS.emisionesCO2,
      contaminacionPM25: ENVIRONMENT_INDICATORS.contaminacionPM25,
    },
  },
  energiaYProduccion: {
    label: "🔋 Energía y Producción",
    metrics: {
      energiaRenovable: ENVIRONMENT_INDICATORS.energiaRenovable,
      produccionRenovable: ENVIRONMENT_INDICATORS.produccionRenovable,
      usoEnergia: ENVIRONMENT_INDICATORS.usoEnergia,
    },
  },
  aguaYSaneamiento: {
    label: "💧 Agua y Saneamiento",
    metrics: {
      accesoAgua: ENVIRONMENT_INDICATORS.accesoAgua,
      accesoSaneamiento: ENVIRONMENT_INDICATORS.accesoSaneamiento,
      extraccionAgua: ENVIRONMENT_INDICATORS.extraccionAgua,
    },
  },
  recursosNaturalesYTierra: {
    label: "🌳 Recursos Naturales y Territorio",
    metrics: {
      coberturaForestal: ENVIRONMENT_INDICATORS.coberturaForestal,
      areasProtegidas: ENVIRONMENT_INDICATORS.areasProtegidas,
    },
  },
};

export default function AmbienteDashboard() {
  return (
    <div className="p-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold"
      >
        Medio Ambiente
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-muted-foreground"
      >
        Indicadores clave por país
      </motion.p>

      <Tabs
        defaultValue="emisionesYContaminacion"
        className="space-y-6 flex items-center"
      >
        <TabsList>
          {Object.entries(categorias).map(([key, cat]) => (
            <TabsTrigger key={key} value={key}>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(categorias).map(([key, cat]) => (
          <TabsContent key={key} value={key} className="w-full">
            <Suspense>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <DashboardTemplate
                  title={cat.label}
                  description={`Explorá métricas de ${cat.label.toLowerCase()}`}
                  metrics={cat.metrics}
                />
              </motion.div>
            </Suspense>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
