"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a14]">
      {/* 배경 오브 */}
      <div className="hero-orb w-[800px] h-[800px] bg-[#6C63FF] top-[5%] -left-[300px] opacity-[0.15]" />
      <div className="hero-orb w-[600px] h-[600px] bg-[#00D4FF] bottom-[5%] -right-[200px] opacity-[0.1]" />
      <div className="hero-orb w-[500px] h-[500px] bg-[#9333ea] top-[40%] left-[50%] opacity-[0.08]" />

      {/* 그리드 패턴 */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 md:px-10" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <img
            src="/logo-icon.png"
            alt="Zillion Games"
            className="drop-shadow-[0_0_60px_rgba(108,99,255,0.4)]"
            style={{ display: "block", height: "8rem", width: "auto", margin: "0 auto" }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-[44px] md:text-[72px] lg:text-[88px] font-black tracking-tight leading-[1.05] mb-8 md:mb-12"
        >
          <span className="gradient-text">무한한 세계를</span>
          <br />
          <span className="text-white">만들어갑니다</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[16px] md:text-[20px] text-gray-400 max-w-[560px] mx-auto mb-14 md:mb-16 leading-[1.8]"
        >
          &apos;Zillion&apos;, 셀 수 없이 큰 수.
          <br />
          그 이름처럼, 세상의 수많은 플레이어에게
          <br />
          최고의 게임을 선사하겠습니다.
        </motion.p>

      </div>

      {/* 하단 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-7 h-11 rounded-full border-2 border-white/20 flex justify-center pt-2.5">
          <div className="w-1 h-2.5 rounded-full bg-white/30" />
        </div>
      </motion.div>
    </section>
  );
}
