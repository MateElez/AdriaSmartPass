import { Manrope, Space_Grotesk } from "next/font/google";

/** Heading font — var `--font-heading-loaded` na `<html>`. */
export const fontHeading = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-heading-loaded",
  display: "swap"
});

/** Body font — className na `<body>` + var `--font-body-loaded` na `<html>`. */
export const fontBody = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-loaded",
  display: "swap"
});
