"use client";

import { useState } from "react";

const EMAIL = "jtlhltd@gmail.com";
const SUBJECT = "Enquiry via JTLH LTD website";
const GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(SUBJECT)}`;
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;

type ContactActionsProps = {
  className?: string;
};

export function ContactActions({ className = "" }: ContactActionsProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy email address:", EMAIL);
    }
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <a
        href={GMAIL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold inline-flex items-center justify-center gap-3 px-7 py-3.5 font-display text-sm font-semibold tracking-wide sm:justify-start"
      >
        Email us
        <span aria-hidden="true">→</span>
      </a>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <a
          href={MAILTO}
          className="font-display tracking-wide text-accent transition-colors hover:text-[#e8c36a]"
        >
          {EMAIL}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="font-display cursor-pointer tracking-wide text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {copied ? "Copied" : "Copy email"}
        </button>
      </div>
    </div>
  );
}

export { EMAIL, GMAIL, MAILTO, SUBJECT };
