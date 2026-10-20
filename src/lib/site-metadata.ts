import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vocongthanh.com";
const image = { url: "/og.svg", width: 1200, height: 630 };

export function createSiteMetadata(locale: "en" | "vi"): Metadata {
  const isVietnamese = locale === "vi";
  const title = isVietnamese
    ? "Võ Công Thành — Kỹ sư QA Automation & Chuyên viên kiểm thử xâm nhập"
    : "Vo Cong Thanh — QA Automation Engineer & Penetration Tester";
  const description = isVietnamese
    ? "Portfolio của Võ Công Thành về kiến trúc automation framework và kiểm thử xâm nhập được ủy quyền trên hệ thống web, API và mobile."
    : "Portfolio of Vo Cong Thanh: automation framework architecture and authorized penetration testing across web, API, and mobile systems.";
  const canonical = isVietnamese ? "/vi/" : "/";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: locale === "vi" ? "Portfolio Võ Công Thành" : "Vo Cong Thanh Portfolio",
    authors: [{ name: locale === "vi" ? "Võ Công Thành" : "Vo Cong Thanh" }],
    creator: locale === "vi" ? "Võ Công Thành" : "Vo Cong Thanh",
    keywords: ["Quality Engineer", "QA Automation Engineer", "Application Security", "API Security", "Playwright Java", "Playwright TypeScript", "Appium Android iOS", "API Testing", "RBAC Testing", "Web Security", "Mobile Security", "CI/CD"],
    alternates: {
      canonical,
      languages: { en: "/", vi: "/vi/", "x-default": "/" },
    },
    openGraph: {
      type: "profile",
      url: canonical,
      title,
      description,
      locale: isVietnamese ? "vi_VN" : "en_US",
      alternateLocale: [isVietnamese ? "en_US" : "vi_VN"],
      images: [{ ...image, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.svg"] },
    icons: { icon: "/icon.svg" },
  };
}
