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
  description: "매달 이력서를 업데이트하고, 다음 이직을 준비하세요.",
  metadataBase: new URL("https://lazyresume.lazyresume-kr.workers.dev"),
  openGraph: {
    title: "게으른 이력서, 매달 전화 한 통으로 이력서 업데이트!",
    description: "매달 이력서를 업데이트하고, 다음 이직을 준비하세요.",
    url: "https://lazyresume.lazyresume-kr.workers.dev",
    siteName: "게으른 이력서",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "lazyresume" }],
  },
  twitter: {
    card: "summary",
    title: "게으른 이력서, 매달 전화 한 통으로 이력서 업데이트!",
    description: "매달 이력서를 업데이트하고, 다음 이직을 준비하세요.",
    images: ["/og-image.svg"],
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
