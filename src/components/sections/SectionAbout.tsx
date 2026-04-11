"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionAbout() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div id="about" className="fp-section bg-white">
      <div ref={ref} className="w-full max-w-[1280px] mx-auto px-6 md:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <span className="inline-block px-5 py-2 rounded-full text-[13px] font-bold tracking-wider uppercase bg-[#C084FC]/8 text-[#C084FC] mb-8">
            회사 소개
          </span>
          <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-black text-gray-900 mb-6 md:mb-8 leading-[1.15]">
            수년간의 경험, <span className="gradient-text">검증된 팀</span>
          </h2>
          <p className="text-gray-400 max-w-[580px] mx-auto text-[15px] md:text-[17px] leading-[1.9] mb-12 md:mb-16">
            질리언 게임즈는 방치형 RPG 장르에서 검증된 실력을 갖춘 팀입니다.
            &quot;픽셀헌터 키우기&quot;로 매출 100억을 돌파하며 실력을 증명했고,
            최근 &quot;스위칭 히어로즈&quot;를 성공적으로 런칭했습니다.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-[700px] mx-auto">
          <div className="relative rounded-[24px] p-8 md:p-12 text-center overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16162a]">
            <div className="hero-orb w-[250px] h-[250px] bg-[#C084FC] -top-16 -right-16 opacity-[0.15]" />
            <div className="hero-orb w-[180px] h-[180px] bg-[#93C5FD] -bottom-10 -left-10 opacity-[0.1]" />
            <div className="relative">
              <p className="text-[22px] md:text-[28px] font-black text-white leading-snug mb-4">
                &quot;<span className="gradient-text">Zillion</span>&quot;은 셀 수 없이 큰 수
              </p>
              <p className="text-gray-400 leading-[1.9] text-[14px] md:text-[16px] max-w-[480px] mx-auto">
                단 하나의 게임이라도, 누군가의 가장 특별한 경험이 될 수 있도록 — 그 믿음으로 오늘도 만들어갑니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
