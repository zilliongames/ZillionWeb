"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const games = [
  {
    title: "픽셀헌터키우기",
    genre: "2D 픽셀 RPG / 방치형 액션",
    release: "2023년 3월 출시",
    desc: "최강의 방치형 RPG! 수백 마리의 몬스터와 화려한 전투를 즐기세요.\n 다양한 무기와 장비, 오프라인 보상 시스템으로 언제 어디서나 성장하는 헌터의 모험.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.zilliongames.hunteridle",
    youtubeId: "aiJN2c6ydPU",
    videoSrc: null as string | null,
    bgImage: null as string | null,
    screenshots: [
      "https://play-lh.googleusercontent.com/ibHn814f0hOU7HzCBeWTn_wecpt_Kqqk6FtBJ6IePisYSYy0KCqVJi3AzLtEaF-WuA=w526-h296-rw",
      "https://play-lh.googleusercontent.com/6D-PwLqZeoq4tj7I9cyMfnM0j3lCvVMKHVkkXqF9QBL3imDL-wRvgChZnlCqeM9L-g=w526-h296-rw",
      "https://play-lh.googleusercontent.com/Ykm19-Pv31PJ8Vi9wUkcq8joUEmY8wc2--T52b1zVQEB7ozKfEE0ojnm_Hg25noQ8amw=w526-h296-rw",
      "https://play-lh.googleusercontent.com/QB4JmEJtupRYeIUTmDDSpZWx7I1SPLyMg7TbxHEhMr-9s7ogrQJYLvpnzZ9Lre296vU=w526-h296-rw",
      "https://play-lh.googleusercontent.com/tbh5JGim06FujaqnG3oiqhgVozuvuikKDq_CD_UpCc7V4lY7QJABl1vetmJAgkUx-ao=w526-h296-rw",
      "https://play-lh.googleusercontent.com/K2oui3ik9rmlvkj47f0fQAChwhobzIY3rEeHeTiEm7bDxpZjs9lGEUyC98zuUgh5Xv8=w526-h296-rw",
    ],
  },
  {
    title: "스위칭히어로즈",
    genre: "전략 / 영웅 수집 RPG",
    release: "2025년 2월 출시",
    desc: "수백 명의 영웅을 수집하고 나만의 전략으로 최강의 팀을 구성하세요. 스토리 모드, 길드전, 월드 보스, 아레나까지 다양한 콘텐츠가 기다립니다.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.zilliongames.collectionidle",
    youtubeId: "-HgkS3i_uas",
    videoSrc: "/video-switching-heroes.mp4",
    bgImage: "/bg-switching-heroes.jpg",
    screenshots: [
      "https://play-lh.googleusercontent.com/RZoKRODj3H2wEiq8oRWcZiLduKRU8ykvAqC_RH-I8ROHn-P25eSZVciVLxsdVyjKHA=w526-h296-rw",
      "https://play-lh.googleusercontent.com/43EhceAzpD8Q56xqlZ3-XX7iOVzaHnc0S3R-TxDK0GH8SUyr4J2fE3THDG2esD04-p0=w526-h296-rw",
      "https://play-lh.googleusercontent.com/RulA4fm33HMmtAZkl88beFCbZg5xM7hrXoTGqJiaDtrrw42NxUoTfFQZ53aqf2CiVA=w526-h296-rw",
      "https://play-lh.googleusercontent.com/JXJX4T2EcPXJNxFRbvsEYjN9DvRFVC-7un8HuGikGpTG0_tzogKIirb3W9xuKo9-JHE=w526-h296-rw",
      "https://play-lh.googleusercontent.com/FNe_LaYi8hNAN4S6ve3wyY8wl6upzkOUswcwDAJ4wwZCF-UyHK540uIcmw9waRFVSA=w526-h296-rw",
      "https://play-lh.googleusercontent.com/WVQQBHA2AE-v0_wvTZcRevBi2OFp8DseXFjaAYinW5CXcrhlPB8RgKt86sA8sFuCnBY=w526-h296-rw",
    ],
  },
];

function GameCard({ game }: { game: (typeof games)[0] }) {
  const [showVideo, setShowVideo] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative text-center rounded-[32px] overflow-hidden px-12 md:px-40 py-16 md:py-24"
    >
      {/* 배경 이미지 */}
      {game.bgImage && (
        <>
          <Image
            src={game.bgImage}
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-[#0a0a14]/80" />
        </>
      )}

      {/* 게임 정보 */}
      <div className="relative z-10 mb-10 md:mb-14">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          서비스 중
        </span>

        <h3 className="text-[40px] md:text-[52px] lg:text-[60px] font-black text-white leading-[1.1] mb-4">
          {game.title}
        </h3>

        <div className="mb-5">
          <span className="text-[15px] font-bold text-[#DDD6FE]">{game.genre}</span>
          <span className="text-[13px] text-gray-500 block mt-1">{game.release}</span>
        </div>

        <p className="text-gray-400 leading-[1.8] text-[15px] md:text-[16px] max-w-[520px] mx-auto mb-8">{game.desc}</p>

        <a
          href={game.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-4 px-[52px] py-[23px] rounded-full bg-gradient-to-r from-[#C084FC] to-[#93C5FD] text-white text-[15px] font-bold hover:shadow-[0_0_40px_rgba(192,132,252,0.5)] hover:scale-[1.05] transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.196 12l2.502-2.492zM5.864 3.658L16.8 9.99l-2.302 2.302-8.635-8.635z" />
          </svg>
          구글 플레이
        </a>
      </div>

      {/* 미디어 영역 */}
      <div className="relative z-10 max-w-[800px] mx-auto space-y-6">
        {game.videoSrc ? (
          <div className="flex justify-center">
            <div className="relative rounded-[24px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] w-full max-w-[320px] md:max-w-[360px] aspect-[9/16] ring-1 ring-white/10">
              <video src={game.videoSrc} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        ) : (
          <div className="relative rounded-[24px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] aspect-video group ring-1 ring-white/5">
            {showVideo ? (
              <iframe
                src={`https://www.youtube.com/embed/${game.youtubeId}?autoplay=1&rel=0`}
                title={`${game.title} 트레일러`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <button onClick={() => setShowVideo(true)} className="relative w-full h-full cursor-pointer">
                <Image
                  src={`https://img.youtube.com/vi/${game.youtubeId}/maxresdefault.jpg`}
                  alt={`${game.title} 트레일러`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-2xl">
                    <svg className="w-9 h-9 md:w-10 md:h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            )}
          </div>
        )}

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={2.2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{ 640: { slidesPerView: 2.8 }, 1024: { slidesPerView: 3.2 } }}
          className="!pb-12 game-swiper"
        >
          {game.screenshots.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <Image src={src} alt={`${game.title} 스크린샷 ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" unoptimized />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default function Games() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="games" className="relative py-28 md:py-40 overflow-hidden bg-[#0a0a14]">
      <div className="hero-orb w-[600px] h-[600px] bg-[#C084FC] -top-40 -right-40 opacity-[0.08]" />
      <div className="hero-orb w-[500px] h-[500px] bg-[#93C5FD] -bottom-40 -left-40 opacity-[0.06]" />

      <div ref={ref} className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 md:mb-32"
        >
          <span className="inline-block px-5 py-2 rounded-full text-[13px] font-bold tracking-wider uppercase bg-[#93C5FD]/10 text-[#93C5FD] mb-8">
            게임 소개
          </span>
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black text-white mb-8 leading-[1.15]">
            새로운 세계를
            <br />
            <span className="gradient-text">경험하세요</span>
          </h2>
          <p className="text-gray-500 max-w-[520px] mx-auto text-[16px] md:text-[18px] leading-[1.8]">
            독창적인 세계관과 혁신적인 게임플레이로
            전 세계 플레이어들에게 특별한 경험을 선사합니다.
          </p>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {games.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
