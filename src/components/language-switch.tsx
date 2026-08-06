"use client";

import type { MouseEvent } from "react";
import { useRouter } from "next/navigation";

type LanguageSwitchProps = {
  href: string;
  label: string;
  code: string;
};

export function LanguageSwitch({ href, label, code }: LanguageSwitchProps) {
  const router = useRouter();

  function preserveSection(event: MouseEvent<HTMLAnchorElement>) {
    if (!window.location.hash) return;
    event.preventDefault();
    router.push(`${href}${window.location.hash}`);
  }

  return <a className="language-switch" href={href} hrefLang={code.toLowerCase()} aria-label={label} onClick={preserveSection}>{code}</a>;
}
