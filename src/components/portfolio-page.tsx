import { ArrowIcon, ExternalIcon, GitHubIcon, HackTheBoxIcon, LinkedInIcon, TryHackMeIcon } from "@/components/icons";
import { LanguageSwitch } from "@/components/language-switch";
import { SectionHeading } from "@/components/section-heading";
import * as english from "@/data/portfolio";
import * as vietnamese from "@/data/portfolio.vi";

type PortfolioPageProps = {
  locale: "en" | "vi";
};

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const content = locale === "vi" ? vietnamese : english;
  const { credentials, experience, practiceSignals, profile, projects, proofPoints, ui } = content;
  const pageUrl = locale === "vi" ? "https://vocongthanh.com/vi/" : "https://vocongthanh.com/";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    url: pageUrl,
    sameAs: [profile.linkedin, profile.github, profile.htb, profile.tryhackme],
    knowsAbout: ["QA automation", "Automation framework architecture", "API testing", "Web and mobile automation", "Authorized penetration testing", "Web and API security"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#main-content">{ui.skipLink}</a>
      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="#top" aria-label={ui.backToTopLabel}><span className="brand-mark" aria-hidden="true">VCT</span><span className="brand-name">{profile.name}</span></a>
          <nav aria-label={ui.navLabel}>{ui.navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
          <div className="header-actions">
            <LanguageSwitch href={ui.languageHref} label={ui.languageLabel} code={ui.languageCode} />
            <a className="header-contact" href={`mailto:${profile.email}`}>{ui.contactCta}</a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="availability"><span aria-hidden="true" /> {ui.basedIn} {profile.location}</p>
            <h1 id="hero-title">{ui.heroTitleBefore}<br />{ui.heroTitleBridge}<em>{ui.heroTitleAccent}</em></h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-summary">{ui.heroSummary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{ui.selectedWorkCta} <ArrowIcon /></a>
              <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
            </div>
          </div>
          <aside className="hero-panel" aria-label={ui.focusLabel}>
            <div className="panel-topline"><span>{ui.focusLabel}</span><span>01 / 02</span></div>
            <div className="focus-item focus-quality"><span className="focus-index">01</span><div><strong>{ui.qualityFocus}</strong><span>{ui.qualityFocusDetail}</span></div></div>
            <div className="focus-connector" aria-hidden="true"><span /><i>{ui.sharedContext}</i><span /></div>
            <div className="focus-item focus-security"><span className="focus-index">02</span><div><strong>{ui.securityFocus}</strong><span>{ui.securityFocusDetail}</span></div></div>
            <p className="panel-note">{ui.focusNote}</p>
          </aside>
        </section>

        <section className="proof-grid" aria-label={ui.proofLabel}>
          {proofPoints.map((point) => <div className="proof-item" key={point.label}><strong>{point.value}</strong><span>{point.label}</span></div>)}
        </section>

        <section className="section theme-light" id="experience">
          <SectionHeading index="01" {...ui.sections.experience} />
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className={`experience-item ${item.current ? "" : "is-compact"}`} key={`${item.company}-${item.period}`}>
                <div className="experience-rail"><span>{String(index + 1).padStart(2, "0")}</span><i className={item.current ? "is-current" : ""} aria-hidden="true" /></div>
                <div className="experience-identity"><p>{item.period}</p><h3>{item.company}</h3><strong>{item.role}</strong></div>
                <div className="experience-detail">
                  <p>{item.summary}</p>
                  {item.current ? <><ul>{item.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading index="02" {...ui.sections.projects} />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.tone}`} key={project.title}>
                <div className="project-topline"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.category}</span></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${ui.repositoryLabelPrefix} ${project.title} ${ui.repositoryLabelSuffix}`}>{ui.repositoryCta} <ExternalIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section practice-section theme-light" id="practice">
          <SectionHeading index="03" {...ui.sections.practice} />
          <div className="practice-grid">
            {practiceSignals.map((signal) => <article key={signal.title}><strong>{signal.value}</strong><h3>{signal.title}</h3><p>{signal.detail}</p></article>)}
          </div>
          <div className="practice-profile-links" aria-label={ui.practiceProfilesLabel}>
            <a className="practice-profile-link is-primary" href={profile.htb} target="_blank" rel="noreferrer">{ui.htbProfileCta} <ExternalIcon /></a>
            <a className="practice-profile-link" href={profile.tryhackme} target="_blank" rel="noreferrer">{ui.tryHackMeProfileCta} <ExternalIcon /></a>
          </div>
        </section>

        <section className="section theme-light credentials-section" id="credentials">
          <SectionHeading index="04" {...ui.sections.credentials} />
          <div className="credential-layout">
            <div className="credential-list">
              {credentials.map((credential) => (
                <article className={`credential-card ${credential.tone}`} key={credential.title}>
                  <div className="credential-meta"><span>{credential.type}</span><strong>{credential.status}</strong></div>
                  <h3>{credential.title}</h3><p className="credential-issuer">{credential.issuer}</p><p className="credential-description">{credential.description}</p>
                  {credential.issuedDate ? <p className="credential-issued"><span>{ui.issuedDateLabel}</span>{credential.issuedDate}</p> : null}
                  {credential.href ? <a className="credential-link" href={credential.href} target="_blank" rel="noreferrer">{ui.publicProfileCta} <ExternalIcon /></a> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-kicker"><span>05</span><span>{ui.contactEyebrow}</span></p>
          <h2>{ui.contactTitle}</h2>
          <p>{ui.contactDescription}</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>{ui.conversationCta} <ArrowIcon /></a>
            <div className="social-links" aria-label={ui.socialLinksLabel}>
              <a className="social-github" href={profile.github} target="_blank" rel="noreferrer" aria-label={profile.githubLabel} title={profile.githubLabel}><GitHubIcon /></a>
              <a className="social-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={profile.linkedinLabel} title={profile.linkedinLabel}><LinkedInIcon /></a>
              <a className="social-htb" href={profile.htb} target="_blank" rel="noreferrer" aria-label={profile.htbLabel} title={profile.htbLabel}><HackTheBoxIcon /></a>
              <a className="social-tryhackme" href={profile.tryhackme} target="_blank" rel="noreferrer" aria-label={profile.tryhackmeLabel} title={profile.tryhackmeLabel}><TryHackMeIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} {profile.name}</span><span>{ui.footerFocus}</span><a href="#top">{ui.backToTop}</a></footer>
    </>
  );
}
