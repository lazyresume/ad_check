import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./hero-phone.css";
import "./hero-plans.css";
import "./system-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "게으른 이력서 — 매달 전화 한 통으로 커리어 업데이트",
  description: "매달 전화 한 통으로 이번 달의 프로젝트와 성과를 정리하고, 이력서·경력기술서·포트폴리오를 최신 상태로 업데이트하세요.",
  metadataBase: new URL("https://lazyresume.lazyresume-kr.workers.dev"),
  openGraph: {
    title: "게으른 이력서 — 매달 전화 한 통으로 커리어 업데이트",
    description: "이번 달에 한 일을 편하게 말하면, 이력서·경력기술서·포트폴리오로 정리해드려요.",
    url: "https://lazyresume.lazyresume-kr.workers.dev",
    siteName: "게으른 이력서",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "게으른 이력서 — 매달 전화 한 통으로 커리어 업데이트",
    description: "이번 달에 한 일을 편하게 말하면, 커리어 문서로 정리해드려요.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
