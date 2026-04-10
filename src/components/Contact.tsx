"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: "이메일",
    value: "jhlee@zilliongames.net",
    href: "mailto:jhlee@zilliongames.net",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    label: "주소",
    value: "경기 성남시 분당구 판교역로 231, 에이치스퀘어 에스동 206호",
    href: "#",
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden bg-[#f7f8fc]">
      <div ref={ref} className="max-w-[1000px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-5 py-2 rounded-full text-[13px] font-bold tracking-wider uppercase bg-[#6C63FF]/8 text-[#6C63FF] mb-8">
            연락처
          </span>
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black text-gray-900 mb-8 leading-[1.15]">
            함께
            <br />
            <span className="gradient-text">이야기해요</span>
          </h2>
          <p className="text-gray-400 max-w-[420px] mx-auto text-[16px] md:text-[18px] leading-[1.8]">
            비즈니스 제안, 채용 문의 등
            무엇이든 편하게 연락해주세요.
          </p>
        </motion.div>

        <div className="max-w-[500px] mx-auto space-y-5">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="card rounded-2xl p-7 flex items-center gap-5 group block"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF]/10 to-[#00D4FF]/10 flex items-center justify-center text-[#6C63FF] group-hover:text-[#00D4FF] transition-colors duration-300 shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-[12px] text-gray-400 mb-1.5 font-bold uppercase tracking-wider">{item.label}</div>
                <div className="text-gray-800 font-semibold text-[15px]">{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
