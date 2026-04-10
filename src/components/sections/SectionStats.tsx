"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: "2022", label: "설립연도" },
  { number: "2+", label: "출시 게임" },
  { number: "2M+", label: "누적 유저" },
];

const timeline = [
  { year: "2022. 09", title: "Zillion Games 설립", desc: "무한한 가능성을 향한 첫걸음" },
  { year: "2023. 03", title: "픽셀헌터키우기 출시", desc: "첫 번째 타이틀 글로벌 마켓 진출" },
  { year: "2025. 03", title: "스위칭히어로즈 출시", desc: "두 번째 타이틀로 새로운 도전" },
];

export default function SectionStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id="stats" className="fp-section bg-[#0a0a14]">
      <div className="hero-orb w-[800px] h-[800px] bg-[#6C63FF] top-[5%] -left-[300px] opacity-[0.15]" />
      <div className="hero-orb w-[600px] h-[600px] bg-[#00D4FF] bottom-[5%] -right-[200px] opacity-[0.1]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      <div ref={ref} className="relative w-full max-w-[1100px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* 왼쪽: 성과 숫자 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="space-y-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center lg:text-left"
              >
                <div className="text-[56px] md:text-[72px] lg:text-[80px] font-black gradient-text leading-none mb-1 whitespace-nowrap">
                  {stat.number}
                </div>
                <div className="text-[14px] md:text-[16px] text-gray-500 font-medium tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 오른쪽: 연혁 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <h3 className="text-[24px] md:text-[28px] font-black text-white mb-8 text-center lg:text-left">우리의 여정</h3>
          <div className="flex flex-col">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                style={{ marginTop: i === 0 ? 0 : 24 }}
              >
                <div className="rounded-2xl px-6 py-7 bg-white/5 border border-white/8 backdrop-blur-sm flex items-center gap-5">
                  <span className="text-[28px] md:text-[32px] font-black gradient-text leading-none whitespace-nowrap shrink-0" style={{ marginLeft: 10 }}>
                    {item.year}
                  </span>
                  <div>
                    <h4 className="text-[16px] md:text-[17px] font-bold text-white mb-0.5">{item.title}</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
