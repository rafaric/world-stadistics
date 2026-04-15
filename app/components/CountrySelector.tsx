"use client";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { countries } from "../constants/constants";

import { useEffect } from "react";

interface Props {
  selected: string;
  onChange: (code: string) => void;
}

const CountrySelector = ({ selected, onChange }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("selectedCountry");
    const validCode = countries.some((c) => c.code === stored);
    if (stored && validCode) onChange(stored);
  }, [onChange]);

  const handleSelect = (code: string) => {
    localStorage.setItem("selectedCountry", code);
    onChange(code);
    router.push(`${pathname}?country=${code}`);
  };
  return (
    <Select value={selected} onValueChange={handleSelect}>
      <SelectTrigger className="w-[200px]" aria-label="Seleccionar país">
        <SelectValue placeholder="Selecciona un país" />
      </SelectTrigger>
      <SelectContent>
        {countries.map(({ code, name }) => (
          <SelectItem key={code} value={code} className="text-black">
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default CountrySelector;
