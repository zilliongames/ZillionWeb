import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zillion Games | Interactive Entertainment Studio",
  description: "끝없는 상상력으로 새로운 세계를 만들어가는 인터랙티브 엔터테인먼트 스튜디오",
  icons: { icon: "/favicon.ico" },
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
