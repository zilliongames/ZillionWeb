"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "홈" },
  { id: "stats", label: "성과" },
  { id: "game1", label: "픽셀헌터키우기" },
  { id: "game2", label: "스위칭히어로즈" },
  { id: "benefits", label: "복리후생" },
  { id: "contact", label: "연락처" },
];

export default function FullPageNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".fullpage-container");
    if (!container) return;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const vh = window.innerHeight;
      const idx = Math.round(scrollTop / vh);
      setActive(Math.min(idx, sections.length - 1));
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const container = document.querySelector(".fullpage-container");
    if (!container) return;
    container.scrollTo({ top: idx * window.innerHeight, behavior: "smooth" });
  };

  return (
    <nav className="fp-nav hidden md:flex">
      {sections.map((s, i) => (
        <button
          key={s.id}
          onClick={() => scrollTo(i)}
          className={`fp-nav-dot ${i === active ? "active" : ""}`}
          title={s.label}
        />
      ))}
    </nav>
  );
}
