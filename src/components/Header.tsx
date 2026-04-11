"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "홈", page: 0 },
  { label: "소개", page: 1 },
  { label: "픽셀헌터키우기", page: 2 },
  { label: "스위칭히어로즈", page: 3 },
  { label: "복리후생", page: 4 },
  { label: "연락처", page: 5 },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToPage = useCallback((page: number) => {
    const container = document.querySelector(".fullpage-container");
    if (!container) return;
    container.scrollTo({ top: page * window.innerHeight, behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const container = document.querySelector(".fullpage-container");
    if (!container) return;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const vh = window.innerHeight;
      const idx = Math.round(scrollTop / vh);
      setActivePage(Math.min(idx, navItems.length - 1));
      setScrolled(scrollTop > 50);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a14]/80 backdrop-blur-[50px] border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[72px] md:h-[88px] flex items-center justify-between">
        <button onClick={() => scrollToPage(0)} className="flex items-center gap-3 group shrink-0">
          <Image
            src="/logo-horizontal.png"
            alt="Zillion Games"
            width={200}
            height={44}
            className="h-8 md:h-10 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            priority
          />
        </button>

        <nav className="hidden lg:flex items-center gap-2 bg-white/[0.04] rounded-full p-2 border border-white/[0.06]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToPage(item.page)}
              className={`relative min-w-[130px] px-17 py-[18px] text-[18px] font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
                activePage === item.page
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-200"
              }`}
            >
              {activePage === item.page && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-b from-[#C084FC]/80 to-[#93C5FD]/60 rounded-full shadow-[0_0_20px_rgba(192,132,252,0.3)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[5px] p-3 -mr-3"
          aria-label="메뉴"
        >
          <span className={`block w-[22px] h-[2px] bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#0a0a14]/95 backdrop-blur-[50px] border-b border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToPage(item.page)}
                  className={`text-[15px] font-semibold transition-colors py-4 border-b border-white/5 last:border-0 text-left ${
                    activePage === item.page ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
