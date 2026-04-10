"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: "2022", label: "설립연도" },
  { number: "2+", label: "출시 게임" },
  { number: "2m+", label: "누적 유저" },
];

const timeline = [
  { year: "2022. 09", title: "Zillion Games 설립", desc: "무한한 가능성을 향한 첫걸음" },
  { year: "2023. 03", title: "픽셀헌터키우기 출시", desc: "첫 번째 타이틀 글로벌 마켓 진출" },
  { year: "2025. 03", title: "스위칭히어로즈 출시", desc: "두 번째 타이틀로 새로운 도전" },
];

export default function About() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* 소개 + 비전 (라이트) */}
      <section id="about" className="relative py-28 md:py-40 overflow-hidden">
        <div ref={headerRef} className="max-w-[1280px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-5 py-2 rounded-full text-[13px] font-bold tracking-wider uppercase bg-[#6C63FF]/8 text-[#6C63FF] mb-8">
              회사 소개
            </span>
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black text-gray-900 mb-8 leading-[1.15]">
              수년간의 경험,
              <br />
              <span className="gradient-text">검증된 팀</span>
            </h2>
            <p className="text-gray-400 max-w-[600px] mx-auto text-[16px] md:text-[18px] leading-[1.9]">
              질리언 게임즈는 방치형 RPG 장르에서 검증된 실력을 갖춘 팀입니다.
              &quot;픽셀헌터 키우기&quot;로 매출 100억을 돌파하며 실력을 증명했고,
              최근 &quot;스위칭 히어로즈&quot;를 성공적으로 런칭했습니다.
            </p>
          </motion.div>

          {/* 비전 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[760px] mx-auto"
          >
            <div className="relative rounded-[28px] p-10 md:p-14 text-center overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16162a]">
              <div className="hero-orb w-[300px] h-[300px] bg-[#6C63FF] -top-20 -right-20 opacity-[0.15]" />
              <div className="hero-orb w-[200px] h-[200px] bg-[#00D4FF] -bottom-10 -left-10 opacity-[0.1]" />
              <div className="relative">
                <p className="text-[24px] md:text-[32px] font-black text-white leading-snug mb-6">
                  &quot;<span className="gradient-text">Zillion</span>&quot;은
                  셀 수 없이 큰 수
                </p>
                <p className="text-gray-400 leading-[1.9] text-[15px] md:text-[17px] max-w-[520px] mx-auto">
                  최대한 많은 사람들에게
                  질리언 게임즈가 만든 게임이 최고의 게임으로
                  기억되는 것을 목표로 합니다.
                  <br />
                  단 하나의 게임이라도, 누군가의 가장 특별한 경험이 될 수 있도록 —
                  그 믿음으로 오늘도 만들어갑니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 통계 (다크) */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#0a0a14]">
        <div className="hero-orb w-[600px] h-[600px] bg-[#6C63FF] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />
        <div ref={statsRef} className="relative max-w-[1000px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-3 gap-6 md:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center py-6"
              >
                <div className="text-[48px] md:text-[72px] lg:text-[88px] font-black gradient-text leading-none mb-3 md:mb-4">
                  {stat.number}
                </div>
                <div className="text-[14px] md:text-[16px] text-gray-500 font-medium tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 타임라인 (라이트) */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-[#f7f8fc]">
        <div ref={timelineRef} className="max-w-[560px] mx-auto px-6 md:px-10">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-[28px] md:text-[36px] font-black text-gray-900 mb-16 md:mb-20"
          >
            우리의 여정
          </motion.h3>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
              >
                <div className="card rounded-2xl p-8 text-center">
                  <span className="text-[36px] md:text-[44px] font-black gradient-text leading-none block mb-3">
                    {item.year}
                  </span>
                  <h4 className="text-[18px] md:text-[20px] font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
