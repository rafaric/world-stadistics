import type { Metadata } from "next";
import { generateDashboardMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateDashboardMetadata({
  title: "Tecnología — Conectividad, Innovación y Producción",
  description:
    "Explorá datos tecnológicos: uso de internet, suscripciones móviles, I+D, patentes y acceso a electricidad por país.",
  path: "/dashboard/tecnologia",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
