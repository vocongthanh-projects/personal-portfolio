import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Thanh Vo — QA Automation Engineer & Penetration Tester";
const description = "Portfolio of Thanh Vo: automation framework architecture and authorized penetration testing across web, API, and mobile systems.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vocongthanh.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Thanh Vo Portfolio",
  authors: [{ name: "Thanh Vo" }],
  creator: "Thanh Vo",
  keywords: ["QA Automation Engineer", "Penetration Tester", "Playwright", "Appium", "API Testing", "Web Security", "Mobile Security"],
  openGraph: { type: "website", url: siteUrl, title, description, images: [{ url: "og.svg", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["og.svg"] },
  icons: { icon: "icon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "dark", themeColor: "#0b0f14" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
