import type { Metadata, Viewport } from "next";
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
    siteName: "JTLH LTD",
    url: "https://jtlhltd.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "JTLH LTD — Bespoke AI Systems Integration",
    description:
      "Audit, automate, and run AI systems inside your business — hosting included. First system live in 30 days.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
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
