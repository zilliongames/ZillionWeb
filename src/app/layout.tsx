import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "질리언 게임즈 | Zillion Games",
  description: "Zillion: 셀 수 없이 큰 수. 그 이름처럼, 세상의 수많은 플레이어에게 최고의 게임을 선사하겠습니다.",
  icons: { icon: "/icon.png" },
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
