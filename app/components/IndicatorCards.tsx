"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatValue } from "@/lib/utils";
import { countries } from "../constants/constants";

interface Indicator {
  label: string;
  unit: string;
  code: string;
}

interface Props {
  country: string;
  metrics: Record<string, Indicator>;
  values: Record<string, { value: number | null; year: string | null }>;
  selected: string | null;
  onSelect: (code: string | null) => void;
}
const IndicatorCards = ({
  metrics,
  country,
  selected,
  onSelect,
  values,
}: Props) => {
  const flag =
    country === "AR"
      ? "bg-[url('/images/ArgFlag.jpg')]"
      : country === "BR"
      ? "bg-[url('/images/BraFlag.jpg')]"
      : country === "US"
      ? "bg-[url('/images/USAFlag.jpg')]"
      : country === "FR"
      ? "bg-[url('/images/FraFlag.jpg')]"
      : "";

  return (
    <div className={`p-6 space-y-6rounded-2xl relative`}>
      <div
        className={`absolute ${flag} w-full h-full opacity-40 -z-10 rounded-2xl bg-cover`}
      />
      <h2 className="text-2xl font-bold py-2 text-center text-gray-800">
        Indicadores de {countries.find((c) => c.code === country)?.name}
      </h2>
      <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(metrics)?.map(([key, { label, unit, code }]) => {
          const value = values[key] ?? null;

          return (
            <Card
              key={key}
              role="button"
              tabIndex={0}
              aria-pressed={selected === code}
              aria-label={`Ver gráfico de ${label}`}
              onClick={() => {
                onSelect(selected === code ? null : code);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(selected === code ? null : code);
                }
              }}
              className={`flex flex-col justify-between cursor-pointer transition hover:brightness-120 hover:sepia-50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                selected === code ? "border border-blue-500 shadow-md" : ""
              } `}
            >
              <CardHeader>
                <CardTitle>{label}</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl font-bold flex flex-col flex-1 justify-between">
                <div>
                  {value !== null ? (
                    <p className="text-2xl font-bold">
                      {formatValue(value.value, unit)}
                    </p>
                  ) : (
                    <>
                      <Skeleton className="h-9 w-24" />
                      <span className="text-gray-400 text-[10px] text-end">
                        Sin datos disponibles
                      </span>
                    </>
                  )}
                </div>

                <div className="w-full flex justify-end mt-auto">
                  <span className="text-gray-400 text-[10px] text-end">
                    {value?.value === null
                      ? "Sin datos disponibles"
                      : `Último dato disponible: ${value?.year}`}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default IndicatorCards;
