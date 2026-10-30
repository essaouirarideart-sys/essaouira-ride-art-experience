import { Cormorant_Garamond, Inter } from "next/font/google";

export const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const fontClassName = `${display.variable} ${sans.variable}`;
