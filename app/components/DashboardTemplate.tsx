"use client";

import { getIndicatorValue } from "@/lib/getIndicatorValues";
import { useEffect, useState } from "react";
import CountrySelector from "./CountrySelector";
import IndicatorCards from "./IndicatorCards";
import ChartSection from "./ChartSection";
import { useSearchParams } from "next/navigation";
import ScrollToTopButton from "./ScrollToTopButton";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  description: string;
  metrics: Record<string, { label: string; code: string; unit: string }>;
  defaultCountry?: string;
  initialValues?: Record<string, number | null>;
}
const DashboardTemplate = ({
  title,
  description,
  metrics,
  defaultCountry = "AR",
}: Props) => {
  const [country, setCountry] = useState(defaultCountry);
  const [selectedIndicator, setSelectedIndicator] = useState<string | null>(
    null
  );
  const searchParams = useSearchParams();
  const countryParam = searchParams.get("country") ?? defaultCountry;
  const [values, setValues] = useState<
    Record<string, { value: number | null; year: string | null }>
  >({});

  useEffect(() => {
    setCountry(countryParam);

    const fetchValues = async () => {
      const entries = await Promise.all(
        Object.entries(metrics).map(async ([key, { code }]) => {
          const { value, year } = await getIndicatorValue(countryParam, code);
          return [key, { value, year }];
        })
      );

      setValues(Object.fromEntries(entries));
    };

    fetchValues();
  }, [countryParam, metrics]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 space-y-6 relative h-fit"
    >
      <div className="flex justify-between items-center">
        <header>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </header>
        <CountrySelector selected={country} onChange={setCountry} />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={country}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <IndicatorCards
            country={country}
            metrics={metrics}
            selected={selectedIndicator}
            onSelect={setSelectedIndicator}
            values={values ?? {}}
          />
          <ChartSection
            selected={selectedIndicator}
            country={country}
            metrics={metrics}
          />
        </motion.div>
      </AnimatePresence>
      <div className="sticky flex justify-end w-full bottom-10 right-0">
        <ScrollToTopButton />
      </div>
    </motion.div>
  );
};
export default DashboardTemplate;
