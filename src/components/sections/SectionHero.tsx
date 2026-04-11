"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionHero() {
  return (
    <div id="hero" className="fp-section bg-[#0a0a14]">
      <div className="hero-orb w-[800px] h-[800px] bg-[#C084FC] top-[5%] -left-[300px] opacity-[0.08]" />
      <div className="hero-orb w-[600px] h-[600px] bg-[#93C5FD] bottom-[5%] -right-[200px] opacity-[0.07]" />
      <div className="hero-orb w-[500px] h-[500px] bg-[#A78BFA] top-[40%] left-[50%] opacity-[0.05]" />

      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      <div className="relative z-10 text-center px-6 md:px-10 max-w-[1000px] mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="mb-10 md:mb-14 flex justify-center">
          <Image src="/logo-icon.png" alt="Zillion Games" width={180} height={220} className="h-28 md:h-40 lg:h-48 w-auto drop-shadow-[0_0_60px_rgba(192,132,252,0.4)]" priority />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="text-[40px] md:text-[68px] lg:text-[84px] font-black tracking-tight leading-[1.05] mb-6 md:mb-10">
          <span className="text-white">수 없이 많은</span>
          <br />
          <span className="gradient-text">유저분들에게!</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-[15px] md:text-[19px] text-gray-400 max-w-[520px] mx-auto mb-10 md:mb-12 leading-[1.8]">
          &apos;Zillion&apos;, 셀 수 없이 큰 수.
          <br />
          그 이름처럼, 세상의 수많은 플레이어에게
          <br />
         최고의 게임을 선사하겠습니다.
        </motion.p>
      </div>

      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
        <div className="w-7 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/30" />
        </div>
      </motion.div>
    </div>
  );
}
