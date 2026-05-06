import Link from 'next/link'
import '@/styles/about-page.css'

const STATS = [
  { num: '500+', label: 'Projects delivered for teams worldwide' },
  { num: '45+', label: 'Dedicated engineers and consultants' },
  { num: '12+', label: 'Years building reliable products together' },
  { num: '180+', label: 'Clients who trust us with production workloads' },
]

const QUOTES = [
  {
    text: 'We ship when we say we will—and when something breaks, we explain it in plain English instead of hiding behind tickets.',
    author: 'Engineering lead',
    role: 'Product delivery',
  },
  {
    text: 'Clients hear one steady voice from discovery through hosting handoff. That continuity saves weeks on every release.',
    author: 'Client success',
    role: 'Delivery coordination',
  },
]

export default function AboutUsPage() {
  return (
    <div className="about-page">
      <header className="about-hero">
        <div className="about-hero-inner">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-sub">
            Apimstec is committed to excellent, honest, high-quality technology services—from software and apps to hosting—so
            your team can focus on customers instead of firefighting infrastructure.
          </p>
        </div>
      </header>

      <div className="about-shell">
        <section className="about-split" aria-labelledby="about-mission-heading">
          <div>
            <p className="about-kicker">About us</p>
            <h2 id="about-mission-heading" className="about-section-title">
              Our mission
            </h2>
            <p className="about-section-body">
              Our mission is to deliver dependable IT solutions—software, mobile experiences, Unity titles when they fit, and
              calm hosting—that help businesses grow in the digital era. We care about clarity, integrity, and follow-through,
              and we want to be the partner you call when scope, risk, or uptime actually matters.
            </p>
          </div>
          <div className="about-mosaic" aria-hidden>
            <div className="about-mosaic-tall" />
            <div className="about-mosaic-cell" />
            <div className="about-mosaic-cell about-mosaic-cell--accent" />
          </div>
        </section>

        <section className="about-vision" aria-labelledby="about-vision-heading">
          <p className="about-kicker">Looking ahead</p>
          <h2 id="about-vision-heading" className="about-section-title">
            Our vision
          </h2>
          <p className="about-section-body">
            We envision teams everywhere launching products with confidence—backed by partners who document decisions, respect
            budgets, and keep hosting control panels like Plesk understandable for operators who are not full-time sysadmins.
            Apimstec grows by helping clients ship, measure, and iterate without drowning in jargon.
          </p>
        </section>
      </div>

      <section className="about-stats-band" aria-labelledby="about-values-heading">
        <div className="about-shell">
          <p className="about-stats-band-kicker">What drives us</p>
          <h2 id="about-values-heading" className="about-stats-band-title">
            Core values
          </h2>
          <div className="about-stats-split">
            <div>
              <p className="about-stats-copy-kicker">Through delivery data</p>
              <h3 className="about-stats-copy-title">Measuring our success</h3>
              <p className="about-stats-copy-body">
                We judge wins by client satisfaction, predictable releases, and hosting uptime your stakeholders can verify—not
                vanity slides. Every engagement ends with a readable recap so finance and ops know what shipped and what comes
                next.
              </p>
            </div>
            <div className="about-stats-grid">
              {STATS.map((s) => (
                <div key={s.label} className="about-stat-card">
                  <span className="about-stat-num">{s.num}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-video" aria-label="Company introduction video placeholder">
        <div className="about-video-frame">
          <button type="button" className="about-video-play" aria-label="Play introduction video (coming soon)">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </section>

      <section className="about-testimonials about-shell" aria-labelledby="about-team-voices-heading">
        <p className="about-testimonials-kicker">Our team</p>
        <h2 id="about-team-voices-heading" className="about-testimonials-title">
          What our team says
        </h2>
        <div className="about-testimonials-layout">
          <p className="about-testimonials-lead">
            These voices reflect how we collaborate internally—clear ownership, respectful debate, and accountability to clients.
            No jargon committees, just builders who like shipping.
          </p>
          <div className="about-quote-stack">
            {QUOTES.map((q) => (
              <blockquote key={q.author} className="about-quote-card">
                <div className="about-quote-mark" aria-hidden>
                  “
                </div>
                <p className="about-quote-text">{q.text}</p>
                <footer>
                  <cite className="about-quote-author">{q.author}</cite>
                  <div className="about-quote-role">{q.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta-banner" aria-labelledby="about-cta-heading">
        <h2 id="about-cta-heading" className="about-cta-banner-title">
          How can we help you?
        </h2>
        <p className="about-cta-banner-sub">
          Tell us about your product, hosting footprint, or deadlines—we reply with practical options and one suggested next step.
        </p>
        <Link href="/contact" className="about-cta-banner-btn">
          Get in touch
        </Link>
      </section>
    </div>
  )
}
