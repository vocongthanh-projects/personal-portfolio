import { ArrowIcon, ExternalIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { capabilityGroups, caseStudies, credentials, experience, practiceSignals, principles, profile, projects, proofPoints, recognition } from "@/data/portfolio";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    url: "https://vocongthanh.com",
    sameAs: [profile.linkedin, profile.github, profile.htb],
    knowsAbout: [
      "QA automation",
      "Automation framework architecture",
      "API testing",
      "Web and mobile automation",
      "Authorized penetration testing",
      "Web and API security",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Thanh Vo, back to top"><span className="brand-mark" aria-hidden="true">TV</span><span className="brand-name">Thanh Vo</span></a>
        <nav aria-label="Primary navigation"><a href="#experience">Experience</a><a href="#work">Work</a><a href="#credentials">Credentials</a><a href="#projects">Projects</a></nav>
        <a className="header-contact" href={`mailto:${profile.email}`}>Let&apos;s talk</a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="availability"><span aria-hidden="true" /> Based in {profile.location}</p>
            <h1 id="hero-title">Quality engineering,<br />tested with an <em><span>offensive</span> <span>mindset.</span></em></h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-summary">I build reliable automation systems and perform authorized security testing across web, API, and mobile applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View selected work <ArrowIcon /></a>
              <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Engineering focus">
            <div className="panel-topline"><span>Engineering focus</span><span>01 / 02</span></div>
            <div className="focus-item focus-quality"><span className="focus-index">01</span><div><strong>Quality Engineering</strong><span>Architecture · Automation · Evidence</span></div></div>
            <div className="focus-connector" aria-hidden="true"><span /><i>shared context</i><span /></div>
            <div className="focus-item focus-security"><span className="focus-index">02</span><div><strong>Offensive Security</strong><span>Discovery · Validation · Reporting</span></div></div>
            <p className="panel-note">One engineering mindset: understand the system, test its assumptions, and make the result actionable.</p>
          </aside>
        </section>

        <section className="proof-grid" aria-label="Verified portfolio facts">
          {proofPoints.map((point) => <div className="proof-item" key={point.label}><strong>{point.value}</strong><span>{point.label}</span></div>)}
        </section>

        <section className="section theme-light" id="experience">
          <SectionHeading index="01" eyebrow="Experience" title="From product testing to quality and security engineering." description="A concise career timeline focused on responsibilities, engineering contribution, and progression." />
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={`${item.company}-${item.period}`}>
                <div className="experience-rail"><span>{String(index + 1).padStart(2, "0")}</span><i className={item.current ? "is-current" : ""} aria-hidden="true" /></div>
                <div className="experience-identity"><p>{item.period}</p><h3>{item.company}</h3><strong>{item.role}</strong></div>
                <div className="experience-detail"><p>{item.summary}</p><ul>{item.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section theme-light" id="work">
          <SectionHeading index="02" eyebrow="Selected work" title="Evidence before adjectives." description="A focused view of the systems, assessments, and specialized workflows that best represent how I work." />
          <div className="case-list">
            {caseStudies.map((study) => (
              <article className={`case-card ${study.tone}`} key={study.index}>
                <div className="case-meta"><span>{study.index}</span><span>{study.eyebrow}</span></div>
                <div className="case-main"><h3>{study.title}</h3><p>{study.summary}</p></div>
                <ul className="case-contribution">{study.contribution.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="tag-list" aria-label="Technologies">{study.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="capabilities">
          <SectionHeading index="03" eyebrow="Capabilities" title="Two disciplines. One practical standard." description="Automation verifies expected behavior at scale. Penetration testing examines what happens when the system is used in unexpected ways." />
          <div className="capability-grid">
            {capabilityGroups.map((group) => (
              <article className={`capability-card ${group.tone}`} key={group.title}>
                <span className="capability-number">{group.number}</span><h3>{group.title}</h3><p>{group.description}</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section practice-section theme-light" id="practice">
          <SectionHeading index="04" eyebrow="Hands-on practice" title="Learning that leaves evidence." description="Structured notes, repeatable labs, custom utilities, and engagement work support an ongoing HTB CPTS preparation path." />
          <div className="practice-layout">
            <div className="practice-grid">
              {practiceSignals.map((signal) => <article key={signal.title}><strong>{signal.value}</strong><h3>{signal.title}</h3><p>{signal.detail}</p></article>)}
            </div>
            <aside className="candidate-card">
              <div className="candidate-status"><span aria-hidden="true" /> In progress</div>
              <p className="candidate-label">Certification journey</p><h3>HTB CPTS Candidate</h3>
              <p>Preparing for the Certified Penetration Testing Specialist exam through structured study, hands-on labs, methodology development, and authorized assessment work.</p>
              <div className="candidate-topics"><span>Recon & enumeration</span><span>Web & API exploitation</span><span>Network fundamentals</span><span>Privilege escalation</span><span>Reporting</span></div>
            </aside>
          </div>
        </section>

        <section className="section theme-light credentials-section" id="credentials">
          <SectionHeading index="05" eyebrow="Credentials & recognition" title="Progress, backed by practice." description="Formal training, an active security certification path, and professional recognition that support the work shown above." />
          <div className="credential-layout">
            <div className="credential-list">
              {credentials.map((credential) => (
                <article className={`credential-card ${credential.tone}`} key={credential.title}>
                  <div className="credential-meta"><span>{credential.type}</span><strong>{credential.status}</strong></div>
                  <h3>{credential.title}</h3><p className="credential-issuer">{credential.issuer}</p><p>{credential.description}</p>
                  {credential.href ? <a className="credential-link" href={credential.href} target="_blank" rel="noreferrer">View public profile <ExternalIcon /></a> : null}
                </article>
              ))}
            </div>
            <aside className="recognition-card">
              <div className="recognition-mark" aria-hidden="true">★</div>
              <p>{recognition.type}</p><h3>{recognition.title}</h3><strong>{recognition.period}</strong><span>{recognition.issuer}</span><small>{recognition.description}</small>
            </aside>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading index="06" eyebrow="Open source" title="Public projects, built to be inspected." description="Five focused repositories demonstrate framework design, testability, safety controls, and technical documentation." />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.category}</span></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>View repository <ExternalIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section principles-section theme-light">
          <SectionHeading index="07" eyebrow="Working principles" title="What the work should do." />
          <ol className="principles-list">{principles.map((principle, index) => <li key={principle}><span>{String(index + 1).padStart(2, "0")}</span><strong>{principle}</strong></li>)}</ol>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-kicker"><span>08</span><span>Contact</span></p>
          <h2>Building quality—or testing its limits?</h2>
          <p>I am always interested in practical engineering conversations around automation architecture, application security, and the space where they meet.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowIcon /></a>
            <div className="contact-links">
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedinLabel} <ExternalIcon /></a>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">{profile.githubLabel} <ExternalIcon /></a>
              <a className="text-link" href={profile.htb} target="_blank" rel="noreferrer">{profile.htbLabel} <ExternalIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} {profile.name}</span><span>QA Automation · Penetration Testing</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
