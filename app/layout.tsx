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
  title: "Adria SmartPass | Pametne brave i kontrola pristupa",
  description:
    "Pametne brave i kontrola pristupa za apartmane, kratkoročni najam, male hotele i poslovne prostore u Hrvatskoj."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fafc"
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
