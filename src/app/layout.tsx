import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "UFIT AI Wellness Membership Demo",
  description:
    "A modern AI wellness, membership, and referral commerce demo for UFIT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${fraunces.variable} min-h-screen antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(178,202,255,0.45),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.9),_transparent_25%),linear-gradient(180deg,_#f8fbff_0%,_#eef4fb_55%,_#f6f8fb_100%)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/70" />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
