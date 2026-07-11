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
  description: "이력서 업데이트, 이제 매달 전화 한 통으로 끝내세요!",
  metadataBase: new URL("https://lazyresume.kr"),
  openGraph: {
    title: "매달 전화 한 통으로 커리어를 업데이트하세요",
    description: "이력서 업데이트, 이제 매달 전화 한 통으로 끝내세요!",
    url: "https://lazyresume.kr",
    siteName: "게으른 이력서",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1731, height: 909, alt: "게으른 이력서" }],
  },
  twitter: {
    card: "summary",
    title: "매달 전화 한 통으로 커리어를 업데이트하세요",
    description: "이력서 업데이트, 이제 매달 전화 한 통으로 끝내세요!",
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
