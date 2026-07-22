import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JTLH LTD — Bespoke AI Systems Integration",
  description:
    "JTLH LTD builds bespoke AI systems into your business, hosts them, and runs them. Audit, automate, and keep systems live — first system in 30 days.",
  metadataBase: new URL("https://jtlhltd.com"),
  openGraph: {
    title: "JTLH LTD — Bespoke AI Systems Integration",
    description:
      "Audit, automate, and run AI systems inside your business — hosting included. First system live in 30 days.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${outfit.variable} ${syne.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
