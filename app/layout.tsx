import type { Metadata } from "next";
import "./globals.css";
import Navigator from "./components/Navigator";

export const metadata: Metadata = {
  title: "Estadísticas Mundiales",
  description: "Creada por Rafael Strongoli",
  icons: {
    icon: "/logo.ico",
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
