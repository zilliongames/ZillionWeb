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

export default function Benefits() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="benefits" className="relative py-28 md:py-40 overflow-hidden">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-5 py-2 rounded-full text-[13px] font-bold tracking-wider uppercase bg-[#6C63FF]/8 text-[#6C63FF] mb-8">
            복리후생
          </span>
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black text-gray-900 mb-8 leading-[1.15]">
            함께 성장하는
            <br />
            <span className="gradient-text">복리후생</span>
          </h2>
          <p className="text-gray-400 max-w-[520px] mx-auto text-[16px] md:text-[18px] leading-[1.8]">
            구성원의 워라밸과 성장을 위해
            최고의 환경과 복리후생을 제공합니다.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card rounded-[20px] p-7 md:p-8 flex items-start gap-5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF]/10 to-[#00D4FF]/10 flex items-center justify-center text-[28px] shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>
              <div>
                <h3 className="font-bold text-[17px] text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
