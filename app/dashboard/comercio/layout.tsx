import type { Metadata } from "next";
import { generateDashboardMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateDashboardMetadata({
  title: "Comercio — Exportaciones, Importaciones y Balanza",
  description:
    "Explorá datos de comercio exterior: exportaciones, importaciones, balanza comercial y apertura económica por país.",
  path: "/dashboard/comercio",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
