"use client";

import DashboardTemplate from "@/app/components/DashboardTemplate";
import { DEMOGRAPHIC_INDICATORS } from "@/app/constants/constants";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import { Suspense } from "react";
import { motion } from "framer-motion";

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
    <div className="p-6 space-y-6 h-screen">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold"
      >
        Demografía
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
};
export default DemogDashboard;
