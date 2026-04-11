import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zilliongames.kr"),
  title: "질리언 게임즈 | Zillion Games",
  description: "Zillion: 셀 수 없이 큰 수. 그 이름처럼, 세상의 수많은 플레이어에게 최고의 게임을 선사하겠습니다.",
  openGraph: {
    title: "질리언 게임즈 | Zillion Games",
    description: "질리언게임즈(Zillion Games) 모바일 게임 개발사 공식 사이트입니다.",
    siteName: "질리언 게임즈",
    images: [{ url: "/icon-512x512.png", width: 512, height: 512 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
