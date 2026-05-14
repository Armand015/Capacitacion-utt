import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capacitación Digital UTT",
  description:
    "Plataforma institucional de capacitación digital para el personal de la Universidad Tecnológica de Tijuana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
