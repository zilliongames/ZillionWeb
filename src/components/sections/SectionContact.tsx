"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function SectionContact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id="contact" className="fp-section bg-[#0a0a14] flex-col !justify-between">
      {/* 메인 콘텐츠 */}
      <div ref={ref} className="flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-block px-5 py-2 rounded-full text-[13px] font-bold tracking-wider uppercase bg-[#C084FC]/10 text-[#C084FC] mb-8">
                연락처
              </span>
              <h2 className="text-[36px] md:text-[48px] font-black text-white mb-4 leading-[1.15]">
                함께 <span className="gradient-text">이야기해요</span>
              </h2>
              <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.8]">
                비즈니스 제안, 채용 문의 등 무엇이든 편하게 연락해주세요.
              </p>
            </div>
            <div style={{ height: "50px" }} />

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* 왼쪽: 연락처 정보 */}
              <div className="w-full lg:w-2/5">
                <a href="mailto:jhlee@zilliongames.net" className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C084FC]/20 to-[#93C5FD]/20 flex items-center justify-center text-[#C084FC] shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mb-1">이메일</div>
                    <span className="text-gray-300 font-semibold text-[15px] group-hover:text-white transition-colors">jhlee@zilliongames.net</span>
                  </div>
                </a>
                <div style={{ marginTop: "24px" }} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/8">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C084FC]/20 to-[#93C5FD]/20 flex items-center justify-center text-[#C084FC] shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mb-1">주소</div>
                    <span className="text-gray-300 font-semibold text-[14px]">경기 성남시 분당구 판교역로 231,<br />에이치스퀘어 에스동 206호</span>
                  </div>
                </div>
              </div>

              {/* 오른쪽: 구글 지도 */}
              <div className="w-full lg:w-3/5">
                <div className="rounded-2xl overflow-hidden border border-white/8 h-[220px] md:h-[260px]">
                  <iframe
                    src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0+%EC%84%B1%EB%82%A8%EC%8B%9C+%EB%B6%84%EB%8B%B9%EA%B5%AC+%ED%8C%90%EA%B5%90%EC%97%AD%EB%A1%9C+231+%EC%97%90%EC%9D%B4%EC%B9%98%EC%8A%A4%ED%80%98%EC%96%B4&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Zillion Games 위치"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="w-full border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-28 md:py-32 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            <Image src="/logo-horizontal.png" alt="Zillion Games" width={140} height={32} className="h-6 w-auto brightness-0 invert opacity-60" />
            <span className="text-[14px] text-gray-600">&copy; {new Date().getFullYear()} Zillion Games</span>
          </div>
          <div className="flex items-center gap-8 text-[14px] text-gray-600">
            <a href="/privacy" className="hover:text-gray-400 transition-colors">개인정보처리방침</a>
            <a href="/terms" className="hover:text-gray-400 transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </div>
  );
}
