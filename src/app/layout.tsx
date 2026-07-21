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
    "JTLH LTD builds bespoke AI systems into your business, hosts them, and runs them on a monthly retainer from £3,000. First system live in 30 days.",
  metadataBase: new URL("https://jtlh-ltd-web.onrender.com"),
  openGraph: {
    title: "JTLH LTD — Bespoke AI Systems Integration",
    description:
      "Audit, automate, and run AI systems inside your business — hosting included. From £3,000/month.",
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
