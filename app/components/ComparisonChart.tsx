"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getIndicatorHistoryForCountries, Entry } from "@/lib/getIndicatorHistory";
import { countries } from "@/app/constants/constants";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const COLORS = [
  "#3b82f6", // blue
  "#ef4444", // red
  "#22c55e", // green
  "#f59e0b", // amber
  "#8b5cf6", // violet
  "#ec4899", // pink
];

interface Props {
  indicatorCode: string;
  label: string;
  range: number;
}

export default function ComparisonChart({
  indicatorCode,
  label,
  range,
}: Props) {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([
    "AR",
    "BR",
    "US",
  ]);
  const [data, setData] = useState<Map<string, Entry[]>>(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getIndicatorHistoryForCountries(indicatorCode, selectedCountries, range)
      .then((result) => setData(result))
      .finally(() => setLoading(false));
  }, [indicatorCode, selectedCountries, range]);

  const toggleCountry = (code: string) => {
    setSelectedCountries((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const availableCountries = countries.filter((c) => c.code !== "all");

  if (loading) {
    return <Skeleton className="h-72 w-full" />;
  }

  const allDates = new Set<string>();
  data.forEach((entries) => entries.forEach((e) => allDates.add(e.date)));
  const labels = Array.from(allDates).sort();

  const datasets = selectedCountries.map((code, i) => {
    const entries = data.get(code) ?? [];
    const entryMap = new Map(entries.map((e) => [e.date, e.value]));

    return {
      label: countries.find((c) => c.code === code)?.name ?? code,
      data: labels.map((date) => entryMap.get(date) ?? null),
      borderColor: COLORS[i % COLORS.length],
      backgroundColor: COLORS[i % COLORS.length],
      tension: 0.2,
      fill: false,
      pointRadius: 3,
    };
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 justify-center">
        {availableCountries.map((country) => (
          <Button
            key={country.code}
            variant={selectedCountries.includes(country.code) ? "default" : "outline"}
            size="sm"
            onClick={() => toggleCountry(country.code)}
            className="text-xs"
          >
            {country.name}
          </Button>
        ))}
      </div>

      {datasets.length > 0 ? (
        <Line
          data={{ labels, datasets }}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" as const },
              title: {
                display: true,
                text: `Comparación: ${label}`,
              },
            },
            scales: {
              y: { beginAtZero: false },
            },
          }}
        />
      ) : (
        <p className="text-center text-muted-foreground py-8">
          Seleccioná al menos un país para comparar
        </p>
      )}
    </div>
  );
}
