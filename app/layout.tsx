import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ToastProvider } from "@/components/providers/toast-provider";
import { fontBody, fontHeading } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Adria Security Systems | Sustavi video nadzora za nekretnine",
  description:
    "Adria Security Systems — premium smart property security company. Projektiranje i ugradnja video nadzora i monitoring sustava za vile, kratkoročni najam, hotele i poslovne portfelje u Hrvatskoj."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hr" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className={`${fontBody.className} min-h-screen bg-white text-slate-950 antialiased`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
