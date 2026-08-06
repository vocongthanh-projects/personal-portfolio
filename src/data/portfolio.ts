export const profile = {
  name: "Thanh Vo",
  role: "QA Automation Engineer & Penetration Tester",
  email: "vocongthanh21022000@gmail.com",
  github: "https://github.com/vocongthanh247",
  githubLabel: "github.com/vocongthanh247",
  linkedin: "https://www.linkedin.com/in/thanh-vo-56785b2b0/",
  linkedinLabel: "linkedin.com/in/thanh-vo-56785b2b0",
  htb: "https://profile.hackthebox.com/profile/019f2344-16b3-700f-be3a-9af139dfee51",
  htbLabel: "Hack The Box profile",
  location: "Vietnam",
} as const;

export const proofPoints = [
  { value: "05", label: "Public engineering repositories" },
  { value: "131", label: "Verification tests across public projects" },
  { value: "03", label: "Automation surfaces: API, web, and mobile" },
  { value: "CPTS", label: "Candidate — exam preparation in progress" },
] as const;

export const experience = [
  {
    company: "GTEL OTS",
    period: "July 2024 — Present",
    role: "QA Automation Engineer · Penetration Testing",
    summary: "Engineering quality and security across enterprise web, API, Android, and iOS systems.",
    contributions: [
      "Designed reusable automation foundations and product-level suites across API, browser, Android, and iOS.",
      "Improved CI execution through parallel distribution, aggregated reporting, and actionable failure evidence.",
      "Performed authorized web, API, and mobile security assessments with reproducible findings and remediation verification.",
      "Automated specialized geospatial, GPS, route, map-rendering, and high-volume data validation workflows.",
    ],
    tags: ["Automation Architecture", "Enterprise QA", "Application Security", "CI/CD"],
    current: true,
  },
  {
    company: "Nexon",
    period: "March 2024 — May 2024",
    role: "Manual QA Tester",
    summary: "Built a practical foundation in product quality through hands-on manual testing and defect communication.",
    contributions: [
      "Executed functional, regression, and exploratory testing against product behavior and requirements.",
      "Documented reproducible defects with clear steps, evidence, and expected-versus-actual results.",
      "Collaborated with the delivery team to validate fixes and support release confidence.",
    ],
    tags: ["Manual Testing", "Regression Testing", "Exploratory Testing", "Defect Reporting"],
    current: false,
  },
] as const;

export const caseStudies = [
  {
    index: "01",
    eyebrow: "Quality architecture",
    title: "Reusable automation across three delivery surfaces",
    summary: "Designed domain-neutral foundations for API, browser, Android, and iOS testing without embedding product workflows in framework code.",
    contribution: [
      "Configuration-driven execution and environment validation",
      "Dynamic locator strategies with clear diagnostic failures",
      "Isolated parallel runs with evidence and report generation",
    ],
    tags: ["REST Assured", "Playwright", "Appium", "Java", "CI/CD"],
    tone: "quality",
  },
  {
    index: "02",
    eyebrow: "Authorized security testing",
    title: "Enterprise web, API, and mobile assessments",
    summary: "Mapped application attack surfaces, tested authorization and business logic, built focused validation scripts, and documented reproducible evidence for engineering teams.",
    contribution: [
      "Authentication, JWT, SSO, IDOR/BOLA, RBAC, and workflow testing",
      "Client-side, API, mobile, MQTT, and infrastructure analysis",
      "Technical reporting with impact, evidence, and remediation guidance",
    ],
    tags: ["Burp Suite", "OWASP", "Python", "Nmap", "Mobile"],
    tone: "security",
  },
  {
    index: "03",
    eyebrow: "Specialized quality engineering",
    title: "Geospatial and high-volume data validation",
    summary: "Automated route, coordinate, GPS, GeoJSON, map-rendering, and bulk dataset checks across APIs, browsers, and reporting workflows.",
    contribution: [
      "Cross-system comparison of location and route data",
      "Browser rendering and network-response verification",
      "Excel-driven processing with traceable result evidence",
    ],
    tags: ["GeoJSON", "JTS", "Playwright", "Apache POI", "Maps"],
    tone: "quality",
  },
] as const;

export const capabilityGroups = [
  {
    number: "01",
    title: "Quality Engineering",
    description: "Reliable automation systems that stay reusable when products, environments, and teams change.",
    items: [
      "Automation framework architecture",
      "API contract and workflow testing",
      "Playwright browser automation",
      "Appium for Android and iOS",
      "Dynamic locator and component design",
      "Parallel CI and failure diagnostics",
      "Data and geospatial validation",
    ],
    tone: "quality",
  },
  {
    number: "02",
    title: "Offensive Security",
    description: "Authorized, evidence-led security testing focused on exploitable behavior and useful remediation.",
    items: [
      "Web and API penetration testing",
      "Mobile application assessment",
      "Authentication and authorization",
      "Business-logic vulnerability testing",
      "Network enumeration and traffic analysis",
      "Source and client-side analysis",
      "Finding validation and reporting",
    ],
    tone: "security",
  },
] as const;

export const projects = [
  {
    title: "API Framework",
    category: "Quality Engineering",
    description: "A reusable REST API automation foundation with secure configuration, request specifications, authentication lifecycle, validation, and reporting.",
    tags: ["Java", "REST Assured", "TestNG"],
    href: "https://github.com/vocongthanh247/api-framework",
  },
  {
    title: "Playwright Framework",
    category: "Quality Engineering",
    description: "A domain-neutral browser automation framework with logical locators, component scope, isolated contexts, and failure evidence.",
    tags: ["Java", "Playwright", "Cucumber"],
    href: "https://github.com/vocongthanh247/playwright-framework",
  },
  {
    title: "Appium Framework",
    category: "Quality Engineering",
    description: "A cross-platform mobile test architecture with Android and iOS adapters, dynamic selectors, device configuration, and lifecycle control.",
    tags: ["Java", "Appium", "Android / iOS"],
    href: "https://github.com/vocongthanh247/appium-framework",
  },
  {
    title: "Burp Safe Agent",
    category: "Security Engineering",
    description: "Safety-aware automation for authorized Burp workflows with explicit scope gates, mutation controls, audit trails, and redaction.",
    tags: ["Python", "Burp Suite", "MCP"],
    href: "https://github.com/vocongthanh247/burp-safe-agent",
  },
  {
    title: "VulnRadar",
    category: "Security Engineering",
    description: "A local vulnerability intelligence workflow combining NVD, CISA KEV, CVSS, and EPSS signals for practical prioritization.",
    tags: ["Python", "SQLite", "CISA KEV"],
    href: "https://github.com/vocongthanh247/vulnradar",
  },
] as const;

export const practiceSignals = [
  { value: "55", title: "Structured topic notes", detail: "Across hands-on TryHackMe learning paths" },
  { value: "26", title: "Documented exercises", detail: "Custom tooling, Juice Shop, and privilege escalation" },
  { value: "08", title: "HTB challenges", detail: "Web, reversing, hardware, and satellite categories" },
  { value: "54", title: "Network documents", detail: "From packet flow and routing to TLS and LAN attacks" },
] as const;

export const credentials = [
  {
    type: "Certificate",
    title: "Software Testing",
    issuer: "FPT Software Academy",
    status: "Completed",
    description: "Foundational training in software testing, test design, execution, defect reporting, and quality assurance practices.",
    tone: "quality",
    href: null,
  },
  {
    type: "Certification journey",
    title: "HTB CPTS",
    issuer: "Hack The Box Academy",
    status: "In progress",
    description: "Preparing for the Certified Penetration Testing Specialist exam through structured study, labs, methodology, and authorized assessment work.",
    tone: "security",
    href: profile.htb,
  },
] as const;

export const recognition = {
  type: "Internal recognition",
  title: "Outstanding Employee",
  period: "First Half of 2026",
  issuer: "GTEL OTS",
  description: "Recognized internally for outstanding contribution during the first half of 2026.",
} as const;

export const principles = [
  "Make failures explain themselves.",
  "Keep framework code independent from product code.",
  "Use automation to scale judgment, not replace it.",
  "Treat scope, evidence, and reporting as part of security testing.",
] as const;
