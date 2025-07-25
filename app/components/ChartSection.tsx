"use client";

import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import IndicatorChart from "./IndicatorChart";
import { getIndicatorPropertyByCode } from "@/lib/utils";

interface Props {
  country: string;
  selected: string | null;
  metrics: Record<string, { label: string; code: string; unit: string }>;
}

export default function ChartSection({ country, selected, metrics }: Props) {
  const [range, setRange] = useState<number>(5);
  const chartRef = useRef<HTMLDivElement>(null);

  const handleRangeChange = (value: string) => {
    setRange(Number(value));
  };
  useEffect(() => {
    if (selected && chartRef.current) {
      const timeout = setTimeout(() => {
        chartRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 800); // ⏳ Espera 1.5 segundos

      return () => clearTimeout(timeout); // Limpieza
    }
  }, [selected]);

  return (
    <div className="mt-8 space-y-6 w-10/12 mx-auto">
      {selected && (
        <div
          className="transition-opacity duration-500 ease-in-out opacity-100 animate-fade-in"
          key={selected + country + range} // fuerza rerender limpio
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Select onValueChange={handleRangeChange} value={String(range)}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Rango" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 años</SelectItem>
                <SelectItem value="10">10 años</SelectItem>
                <SelectItem value="15">15 años</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div ref={chartRef}>
            <IndicatorChart
              country={country}
              indicatorCode={selected}
              labelCode={getIndicatorPropertyByCode(metrics, selected, "label")}
              range={range}
            />
          </div>
        </div>
      )}

      {/* Debug opcional o integración futura */}
      {/* <pre>{JSON.stringify({ selected, range, country }, null, 2)}</pre> */}
    </div>
  );
}
