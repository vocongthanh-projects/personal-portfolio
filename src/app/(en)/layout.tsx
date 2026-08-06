import type { Viewport } from "next";
import type { ReactNode } from "react";
import { createSiteMetadata } from "@/lib/site-metadata";
import "../globals.css";

export const metadata = createSiteMetadata("en");
export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "dark", themeColor: "#0b0f14" };

export default function EnglishLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
