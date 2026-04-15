import type { Metadata } from "next";
import "./globals.css";
import Navigator from "./components/Navigator";

const SITE_URL = "https://world-stadistics.vercel.app";
const SITE_NAME = "World Estadísticas";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Indicadores del Banco Mundial`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Explorá indicadores mundiales del Banco Mundial: demografía, economía, medio ambiente, educación, tecnología y comercio. Datos actualizados por país con visualizaciones interactivas.",
  keywords: [
    "estadísticas mundiales",
    "banco mundial",
    "indicadores económicos",
    "demografía",
    "PIB",
    "inflación",
    "desempleo",
    "medio ambiente",
    "educación",
    "tecnología",
    "comercio exterior",
    "datos por país",
  ],
  authors: [{ name: "Rafael Strongoli" }],
  creator: "Rafael Strongoli",
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Explorá indicadores mundiales del Banco Mundial con visualizaciones interactivas por país y categoría.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Explorá indicadores mundiales del Banco Mundial con visualizaciones interactivas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-blue-200 h-fit">
        <Navigator />
        {children}
      </body>
    </html>
  );
}
