import type { Metadata } from "next";

const SITE_URL = "https://world-stadistics.vercel.app";
const SITE_NAME = "World Estadísticas";

interface DashboardMeta {
  title: string;
  description: string;
  path: string;
}

export function generateDashboardMetadata({
  title,
  description,
  path,
}: DashboardMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      type: "website",
    },
    alternates: {
      canonical: url,
    },
  };
}
