import type { Metadata } from "next";
import { generateDashboardMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateDashboardMetadata({
  title: "Economía — Indicadores Económicos Mundiales",
  description:
    "Explorá datos económicos: PIB, inflación, desempleo e inversión extranjera por país.",
  path: "/dashboard/economia",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
