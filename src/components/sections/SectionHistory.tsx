"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timeline = [
  { year: "2022. 09", title: "Zillion Games 설립", desc: "무한한 가능성을 향한 첫걸음" },
  { year: "2023. 03", title: "픽셀헌터키우기 출시", desc: "첫 번째 타이틀 글로벌 마켓 진출" },
  { year: "2025. 03", title: "스위칭히어로즈 출시", desc: "두 번째 타이틀로 새로운 도전" },
];

export default function SectionHistory() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div id="history" className="fp-section bg-[#0a0a14]">
      <div className="hero-orb w-[800px] h-[800px] bg-[#C084FC] top-[5%] -left-[300px] opacity-[0.15]" />
      <div className="hero-orb w-[600px] h-[600px] bg-[#93C5FD] bottom-[5%] -right-[200px] opacity-[0.1]" />
      <div className="hero-orb w-[500px] h-[500px] bg-[#A78BFA] top-[40%] left-[50%] opacity-[0.08]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      <div ref={ref} className="relative w-full max-w-[560px] mx-auto px-6 md:px-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[28px] md:text-[36px] font-black text-white mb-12 md:mb-16"
        >
          우리의 여정
        </motion.h3>

        <div className="space-y-6">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
            >
              <div className="rounded-2xl px-6 md:px-8 py-5 md:py-6 text-center bg-white/5 border border-white/8 backdrop-blur-sm">
                <span className="text-[32px] md:text-[40px] font-black gradient-text leading-none block mb-2">
                  {item.year}
                </span>
                <h4 className="text-[17px] md:text-[19px] font-bold text-white mb-1">{item.title}</h4>
                <p className="text-[13px] md:text-[14px] text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
