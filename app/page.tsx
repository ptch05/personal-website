import Image from "next/image";
import ThemeToggle from "./theme-toggle";

const assetPath = (path: string) =>
  `${process.env.PAGES_BASE_PATH ?? ""}${path}`;

export default function Home() {
  return (
    <div className="exhibition-container">
      <header className="museum-header">
        <div>
          <h1 className="artist-name">Peiman Timaji</h1>
          <div className="exhibition-meta">
            Software engineering · Machine learning · London
          </div>
        </div>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="mailto:peimantimaji@yahoo.com">Email</a>
          <a href="https://github.com/ptch05" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/peiman-timaji-0999bb289"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <main>
        <section className="diptych" id="about">
          <div>
            <h2 className="plate-title">About</h2>
            <p className="justified-text">
              I&apos;m a software engineer moving into machine learning
              research. I completed my BSc in Computer Science at City St
              George&apos;s, University of London in August 2026 and start an
              MSc in Artificial Intelligence there in September 2026.
            </p>
            <p className="justified-text">
              My main interest is generative modelling for molecular design. My
              engineering work includes Protesyn&apos;s molecular-design
              platform, Lancy&apos;s commerce infrastructure, and City St
              George&apos;s Racing Team&apos;s telemetry system.
            </p>
          </div>

          <div className="art-frame">
            <div className="art-matte art-matte-natural">
              <Image
                src={assetPath("/me.jpeg")}
                alt="Portrait of Peiman Timaji"
                width={1163}
                height={1135}
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="art-image art-image-natural"
              />
            </div>
          </div>
        </section>

        <section className="plain-section" id="research">
          <h2 className="plate-title">Research interests</h2>
          <p className="justified-text">
            I&apos;m interested in generative models for proteins and peptides,
            especially models that learn from both sequence and 3D structure. I
            want to work on conditioning generation on biological properties,
            keeping outputs diverse, and deciding which candidates are plausible
            enough to test in the lab.
          </p>
        </section>

        <section className="manuscript-section" id="experience">
          <h2 className="plate-title">Experience</h2>

          <article className="ledger-entry branded-entry">
            <div className="brand-row">
              <div className="company-mark">
                <Image
                  src={assetPath("/protesyn.png")}
                  alt="Protesyn logo"
                  width={48}
                  height={48}
                  className="company-icon"
                />
              </div>
              <div className="ledger-heading-copy">
                <div className="ledger-header">
                  <h3 className="ledger-title">Software Engineer</h3>
                  <span className="ledger-date">Sep 2025 — May 2026</span>
                </div>
                <p className="ledger-deck">
                  Protesyn · Molecular-design startup
                </p>
              </div>
            </div>
            <p className="experience-summary">
              Protesyn was building an end-to-end workspace for AI-assisted
              molecular design. Researchers could set a design goal in chat, run
              scientific models, inspect candidates and their evidence, view
              molecular artefacts in 3D, and save proteins or peptides with
              their provenance.
            </p>
            <ul className="contribution-list">
              <li>
                Built the workflow between Studio, the Next.js product, and
                Origami, the scientific execution service. Design requests were
                validated, converted into recoverable jobs, routed to pinned
                model runtimes on Modal, and returned as structured results.
              </li>
              <li>
                Integrated OpenAI tool-calling with model runs while preserving
                streamed assistant turns, progress, partial results,
                cancellation, and recovery from interrupted jobs.
              </li>
              <li>
                Built Mol* inspection and the unified molecular Library for
                proteins and peptides, keeping native structures, visualisation
                files, confidence data, chemistry, evidence, and provenance as
                distinct assets.
              </li>
              <li>
                Added Vitest, Playwright, GitHub Actions, structured logging,
                and Sentry across chat and generation flows, maintaining more
                than 90% test coverage.
              </li>
              <li>
                Built an internal Next.js and Tiptap CMS for drafting and
                publishing content to the public site.
              </li>
            </ul>
          </article>

          <article className="ledger-entry branded-entry">
            <div className="brand-row">
              <div className="company-mark">
                <Image
                  src={assetPath("/lancy.png")}
                  alt="Lancy logo"
                  width={48}
                  height={48}
                  className="company-icon"
                />
              </div>
              <div className="ledger-heading-copy">
                <div className="ledger-header">
                  <h3 className="ledger-title">Software Engineer</h3>
                  <span className="ledger-date">Jan 2025 — Aug 2025</span>
                </div>
                <p className="ledger-deck">
                  Lancy · Multi-tenant commerce platform
                </p>
              </div>
            </div>
            <p className="experience-summary">
              Lancy was building the infrastructure merchants needed to launch
              and run online storefronts: product and pricing management,
              configurable payment pages, vouchers, customer accounts, payments,
              notifications, and live analytics.
            </p>
            <ul className="contribution-list">
              <li>
                Worked across containerised TypeScript and Node.js services for
                accounts, products, vouchers, payments, storefronts, and email,
                deployed on AWS ECS behind API Gateway and documented with
                OpenAPI.
              </li>
              <li>
                Built Stripe payment flows that validated workspaces, products,
                prices, and vouchers before creating idempotent payment or setup
                intents.
              </li>
              <li>
                Designed an AWS SQS, Lambda, and Redis notification system that
                removed duplicate emails and reduced delivery time from 35
                seconds to 5.
              </li>
              <li>
                Developed a no-code Next.js storefront and payment-page builder,
                alongside Server-Sent Events analytics for revenue, customers,
                visitors, activity, and conversions.
              </li>
              <li>
                Reduced deployment cycles by 50% using GitLab CI and Docker
                layer caching, and added CloudWatch and Slack monitoring.
              </li>
            </ul>
          </article>
        </section>

        <section className="manuscript-section" id="team">
          <h2 className="plate-title">Formula Student</h2>
          <article className="ledger-entry branded-entry">
            <div className="brand-row">
              <div className="company-mark company-mark-csg">
                <Image
                  src={assetPath("/csg.jpg")}
                  alt="City St George's Racing Team logo"
                  width={907}
                  height={475}
                  className="company-icon"
                />
              </div>
              <div className="ledger-heading-copy">
                <div className="ledger-header">
                  <h3 className="ledger-title">Telemetry Platform</h3>
                  <span className="ledger-date">2025</span>
                </div>
                <p className="ledger-deck">
                  City St George&apos;s Racing Team · Formula Student
                </p>
              </div>
            </div>
            <ul className="contribution-list">
              <li>
                Built the team&apos;s React and FastAPI telemetry platform using
                typed REST and WebSocket interfaces, Pydantic validation, and
                JWT-protected session controls.
              </li>
              <li>
                Implemented live visualisation, session recording, downloads,
                and replay for simulated vehicle telemetry.
              </li>
              <li>
                Stored recordings with JSONL logs, PostgreSQL indexes, and
                S3-compatible object storage, with pytest and GitHub Actions
                covering the core workflows.
              </li>
            </ul>
          </article>
        </section>

        <section className="manuscript-section" id="education">
          <h2 className="plate-title">Education</h2>

          <article className="ledger-entry">
            <div className="ledger-heading-copy">
              <div className="ledger-header">
                <h3 className="ledger-title">MSc Artificial Intelligence</h3>
                <span className="ledger-date">Starting Sep 2026</span>
              </div>
              <p className="ledger-deck">
                City St George&apos;s, University of London
              </p>
            </div>
            <p className="justified-text">
              Planned focus: generative models for protein and peptide design.
            </p>
          </article>

          <article className="ledger-entry">
            <div className="ledger-heading-copy">
              <div className="ledger-header">
                <h3 className="ledger-title">BSc Computer Science</h3>
                <span className="ledger-date">Completed Aug 2026</span>
              </div>
              <p className="ledger-deck">
                City St George&apos;s, University of London
              </p>
            </div>
            <p className="justified-text">
              Led a Python bootcamp for the Data Science &amp; AI Society,
              teaching programming fundamentals, pandas, NumPy, and Matplotlib.
            </p>
            <p className="justified-text">
              Predicted to achieve a First-Class degree
            </p>
          </article>
        </section>

        <section className="artwork-section" id="art">
          <h2 className="plate-title">Art</h2>
          <div className="artwork-grid">
            <figure className="art-frame artwork-card artwork-st-pauls">
              <div className="art-matte art-matte-natural">
                <Image
                  src={assetPath("/st pauls.jpeg")}
                  alt="Architectural study of St Paul's Cathedral"
                  width={1058}
                  height={742}
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="art-image art-image-natural"
                />
              </div>
            </figure>

            <figure className="art-frame artwork-card artwork-waterfall">
              <div className="art-matte art-matte-natural">
                <Image
                  src={assetPath("/waterfall.jpeg")}
                  alt="Painting of a waterfall and rocky landscape"
                  width={2051}
                  height={2806}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="art-image art-image-natural"
                />
              </div>
            </figure>

            <figure className="art-frame artwork-card artwork-bus">
              <div className="art-matte art-matte-natural">
                <Image
                  src={assetPath("/bus.jpeg")}
                  alt="Mixed-media drawing of buses on Tottenham Court Road"
                  width={2945}
                  height={2523}
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="art-image art-image-natural"
                />
              </div>
            </figure>
          </div>
        </section>
      </main>
    </div>
  );
}
