"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
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

const CHART_COLORS_LIGHT = ["#2563eb", "#dc2626", "#16a34a", "#d97706", "#7c3aed", "#db2777"];
const CHART_COLORS_DARK = ["#60a5fa", "#f87171", "#4ade80", "#fbbf24", "#a78bfa", "#f472b6"];

function getThemeColors() {
  if (typeof window === "undefined")
    return { textColor: "#4b5563", borderColor: "rgba(0,0,0,0.08)", colors: CHART_COLORS_LIGHT };
  const isDark = document.documentElement.classList.contains("dark");
  return {
    textColor: isDark ? "#9ca3af" : "#4b5563",
    borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
    colors: isDark ? CHART_COLORS_DARK : CHART_COLORS_LIGHT,
  };
}

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

  const toggleCountry = useCallback((code: string) => {
    setSelectedCountries((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  }, []);

  const allDates = useMemo(() => {
    const dates = new Set<string>();
    data.forEach((entries) => entries.forEach((e) => dates.add(e.date)));
    return Array.from(dates).sort();
  }, [data]);

  const chartData = useMemo(() => {
    const { colors } = getThemeColors();
    const datasets = selectedCountries.map((code, i) => {
      const entries = data.get(code) ?? [];
      const entryMap = new Map(entries.map((e) => [e.date, e.value]));

      return {
        label: countries.find((c) => c.code === code)?.name ?? code,
        data: allDates.map((date) => entryMap.get(date) ?? null),
        borderColor: colors[i % colors.length],
        backgroundColor: colors[i % colors.length],
        tension: 0.2,
        fill: false,
        pointRadius: 3,
      };
    });

    return { labels: allDates, datasets };
  }, [data, selectedCountries, allDates]);

  const options = useMemo(() => {
    const { textColor, borderColor } = getThemeColors();
    return {
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
          labels: { color: textColor },
        },
        title: {
          display: true,
          text: `Comparación: ${label}`,
          color: textColor,
        },
      },
      scales: {
        x: {
          ticks: { color: textColor },
          grid: { color: borderColor },
        },
        y: {
          ticks: { color: textColor },
          grid: { color: borderColor },
          beginAtZero: false,
        },
      },
    };
  }, [label]);

  const availableCountries = countries;

  if (loading) {
    return <Skeleton className="h-72 w-full" />;
  }

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

      {selectedCountries.length > 0 ? (
        <Line data={chartData} options={options} />
      ) : (
        <p className="text-center text-muted-foreground py-8">
          Seleccioná al menos un país para comparar
        </p>
      )}
    </div>
  );
}
