"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const benefits = [
  { title: "주 35시간 근무", desc: "10시~19시, 점심 2시간", emoji: "🕐" },
  { title: "식대 월 40만원", desc: "점심·저녁비 별도 지급", emoji: "🍽️" },
  { title: "연간 휴가 최대 21일", desc: "기본 15개 + 매년 1개 추가", emoji: "🏖️" },
  { title: "복지포인트 연 120만원", desc: "자유롭게 사용 가능", emoji: "🎁" },
  { title: "고정 상여금 연 120만원", desc: "분기별 지급", emoji: "💰" },
  { title: "생일 축하 혜택", desc: "오후반차 + 축하금 30만원", emoji: "🎂" },
  { title: "성과 인센티브", desc: "성과에 따른 별도 지급", emoji: "🔥" },
  { title: "최고급 업무 환경", desc: "모션 데스크 + 고급 의자", emoji: "🖥️" },
  { title: "경조사 지원", desc: "지원금 및 유급휴가", emoji: "❤️" },
];

export default function SectionBenefits() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id="benefits" className="fp-section bg-white">
      <div ref={ref} className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-10 md:mb-14">
          <span className="inline-block px-5 py-2 rounded-full text-[13px] font-bold tracking-wider uppercase bg-[#6C63FF]/8 text-[#6C63FF] mb-6">
            복리후생
          </span>
          <h2 className="text-[32px] md:text-[44px] font-black text-gray-900 leading-tight">
            함께 성장하는 <span className="gradient-text">복리후생</span>
          </h2>
        </motion.div>
        <div style={{ height: "50px" }} />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card rounded-2xl p-5 md:p-6 flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6C63FF]/10 to-[#00D4FF]/10 flex items-center justify-center text-[22px] shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-[15px] text-gray-900 truncate">{item.title}</h3>
                <p className="text-[12px] md:text-[13px] text-gray-400 truncate">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
