"use client";

import { useEffect } from "react";

const HEADER_OFFSET = 96;
const DURATION_MS = 750;

let rafId = 0;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function animateScrollTo(top: number) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const target = Math.max(0, top);
  const scroller = document.scrollingElement ?? document.documentElement;

  if (reduced) {
    scroller.scrollTop = target;
    return;
  }

  const start = scroller.scrollTop;
  const delta = target - start;
  if (Math.abs(delta) < 2) return;

  if (rafId) cancelAnimationFrame(rafId);
  const started = performance.now();

  const tick = (now: number) => {
    const progress = Math.min(1, (now - started) / DURATION_MS);
    scroller.scrollTop = start + delta * easeOutCubic(progress);
    if (progress < 1) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = 0;
    }
  };

  rafId = requestAnimationFrame(tick);
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  animateScrollTo(top);
  return true;
}

export function SmoothAnchors() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href^='#']");
      if (!(link instanceof HTMLAnchorElement)) return;
      if (link.target && link.target !== "_self") return;
      if (link.hasAttribute("download")) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const id = decodeURIComponent(href.slice(1));
      if (!document.getElementById(id)) return;

      event.preventDefault();
      event.stopPropagation();

      if (window.location.hash !== href) {
        history.pushState(null, "", href);
      }

      scrollToId(id);
    };

    // Capture so we run before anything else can force an instant jump.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
