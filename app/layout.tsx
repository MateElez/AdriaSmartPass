import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import { ToastProvider } from "@/components/providers/toast-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-heading-loaded",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Adria Security Systems | Premium video nadzor i smart security za nekretnine",
  description:
    "Adria Security Systems — premium smart property security company. Projektiranje i ugradnja video nadzora i monitoring sustava za vile, kratkoročni najam, hotele i poslovne portfelje u Hrvatskoj."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e2e8f0"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hr" className={spaceGrotesk.variable}>
      <body className="antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
