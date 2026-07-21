type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function Logo({ className = "", markClassName = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-4 text-foreground ${className}`}>
      <svg
        className={`h-[1.15em] w-auto shrink-0 text-accent ${markClassName}`}
        viewBox="0 0 124 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 72H28V36L0 72Z" fill="currentColor" />
        <path d="M36 72H72V18L36 72Z" fill="currentColor" />
        <path d="M80 72H124V0L80 72Z" fill="currentColor" />
      </svg>
      <span className="font-display text-[0.92em] font-bold tracking-[0.08em]">
        JTLH LTD
      </span>
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 124 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 72H28V36L0 72Z" fill="currentColor" />
      <path d="M36 72H72V18L36 72Z" fill="currentColor" />
      <path d="M80 72H124V0L80 72Z" fill="currentColor" />
    </svg>
  );
}
