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
export const formatValue = (value: number | null, unit: string) => {
  if (value === null) return null;

  if (unit === "USD") {
    const millones = value / 1_000_000;
    return `${millones.toLocaleString(undefined, {
      maximumFractionDigits: 0,
    })} M ${unit}`;
  }

  return `${value.toLocaleString()} ${unit}`;
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
