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
  title: "게으른 이력서, 매달 전화 한 통으로 이력서 업데이트!",
  description: "이번 달에 한 일을 전화로 들려주면 이력서·경력기술서·포트폴리오를 최신 상태로 정리해드려요.",
  metadataBase: new URL("https://lazyresume.kr"),
  openGraph: {
    title: "매달 전화 한 통으로 커리어를 업데이트하세요",
    description: "이번 달에 한 일을 전화로 들려주면 이력서·경력기술서·포트폴리오를 최신 상태로 정리해드려요.",
    url: "https://lazyresume.kr",
    siteName: "게으른 이력서",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1731, height: 909, alt: "게으른 이력서" }],
  },
  twitter: {
    card: "summary",
    title: "매달 전화 한 통으로 커리어를 업데이트하세요",
    description: "이번 달에 한 일을 전화로 들려주면 이력서·경력기술서·포트폴리오를 최신 상태로 정리해드려요.",
    images: ["/og-image.png"],
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
