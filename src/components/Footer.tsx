import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a14] text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="py-14 md:py-20 flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16">
          <div className="space-y-5">
            <Image
              src="/logo-horizontal.png"
              alt="Zillion Games"
              width={160}
              height={36}
              className="h-7 w-auto brightness-0 invert opacity-80"
            />
            <p className="text-[14px] text-gray-500 leading-[1.8] max-w-[280px]">
              끝없는 상상력으로 새로운 세계를 만들어가는
              인터랙티브 엔터테인먼트 스튜디오
            </p>
          </div>

          <div className="flex gap-16 md:gap-24">
            <div>
              <h4 className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-6">바로가기</h4>
              <nav className="flex flex-col gap-3.5">
                {[
                  { label: "회사 소개", href: "#about" },
                  { label: "게임", href: "#games" },
                  { label: "복리후생", href: "#benefits" },
                  { label: "연락처", href: "#contact" },
                ].map((link) => (
                  <a key={link.label} href={link.href} className="text-[14px] text-gray-600 hover:text-gray-300 transition-colors duration-200">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-6">연락처</h4>
              <div className="flex flex-col gap-3.5">
                <a href="mailto:jhlee@zilliongames.net" className="text-[14px] text-gray-600 hover:text-gray-300 transition-colors duration-200">
                  jhlee@zilliongames.net
                </a>
                <span className="text-[14px] text-gray-600">
                  경기 성남시 분당구 판교역로 231
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-32 md:py-40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-[16px] md:text-[18px] text-gray-600">
            &copy; {new Date().getFullYear()} Zillion Games. All rights reserved.
          </span>
          <div className="flex items-center gap-10 text-[16px] md:text-[18px] text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
