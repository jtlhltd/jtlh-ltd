"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="mt-14 space-y-0 border-t border-line">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <li key={item.q} className="border-b border-line">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full cursor-pointer items-start justify-between gap-4 py-6 text-left sm:gap-6 sm:py-8"
            >
              <span className="font-display max-w-3xl text-lg font-semibold tracking-tight sm:text-2xl">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className={`mt-1 shrink-0 font-display text-accent transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-8 text-base leading-relaxed text-muted sm:text-lg">
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
