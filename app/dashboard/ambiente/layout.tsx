import type { Metadata } from "next";
import { generateDashboardMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateDashboardMetadata({
  title: "Medio Ambiente — Emisiones, Energía y Recursos",
  description:
    "Explorá datos ambientales: emisiones de CO₂, energía renovable, agua, saneamiento y áreas protegidas por país.",
  path: "/dashboard/ambiente",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
