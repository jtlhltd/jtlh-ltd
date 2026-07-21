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
  title: "JTLH LTD — AI Consultation & Integration",
  description:
    "JTLH LTD helps businesses adopt and integrate AI practically — strategy, systems, and implementation that deliver real outcomes.",
  metadataBase: new URL("https://jtlh-ltd-web.onrender.com"),
  openGraph: {
    title: "JTLH LTD — AI Consultation & Integration",
    description:
      "Practical AI consultation and integration for businesses ready to move from ideas to working systems.",
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
