"use client";
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
import { useEffect, useState } from "react";
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

  const data = {
    labels: history.map((d) => d.date),
    datasets: [
      {
        label: labelCode,
        data: history.map((d) => d.value),
        borderColor: "#3b82f6",
        fill: false,
        tension: 0.2,
      },
    ],
  };

  if (loading)
    return (
      <div className="mt-6 flex justify-center">
        <Skeleton className="h-64 w-full max-w-3xl" />
      </div>
    );
  return (
    <div className="mt-8 space-y-4 animate-fade-in">
      <h3 className="text-xl font-semibold text-center">
        {labelCode} – {country}
      </h3>
      <Line data={data} />
    </div>
  );
};
export default IndicatorChart;
