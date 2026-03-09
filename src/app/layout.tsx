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
  title: "UFIT AI 健康会员演示站",
  description: "年轻化 AI 健康会员与推荐裂变平台演示站。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${jakarta.variable} ${fraunces.variable} min-h-screen antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,_#0b1020_0%,_#11162b_36%,_#0d1224_100%)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12" />
          <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[#7C3AED]/30 blur-[120px]" />
          <div className="pointer-events-none absolute right-[-8rem] top-10 h-80 w-80 rounded-full bg-[#00C2FF]/20 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-16 left-1/3 h-80 w-80 rounded-full bg-[#FF4FD8]/12 blur-[140px]" />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
