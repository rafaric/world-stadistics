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

  const formatter = new Intl.NumberFormat("es-AR");

  // Large USD values → compact
  if (unit === "USD" && Math.abs(value) >= 1_000_000_000) {
    const billones = value / 1_000_000_000;
    return `$${billones.toLocaleString("es-AR", { maximumFractionDigits: 1 })} mil M ${unit}`;
  }

  if (unit === "USD" && Math.abs(value) >= 1_000_000) {
    const millones = value / 1_000_000;
    return `$${millones.toLocaleString("es-AR", { maximumFractionDigits: 0 })} M ${unit}`;
  }

  // Percentages → 1 decimal
  if (unit === "%" || unit.includes("%")) {
    return `${value.toLocaleString("es-AR", { maximumFractionDigits: 1 })}${unit.startsWith("%") ? "" : ` ${unit}`}`;
  }

  // Large numbers → compact
  if (Math.abs(value) >= 1_000_000_000) {
    const billones = value / 1_000_000_000;
    return `${billones.toLocaleString("es-AR", { maximumFractionDigits: 2 })} mil M`;
  }

  if (Math.abs(value) >= 1_000_000) {
    const millones = value / 1_000_000;
    return `${millones.toLocaleString("es-AR", { maximumFractionDigits: 1 })} M`;
  }

  // Default → formatted with unit
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
