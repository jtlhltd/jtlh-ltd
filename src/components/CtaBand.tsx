type CtaBandProps = {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  eyebrow,
  title,
  body,
  primaryHref = "#contact",
  primaryLabel = "Start a conversation",
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 border border-accent/35 bg-surface px-8 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-12 sm:py-14">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {eyebrow}
          </p>
          <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{body}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={primaryHref}
            className="btn-gold inline-flex items-center gap-3 px-7 py-3.5 font-display text-sm font-semibold tracking-wide"
          >
            {primaryLabel}
            <span aria-hidden="true">→</span>
          </a>
          {secondaryHref && secondaryLabel ? (
            <a
              href={secondaryHref}
              className="font-display text-sm font-medium tracking-wide text-muted transition-colors hover:text-accent"
            >
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
