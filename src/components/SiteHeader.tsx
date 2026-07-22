"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#systems", label: "Systems", hide: "md" },
  { href: "#process", label: "Process", hide: "sm" },
  { href: "#guarantee", label: "Guarantee", hide: "lg" },
  { href: "#faq", label: "FAQ", hide: "lg" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-line bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 sm:py-5">
        <a href="#top" className="text-lg text-foreground transition-opacity hover:opacity-80 sm:text-xl">
          <Logo />
        </a>
        <nav className="flex items-center gap-4 sm:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${
                link.hide === "sm"
                  ? "hidden sm:inline"
                  : link.hide === "md"
                    ? "hidden md:inline"
                    : "hidden lg:inline"
              } font-display text-xs font-semibold tracking-[0.14em] text-muted uppercase transition-colors hover:text-accent`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gold px-4 py-2 font-display text-xs font-semibold tracking-[0.12em] uppercase sm:px-5 sm:text-sm"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
