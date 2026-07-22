import { ContactForm } from "@/components/ContactForm";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Logo, LogoMark } from "@/components/Logo";
import { SiteHeader } from "@/components/SiteHeader";

const EMAIL = "jtlhltd@gmail.com";

const snapshot = [
  { label: "Model", value: "Audit → Build → Run" },
  { label: "First system", value: "Live in 30 days" },
  { label: "Ownership", value: "We host & operate" },
  { label: "Fit", value: "Concrete bottlenecks" },
];

const capabilities = [
  "Knowledge & reporting",
  "Email automation",
  "CRM systems",
  "Workflow agents",
  "Internal tools",
  "Document processing",
];

const problems = [
  {
    title: "Work still runs on people",
    body: "The same emails, admin, follow-ups, and lookups get done by hand every day — so growth just means more firefighting.",
  },
  {
    title: "Tools don’t talk to each other",
    body: "CRM, inbox, docs, and spreadsheets each hold part of the truth. Staff become the integration layer.",
  },
  {
    title: "Off-the-shelf AI doesn’t fit",
    body: "Generic chatbots and plugins ignore how your business actually operates. DIY projects stall before they reach production.",
  },
];

const buildExamples = [
  {
    id: "knowledge",
    title: "Knowledge & reporting",
    body: "RAG systems over your docs, specs, and data so teams get accurate answers and reports without digging through folders.",
  },
  {
    id: "email",
    title: "Email & workflow automation",
    body: "Inbound handling, follow-ups, routing, and admin that currently eats hours — wired into the tools you already use.",
  },
  {
    id: "crm",
    title: "CRM & internal tools",
    body: "Custom CRMs, AI on top of your existing CRM, booking flows, dashboards, and ops apps built around how you actually work.",
  },
  {
    id: "bespoke",
    title: "Bespoke AI systems",
    body: "Anything concrete we can design, build, host, and run — not a ChatGPT wrapper, a production system inside your business.",
  },
];

const process = [
  {
    title: "Audit",
    body: "We map how work actually runs — tools, handoffs, and where time leaks — then lock written scope and success metrics with you.",
  },
  {
    title: "Build & integrate",
    body: "We ship the first agreed system into your stack: connected to your data and usable by your team for the job we scoped.",
  },
  {
    title: "Host & run",
    body: "We keep it live, monitored, and improving. Hosting is included. Month by month we expand what the system covers.",
  },
];

const timeline = [
  {
    label: "Week 1",
    title: "Audit & scope lock",
    body: "Access, walkthroughs, written scope for system one, and the metric that proves it worked.",
  },
  {
    label: "Weeks 2–4",
    title: "Build to production",
    body: "Design, integrate, test with real data, and put the first system live for your team to use.",
  },
  {
    label: "Ongoing",
    title: "Run & expand",
    body: "Monitoring, fixes, and the next bottleneck — so the operation gets more systemised over time.",
  },
];

const differences = [
  {
    title: "We build real software",
    body: "Production apps and integrations on a serious stack — not no-code glue that falls over when the business gets busy.",
  },
  {
    title: "We own it end-to-end",
    body: "Design, build, host, and run. Your team uses the system; we keep it alive. No half-finished handoff.",
  },
  {
    title: "We start with one bottleneck",
    body: "One agreed system first, measured, live. Then we expand. No multi-year transformation theatre.",
  },
];

const contrast = [
  {
    them: "Strategy decks with no build",
    us: "Audit that becomes a live system",
  },
  {
    them: "Chatbot demos that never leave staging",
    us: "Production in your real stack",
  },
  {
    them: "Tools dumped on your team to maintain",
    us: "We host, monitor, and expand",
  },
  {
    them: "Vague transformation retainers",
    us: "One scoped bottleneck at a time",
  },
];

const fitPoints = [
  "You already run on real tools — email, CRM, docs, spreadsheets, or internal software",
  "Too much work still depends on people doing the same tasks by hand",
  "You want a system built and owned end-to-end — not another tool for your team to maintain",
];

const faqs = [
  {
    q: "What kinds of businesses do you work with?",
    a: "Industry-agnostic. Fit is operational: you have real tools and repeatable work that software and AI can take over. If there isn’t something concrete to build or integrate, we won’t take it on.",
  },
  {
    q: "Do you just advise, or do you build?",
    a: "Both, in that order. The audit decides what to build. Then we design, ship, host, and run the system. Advice without delivery isn’t the engagement.",
  },
  {
    q: "What does “live in 30 days” mean?",
    a: "After kickoff and scope lock, the first agreed system is deployed, connected to the agreed tools and data, and usable by your team for that job — not a demo or staging-only prototype. If we miss that, you get a full refund of month one.",
  },
  {
    q: "Who hosts and maintains the systems?",
    a: "We do. Hosting is included in the engagement. We monitor, fix, and improve — then expand into the next bottleneck once the first system is solid.",
  },
  {
    q: "Will this replace our existing tools?",
    a: "Usually no. We integrate into what you already use wherever that is the right call. Sometimes we build a custom layer or internal app when the stack can’t stretch that far.",
  },
];

export default function Home() {
  return (
    <div className="bg-atmosphere relative min-h-full overflow-x-clip bg-noise">
      <SiteHeader />

      <main id="top">
        {/* Hero — brand first, one headline, one line, dual CTA */}
        <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-16 pt-28 sm:px-8 sm:pb-20">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]"
            aria-hidden="true"
          >
            <LogoMark className="absolute right-0 top-[18%] h-[50vh] w-auto translate-x-1/4 sm:h-[58vh]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="animate-mark mb-10 text-4xl text-foreground sm:mb-14 sm:text-5xl md:text-6xl lg:text-7xl">
              <Logo />
            </div>

            <h1 className="animate-rise font-display max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Bespoke AI systems, built into your business.
            </h1>

            <p className="animate-rise-delay-1 mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              We audit your operation, build the automations, then host and run
              them — so manual work leaves your team and the system keeps running.
            </p>

            <div className="animate-rise-delay-2 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-gold group inline-flex items-center gap-3 px-7 py-3.5 font-display text-sm font-semibold tracking-wide"
              >
                Start a conversation
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#process"
                className="font-display text-sm font-medium tracking-wide text-muted transition-colors hover:text-accent"
              >
                See the process
              </a>
            </div>
          </div>
        </section>

        {/* Snapshot strip — AI-Native “key facts” pattern */}
        <section aria-label="Engagement snapshot" className="border-y border-line bg-surface/60">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
            {snapshot.map((item) => (
              <div key={item.label} className="px-6 py-7 sm:px-8 sm:py-9">
                <p className="font-display text-[0.65rem] font-semibold tracking-[0.18em] text-muted uppercase">
                  {item.label}
                </p>
                <p className="font-display mt-2 text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Capability strip — ends cleanly after Document processing */}
        <div className="border-b border-line px-6 py-7 sm:px-8" aria-hidden="true">
          <div className="mx-auto flex max-w-6xl flex-nowrap items-center justify-between gap-3 overflow-x-auto">
            {capabilities.map((item) => (
              <span
                key={item}
                className="inline-flex shrink-0 items-center gap-2.5 font-display text-[0.7rem] leading-6 font-semibold tracking-[0.12em] text-muted uppercase sm:gap-3 sm:text-sm sm:tracking-[0.14em]"
              >
                <span className="text-accent">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <section id="problem" className="scroll-mt-24 px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              The problem
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              Most businesses aren’t systemised — they’re held together by people.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              That’s fine until volume rises. Then the same work multiplies, hiring
              becomes the only lever, and founders stay stuck in the weeds.
            </p>

            <ul className="mt-14 grid gap-10 border-t border-line pt-12 sm:grid-cols-3 sm:gap-8">
              {problems.map((item) => (
                <li key={item.title}>
                  <LogoMark className="h-5 w-auto text-accent" />
                  <h3 className="font-display mt-5 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBand
          eyebrow="Next step"
          title="Got a bottleneck you can point at?"
          body="If the work is repeatable and stuck in people, inboxes, or spreadsheets, we can usually systemise it."
          secondaryHref="#systems"
          secondaryLabel="Browse systems"
        />

        <section id="what-we-do" className="scroll-mt-24 border-t border-line px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              What we do
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              Bespoke AI systems integration — end to end.
            </h2>
            <div className="mt-5 grid max-w-4xl gap-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                JTLH LTD goes into businesses and builds AI around how you already
                operate. Email automation, knowledge and reporting, CRM layers,
                internal tools, custom apps — whatever the bottleneck needs.
              </p>
              <p>
                If the work is repeatable and fixable with software and AI, we take
                it on. If it isn’t, we say so.
              </p>
            </div>

            {/* Us vs them — AI-Native contrast layout */}
            <div className="mt-14 overflow-hidden border border-line">
              <div className="grid border-b border-line bg-surface sm:grid-cols-2">
                <p className="border-b border-line px-6 py-4 font-display text-xs font-semibold tracking-[0.18em] text-muted uppercase sm:border-r sm:border-b-0">
                  Typical AI pitch
                </p>
                <p className="px-6 py-4 font-display text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                  JTLH engagement
                </p>
              </div>
              {contrast.map((row) => (
                <div
                  key={row.us}
                  className="grid border-b border-line last:border-b-0 sm:grid-cols-2"
                >
                  <p className="border-b border-line px-6 py-5 text-muted sm:border-r sm:border-b-0">
                    {row.them}
                  </p>
                  <p className="px-6 py-5 text-foreground">{row.us}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="systems" className="scroll-mt-24 border-t border-line px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Systems
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              Whatever your bottleneck needs.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Scope is locked after the audit. Jump to a system type, or scroll the
              catalogue — each one is tailored to your workflows, not a template.
            </p>

            {/* Catalogue jump links — Makematic product map */}
            <div className="mt-10 flex flex-wrap gap-3">
              {buildExamples.map((item) => (
                <a
                  key={item.id}
                  href={`#system-${item.id}`}
                  className="border border-line px-4 py-2 font-display text-xs font-semibold tracking-[0.12em] text-muted uppercase transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {item.title}
                </a>
              ))}
            </div>

            <ul className="mt-14 space-y-0 border-t border-line">
              {buildExamples.map((item, index) => (
                <li
                  key={item.id}
                  id={`system-${item.id}`}
                  className="scroll-mt-28 grid gap-3 border-b border-line py-8 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-10 sm:py-10"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xs tracking-[0.16em] text-accent">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted sm:pt-1">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" className="scroll-mt-24 relative overflow-x-clip border-t border-line px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Process
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              Audit. Build. Run.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Three phases. Setup is included. Month one covers the audit and your
              first live system — then we keep expanding.
            </p>

            {/* Numbered phase rail */}
            <ol className="mt-14 grid gap-0 border border-line sm:grid-cols-3">
              {process.map((step, index) => (
                <li
                  key={step.title}
                  className="border-b border-line px-6 py-8 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 sm:px-8 sm:py-10"
                >
                  <p className="font-display text-4xl font-semibold tracking-tight text-accent/40">
                    0{index + 1}
                  </p>
                  <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-16 border-t border-line pt-14">
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                First 30 days
              </p>
              <h3 className="font-display mt-4 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
                From kickoff to a system your team can use.
              </h3>
              <ul className="mt-10 space-y-0 border-t border-line">
                {timeline.map((item) => (
                  <li
                    key={item.label}
                    className="grid gap-2 border-b border-line py-7 sm:grid-cols-[8rem_1fr] sm:gap-10"
                  >
                    <p className="font-display text-sm tracking-[0.12em] text-accent uppercase">
                      {item.label}
                    </p>
                    <div>
                      <h4 className="font-display text-lg font-semibold tracking-tight">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-base leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="why" className="scroll-mt-24 border-t border-line px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Why JTLH
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              Built like a product team, engaged like an operator.
            </h2>
            <ul className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {differences.map((item) => (
                <li key={item.title} className="border-t border-line pt-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="guarantee" className="scroll-mt-24 border-t border-line px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Guarantee
              </p>
              <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                First system live in 30 days — or month one back.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                After kickoff and scope lock, your first agreed AI system goes live
                in production within 30 days. If we don’t ship what we agreed, you
                get a full refund of month one.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Live means deployed, connected to the agreed tools and data, and
                usable by your team for the agreed job — not a demo. The clock
                pauses if access, data, or decisions are delayed on your side.
              </p>
              <a
                href="#contact"
                className="btn-gold mt-8 inline-flex items-center gap-3 px-7 py-3.5 font-display text-sm font-semibold tracking-wide"
              >
                Talk about a first system
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="border border-accent/30 bg-surface px-6 py-8 sm:px-8">
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Who it’s for
              </p>
              <ul className="mt-6 space-y-5">
                {fitPoints.map((point) => (
                  <li key={point} className="flex gap-4 text-base leading-snug">
                    <LogoMark className="mt-1 h-4 w-auto shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">
                Monthly engagement. We keep ownership of hosting and delivery so
                the system stays a working part of the business — not a project
                that dies after launch.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 border-t border-line px-6 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              FAQ
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              Straight answers.
            </h2>
            <FaqAccordion items={faqs} />
          </div>
        </section>

        <CtaBand
          eyebrow="Ready"
          title="Tell us where the work is stuck."
          body="Share the bottleneck. We’ll reply with whether it’s a fit and what a first system could look like."
          primaryLabel="Go to contact form"
          secondaryHref="#faq"
          secondaryLabel="Read the FAQ"
        />

        <section id="contact" className="scroll-mt-24 overflow-x-clip px-6 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-6xl overflow-hidden border border-accent/40 bg-surface px-8 py-14 sm:px-14 sm:py-20">
            <div className="relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div>
                <LogoMark className="pointer-events-none absolute -right-6 -top-10 h-28 w-auto opacity-[0.12] sm:h-40 lg:hidden" />
                <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  Contact
                </p>
                <h2 className="font-display mt-4 max-w-xl text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
                  Send the bottleneck.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                  Email, reporting, CRM, ops, or something unique to your business.
                  Form goes straight to us.
                </p>
                <dl className="mt-10 space-y-4 border-t border-line pt-8 text-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                    <dt className="font-display tracking-[0.12em] text-muted uppercase">
                      Email
                    </dt>
                    <dd>
                      <a href={`mailto:${EMAIL}`} className="text-accent transition-colors hover:text-[#f0d084]">
                        {EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                    <dt className="font-display tracking-[0.12em] text-muted uppercase">
                      Response
                    </dt>
                    <dd className="text-foreground">Usually within one working day</dd>
                  </div>
                </dl>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-sm text-muted">
            <Logo className="text-base text-foreground" />
            <p className="mt-3 max-w-sm">
              Bespoke AI systems integration — audit, build, host, and run.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href="#systems" className="text-muted transition-colors hover:text-accent">
              Systems
            </a>
            <a href="#process" className="text-muted transition-colors hover:text-accent">
              Process
            </a>
            <a href="#guarantee" className="text-muted transition-colors hover:text-accent">
              Guarantee
            </a>
            <a href="#faq" className="text-muted transition-colors hover:text-accent">
              FAQ
            </a>
            <a href="#contact" className="text-muted transition-colors hover:text-accent">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-1 text-sm text-muted sm:items-end">
            <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-accent">
              {EMAIL}
            </a>
            <p>© {new Date().getFullYear()} JTLH LTD</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
