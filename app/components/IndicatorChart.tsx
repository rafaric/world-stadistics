"use client";

import { useEffect, useState, useMemo } from "react";
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
    const isDark = document.documentElement.classList.contains("dark");
    const primary = isDark ? "#60a5fa" : "#2563eb";
    const bgFill = isDark ? "rgba(96,165,250,0.1)" : "rgba(37,99,235,0.1)";

    return {
      labels: history.map((d) => d.date),
      datasets: [
        {
          label: labelCode,
          data: history.map((d) => d.value),
          borderColor: primary,
          backgroundColor: bgFill,
          fill: true,
          tension: 0.2,
          pointRadius: 3,
          pointBackgroundColor: primary,
        },
      ],
    };
  }, [history, labelCode]);

  const options = useMemo(() => {
    const isDark = document.documentElement.classList.contains("dark");
    const textColor = isDark ? "#9ca3af" : "#4b5563";
    const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)";

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
          grid: { color: gridColor },
        },
        y: {
          ticks: { color: textColor },
          grid: { color: gridColor },
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
