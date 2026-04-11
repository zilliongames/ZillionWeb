"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionGame1() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div id="game1" className="fp-section bg-[#0a0a14]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg-pixel-hunter.jpg')" }} />
      <div className="absolute inset-0 bg-black/65" />
      <div ref={ref} className="relative w-full max-w-[1100px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* 영상 - 좁은 화면에서 숨김 */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="hidden lg:flex lg:w-1/2 justify-center">
          <a href="https://play.google.com/store/apps/details?id=com.zilliongames.hunteridle" target="_blank" rel="noopener noreferrer" className="block hover:scale-[1.02] transition-transform duration-300" style={{ background: "rgba(0,0,0,0.35)", padding: "30px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(0,0,0,0.5)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}>
            <video
              src="/video-pixel-hunter.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              width={360}
              style={{ borderRadius: "16px", display: "block", pointerEvents: "none" }}
            />
          </a>
        </motion.div>

        {/* 정보 */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-[500px] lg:max-w-none lg:w-1/2">
          <div style={{ background: "rgba(0,0,0,0.35)", padding: "40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(0,0,0,0.5)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", textAlign: "center" }}>
            <a href="https://play.google.com/store/apps/details?id=com.zilliongames.hunteridle" target="_blank" rel="noopener noreferrer" className="flex justify-center mb-8">
              <Image
                src="/icon-pixel-hunter.png"
                alt="픽셀헌터키우기 앱 아이콘"
                width={64}
                height={64}
                className="w-16 h-16 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </a>
            <h3 className="text-[36px] md:text-[48px] font-black text-white leading-[1.1] mb-5">픽셀헌터키우기</h3>
            <div className="mb-6">
              <span className="text-[14px] font-bold text-[#DDD6FE]">2D 픽셀 RPG / 방치형 액션</span>
              <span className="text-[12px] text-gray-400 block mt-1.5">2023년 3월 출시</span>
            </div>
            <p className="text-gray-300 leading-[1.8] text-[14px] md:text-[15px] mb-[30px] mx-auto text-center">
              최강의 방치형 RPG! 수백 마리의 몬스터와 화려한 전투를 즐기세요.
              <br />
              다양한 무기와 장비, 오프라인 보상 시스템으로 언제 어디서나 성장하는 <br />헌터의 모험. <br />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://play.google.com/store/apps/details?id=com.zilliongames.hunteridle" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-6 py-[18px] min-w-[160px] rounded-full bg-gradient-to-r from-[#C084FC] to-[#93C5FD] text-white text-[16px] font-bold hover:shadow-[0_0_40px_rgba(192,132,252,0.5)] hover:scale-[1.05] transition-all duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.196 12l2.502-2.492zM5.864 3.658L16.8 9.99l-2.302 2.302-8.635-8.635z" /></svg>
                Google Play
              </a>
              <a href="https://apps.apple.com/kr/app/%ED%94%BD%EC%85%80-%ED%97%8C%ED%84%B0-%ED%82%A4%EC%9A%B0%EA%B8%B0-%EB%B0%A9%EC%B9%98%ED%98%95-rpg/id1664366717" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-6 py-[18px] min-w-[160px] rounded-full bg-white text-black text-[16px] font-bold hover:bg-gray-100 hover:scale-[1.05] transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                App Store
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
