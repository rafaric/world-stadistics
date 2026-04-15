"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
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
import { Entry, getIndicatorHistory } from "@/lib/getIndicatorHistory";
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

interface Props {
  country: string;
  indicatorCode: string;
  labelCode?: string;
  range: number;
}

function getThemeColors() {
  if (typeof window === "undefined")
    return { primary: "#3b82f6", textColor: "#6b7280", borderColor: "#e5e7eb" };
  const style = getComputedStyle(document.documentElement);
  return {
    primary: style.getPropertyValue("--primary").trim() || "#3b82f6",
    textColor: style.getPropertyValue("--muted-foreground").trim() || "#6b7280",
    borderColor: style.getPropertyValue("--border").trim() || "#e5e7eb",
  };
}

const IndicatorChart = ({
  country,
  indicatorCode,
  range,
  labelCode,
}: Props) => {
  const [history, setHistory] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getIndicatorHistory(indicatorCode, country, range)
      .then((data) => setHistory(data))
      .finally(() => setLoading(false));
  }, [country, indicatorCode, range]);

  const chartData = useMemo(() => {
    const { primary } = getThemeColors();
    return {
      labels: history.map((d) => d.date),
      datasets: [
        {
          label: labelCode,
          data: history.map((d) => d.value),
          borderColor: `oklch(${primary})`,
          backgroundColor: `oklch(${primary} / 0.1)`,
          fill: true,
          tension: 0.2,
          pointRadius: 3,
        },
      ],
    };
  }, [history, labelCode]);

  const options = useMemo(() => {
    const { textColor, borderColor } = getThemeColors();
    return {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: textColor },
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
  }, []);

  if (loading)
    return (
      <div className="mt-6 flex justify-center">
        <Skeleton className="h-64 w-full max-w-3xl" />
      </div>
    );

  return (
    <div className="mt-8 space-y-4 animate-fade-in">
      <h3 className="text-xl font-semibold text-center text-foreground">
        {labelCode} – {country}
      </h3>
      <Line data={chartData} options={options} />
    </div>
  );
};
export default IndicatorChart;
