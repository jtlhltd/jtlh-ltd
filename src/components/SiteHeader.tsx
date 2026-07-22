"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#systems", label: "Systems" },
  { href: "#process", label: "Process" },
  { href: "#guarantee", label: "Guarantee" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 pt-[env(safe-area-inset-top)] transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8 sm:py-5">
        <a
          href="#top"
          onClick={close}
          className="text-lg text-foreground transition-opacity hover:opacity-80 sm:text-xl"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xs font-semibold tracking-[0.14em] text-muted uppercase transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gold px-5 py-2.5 font-display text-sm font-semibold tracking-[0.12em] uppercase"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            onClick={close}
            className="btn-gold inline-flex min-h-11 items-center px-4 font-display text-xs font-semibold tracking-[0.12em] uppercase"
          >
            Contact
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 block h-0.5 w-full bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-line bg-background/95 backdrop-blur-md lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="border-b border-line py-4 font-display text-sm font-semibold tracking-[0.14em] text-muted uppercase transition-colors hover:text-accent last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
