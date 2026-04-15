import type { Metadata } from "next";
import { generateDashboardMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateDashboardMetadata({
  title: "Educación — Escolarización, Alfabetización y Gasto",
  description:
    "Explorá datos educativos: escolarización primaria/secundaria/terciaria, alfabetización y gasto público en educación por país.",
  path: "/dashboard/educacion",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
