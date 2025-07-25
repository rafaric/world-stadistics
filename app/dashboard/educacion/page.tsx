"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DashboardTemplate from "@/app/components/DashboardTemplate";
import { EDUCATION_INDICATORS } from "@/app/constants/constants";
import { Suspense } from "react";

const categorias = {
  educacionBasica: {
    label: "📚 Educación Básica",
    metrics: {
      escolaridadPrimaria: EDUCATION_INDICATORS.escolaridadPrimaria,
      escolaridadSecundaria: EDUCATION_INDICATORS.escolaridadSecundaria,
    },
  },
  educacionSuperior: {
    label: "🎓 Educación Superior",
    metrics: {
      escolaridadTerciaria: EDUCATION_INDICATORS.escolaridadTerciaria,
      graduacionTerciaria: EDUCATION_INDICATORS.graduacionTerciaria,
      gastoPorAlumnoTerciario: EDUCATION_INDICATORS.gastoPorAlumnoTerciario,
      proporcionMujeresTerciario:
        EDUCATION_INDICATORS.proporcionMujeresTerciario,
    },
  },

  alfabetizacionYGasto: {
    label: "🧠 Alfabetización y Gasto",
    metrics: {
      alfabetizacionAdultos: EDUCATION_INDICATORS.alfabetizacionAdultos,
      gastoEducacion: EDUCATION_INDICATORS.gastoEducacion,
    },
  },
};

export default function EducacionDashboard() {
  return (
    <div className="p-6 space-y-6 animate-in fade-in slide-in-from-bottom">
      <h1 className="text-3xl font-bold">Educación</h1>
      <p className="text-muted-foreground">Indicadores clave por país</p>

      <Tabs
        defaultValue="educacionBasica"
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
