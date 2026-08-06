import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vocongthanh.com";
const image = { url: "/og.svg", width: 1200, height: 630 };

export function createSiteMetadata(locale: "en" | "vi"): Metadata {
  const isVietnamese = locale === "vi";
  const title = isVietnamese
    ? "Thanh Vo — Kỹ sư QA Automation & Chuyên viên kiểm thử xâm nhập"
    : "Thanh Vo — QA Automation Engineer & Penetration Tester";
  const description = isVietnamese
    ? "Portfolio của Thanh Vo về kiến trúc automation framework và kiểm thử xâm nhập được ủy quyền trên hệ thống web, API và mobile."
    : "Portfolio of Thanh Vo: automation framework architecture and authorized penetration testing across web, API, and mobile systems.";
  const canonical = isVietnamese ? "/vi/" : "/";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: "Thanh Vo Portfolio",
    authors: [{ name: "Thanh Vo" }],
    creator: "Thanh Vo",
    keywords: ["QA Automation Engineer", "Penetration Tester", "Playwright", "Appium", "API Testing", "Web Security", "Mobile Security"],
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
