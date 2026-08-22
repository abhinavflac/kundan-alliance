import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.scss";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "Kundan Alliance — Recognising Excellence, Week After Week",
  description:
    "Kundan Alliance is the organisation's recognition platform — a community that honours outstanding salesmanship, celebrates important milestones and crowns its finest at the annual ceremony.",
  openGraph: {
    title: "Kundan Alliance",
    description:
      "A circle that celebrates craft, consistency and character — recognising the people who move the organisation forward, week after week.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
