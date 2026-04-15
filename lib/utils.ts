import { countries } from "@/app/constants/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getCountryNameByCode(code: string): string | undefined {
  const country = countries.find((c) => c.code === code);
  return country?.name;
}
export const formatValue = (value: number | null, unit: string): string => {
  if (value === null) return "Sin datos";

  const formatter = new Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 1,
  });

  // ── USD / currency ──
  if (unit === "USD") {
    if (Math.abs(value) >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toLocaleString("es-AR", { maximumFractionDigits: 1 })} mil M`;
    }
    if (Math.abs(value) >= 1_000_000) {
      return `$${(value / 1_000_000).toLocaleString("es-AR", { maximumFractionDigits: 0 })} M`;
    }
    return `$${formatter.format(value)}`;
  }

  // ── Percentages ──
  if (unit === "%") {
    return `${value.toLocaleString("es-AR", { maximumFractionDigits: 1 })}%`;
  }
  if (unit.includes("%")) {
    return `${value.toLocaleString("es-AR", { maximumFractionDigits: 1 })}% ${unit.replace(/%/, "").trim()}`.trim();
  }

  // ── Large numbers with unit ──
  if (Math.abs(value) >= 1_000_000_000) {
    const compact = (value / 1_000_000_000).toLocaleString("es-AR", { maximumFractionDigits: 2 });
    return `${compact} mil M ${unit}`.trim();
  }

  if (Math.abs(value) >= 1_000_000) {
    const compact = (value / 1_000_000).toLocaleString("es-AR", { maximumFractionDigits: 1 });
    return `${compact} M ${unit}`.trim();
  }

  // ── Default ──
  return `${formatter.format(value)} ${unit}`.trim();
};

export function getIndicatorPropertyByCode(
  indicators: Record<string, { label: string; unit: string; code: string }>,
  code: string,
  property: keyof { label: string; unit: string; code: string } = "label"
): string | undefined {
  const indicator = Object.values(indicators).find(
    (item) => item.code === code
  );
  return indicator ? indicator[property] : undefined;
}
