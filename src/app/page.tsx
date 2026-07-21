import { ContactActions, EMAIL, GMAIL } from "@/components/ContactActions";
import { Logo, LogoMark } from "@/components/Logo";

const services = [
  {
    title: "AI consultation",
    body: "We help you cut through the noise — identify where AI creates value in your business, and where it does not.",
  },
  {
    title: "Integration",
    body: "We connect AI into the tools and workflows you already use, so new capability lands in day-to-day operations.",
  },
  {
    title: "Implementation",
    body: "From prototype to production: practical builds, clear handovers, and systems your team can actually run.",
  },
];

const outcomes = [
  "Clarity on what to build — and what to skip",
  "AI wired into real processes, not slide decks",
  "Partners who stay accountable from advice through delivery",
];

export default function Home() {
  return (
    <div className="bg-atmosphere relative min-h-full overflow-x-hidden bg-noise">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
          <a href="#top" className="text-lg text-foreground transition-opacity hover:opacity-80 sm:text-xl">
            <Logo />
          </a>
          <a
            href="#contact"
            className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase transition-colors hover:text-[#f0d084] sm:text-sm"
          >
            Contact
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-28 sm:px-8 sm:pb-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            aria-hidden="true"
          >
            <LogoMark className="absolute -right-[8%] top-[18%] h-[55vh] w-auto sm:h-[62vh]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="animate-mark mb-10 text-4xl text-foreground sm:mb-14 sm:text-5xl md:text-6xl lg:text-7xl">
              <Logo />
            </div>

            <h1 className="animate-rise font-display max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              AI consultation and integration that ships.
            </h1>

            <p className="animate-rise-delay-1 mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              We help organisations adopt AI with clear strategy, careful
              integration, and implementation that holds up in the real world.
            </p>

            <div className="animate-rise-delay-2 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-gold group inline-flex items-center gap-3 px-7 py-3.5 font-display text-sm font-semibold tracking-wide"
              >
                Get in touch
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#what-we-do"
                className="font-display text-sm font-medium tracking-wide text-muted transition-colors hover:text-accent"
              >
                What we do
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="slant-rule" />
        </div>

        <section id="what-we-do" className="px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              What we do
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              From AI ambition to working capability.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              JTLH LTD partners with businesses that want AI to do useful work —
              not generate more meetings. We advise, design the join between
              people and systems, then help you put it live.
            </p>

            <ul className="mt-16 space-y-0 border-t border-line">
              {services.map((service, index) => (
                <li
                  key={service.title}
                  className="grid gap-3 border-b border-line py-8 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-10 sm:py-10"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xs tracking-[0.16em] text-accent">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted sm:pt-1">
                    {service.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative px-6 py-20 sm:px-8 sm:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-line" />
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                How we help
              </p>
              <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                Built for businesses that need outcomes, not theatre.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Whether you are exploring your first AI use case or stitching
                models into existing products and operations, we keep the work
                grounded: scoped, measurable, and owned by your team when we
                leave.
              </p>
            </div>

            <ul className="flex flex-col justify-center gap-6">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-4 text-base leading-snug sm:text-lg">
                  <LogoMark className="mt-1 h-5 w-auto shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 px-6 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-6xl overflow-hidden border border-accent/40 bg-surface px-8 py-14 sm:px-14 sm:py-20">
            <div className="relative z-10">
              <LogoMark className="pointer-events-none absolute -right-6 -top-10 h-28 w-auto opacity-[0.18] sm:h-40" />
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Contact
              </p>
              <h2 className="font-display mt-4 max-w-xl text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
                Ready to talk about what AI can do for you?
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Tell us what you are trying to achieve. We will reply with a
                clear next step — no hard sell, no buzzword fog.
              </p>
              <ContactActions className="mt-10" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted">
            <Logo className="text-base text-foreground" />
            <p className="mt-3">AI consultation &amp; integration.</p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-muted sm:items-end">
            <a
              href={GMAIL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {EMAIL}
            </a>
            <p>© {new Date().getFullYear()} JTLH LTD</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
