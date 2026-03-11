import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GIVE Interactuar – API Docs",
  description: "Documentación interactiva de la API REST de GIVE Interactuar, construida con OpenAPI 3.0 y Swagger UI.",
  keywords: ["GIVE", "Interactuar", "API", "REST", "OpenAPI", "Swagger", "Documentación"],
  openGraph: {
    title: "GIVE Interactuar – API Docs",
    description: "Documentación interactiva de la API REST de GIVE Interactuar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
