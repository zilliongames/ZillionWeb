"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("ko");

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-horizontal.png"
              alt="Zillion Games"
              width={180}
              height={40}
              className="h-8 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            {lang === "ko" ? "홈으로" : "Home"}
          </Link>
        </div>
      </header>

      {/* 본문 */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* 제목 & 언어 토글 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {lang === "ko" ? "개인정보처리방침" : "Privacy Policy"}
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              {lang === "ko"
                ? "최종 수정일: 2025년 05월 30일"
                : "Last Updated: 05/30/2025"}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1.5 self-start">
            <button
              onClick={() => setLang("ko")}
              className={`px-6 py-3 rounded-lg text-base font-semibold transition-all ${
                lang === "ko"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              한국어
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-6 py-3 rounded-lg text-base font-semibold transition-all ${
                lang === "en"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* 콘텐츠 */}
        <article className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-[#C084FC] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800">
          {lang === "ko" ? <KoreanContent /> : <EnglishContent />}
        </article>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-horizontal.png"
                alt="Zillion Games"
                width={120}
                height={28}
                className="h-6 w-auto"
              />
              <span className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Zillion Games. All rights
                reserved.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="text-gray-700 font-medium">
                {lang === "ko" ? "개인정보처리방침" : "Privacy Policy"}
              </span>
              <Link
                href="/terms"
                className="hover:text-gray-700 transition-colors"
              >
                {lang === "ko" ? "이용약관" : "Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ───────────────────── 한국어 ───────────────────── */
function KoreanContent() {
  return (
    <>
      <p>
        주식회사 질리언게임즈(이하 &ldquo;회사&rdquo;)는 통신비밀보호법,
        전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등
        정보통신서비스 제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을
        준수하며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에
        최선을 다하고 있습니다.
      </p>

      <h2>1. 수집하는 개인정보의 항목</h2>

      <h3>서비스 가입 시 수집 정보</h3>
      <ul>
        <li>플랫폼사업자의 고유식별번호</li>
        <li>이용자 이름 또는 별명</li>
        <li>기기고유번호(디바이스 아이디, UDID, IMEI)</li>
        <li>쿠키</li>
      </ul>

      <h3>서비스 이용 과정에서 생성되는 정보</h3>
      <ul>
        <li>이용자 상태정보</li>
        <li>방문 일시</li>
        <li>서비스 이용 기록</li>
        <li>불량 이용 기록</li>
        <li>쿠키</li>
      </ul>

      <h3>결제 및 고객상담 관련 정보</h3>
      <ul>
        <li>신용카드 정보, 통신사 정보</li>
        <li>구매내역 및 상품권 번호</li>
        <li>결제 관련 정보</li>
        <li>메일 주소</li>
        <li>실명 및 가족관계 증명(필요 시)</li>
      </ul>

      <h3>개인정보 수집 방법</h3>
      <p>
        당사와 서비스 제공 관련 제휴관계에 있는 플랫폼을 통해 자동으로 수집 또는
        서비스 가입이나 사용 중 이용자의 자발적 제공을 통해 수집합니다.
      </p>

      <h2>2. 개인정보의 수집 및 이용목적</h2>

      <h3>가. 기기고유번호 사용</h3>
      <p>
        기기고유번호는 게스트 계정으로 사용되며, 해시화를 통해 저장되고 원본값은
        보존되지 않습니다.
      </p>

      <h3>나. 서비스 제공에 관한 계약 이행</h3>
      <ul>
        <li>무료/유료 콘텐츠 제공</li>
        <li>청구서 발송, 본인인증</li>
        <li>구매 및 요금 결제, 요금추심</li>
      </ul>

      <h3>다. 회원관리</h3>
      <ul>
        <li>본인확인 및 개인식별</li>
        <li>불량회원 부정 이용 방지 및 비인가 사용방지</li>
        <li>가입의사 확인</li>
        <li>분쟁 조정을 위한 기록보존</li>
        <li>민원처리, 고지사항 전달</li>
      </ul>

      <h3>라. 신규 서비스 개발 및 마케팅</h3>
      <ul>
        <li>신규 서비스 개발 및 맞춤 서비스 제공</li>
        <li>통계학적 특성에 따른 광고 게재</li>
        <li>서비스 유효성 확인</li>
        <li>이벤트 및 광고성 정보 제공, 접속빈도 파악</li>
      </ul>

      <h2>3. 개인정보의 공유 및 제공</h2>
      <p>
        회사는 이용자들의 개인정보를 개인정보의 수집목적 및 이용목적에서 고지한
        범위 내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여
        이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다.
      </p>
      <p>다만, 아래의 경우에는 예외로 합니다:</p>
      <ul>
        <li>이용자가 사전에 공개에 동의한 경우</li>
        <li>법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
      </ul>

      <h2>4. 개인정보의 취급위탁</h2>
      <p>
        회사는 서비스 향상을 위해서 개인정보를 위탁할 수 있으며, 관련한 사항이
        진행되는 대로 변경에 대한 공지를 할 수 있습니다.
      </p>

      <h2>5. 개인정보의 보유 및 이용기간</h2>
      <p>
        이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체
        없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안
        보존합니다.
      </p>

      <h3>회사 내부 방침에 의한 보유</h3>
      <ul>
        <li>부정이용기록: 1년</li>
      </ul>

      <h3>관련 법령에 의한 보유</h3>
      <ul>
        <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
        <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
        <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
        <li>본인확인에 관한 기록: 6개월 (정보통신망법)</li>
        <li>방문에 관한 기록: 3개월 (통신비밀보호법)</li>
      </ul>

      <h2>6. 개인정보 파기절차 및 방법</h2>

      <h3>파기절차</h3>
      <p>
        이용자가 서비스 가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로
        옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간
        저장된 후 파기됩니다.
      </p>

      <h3>파기방법</h3>
      <ul>
        <li>종이에 출력된 개인정보: 분쇄기로 분쇄하거나 소각</li>
        <li>전자적 파일 형태의 개인정보: 기록을 재생할 수 없는 기술적 방법으로 삭제</li>
      </ul>

      <h2>7. 이용자 및 법정대리인의 권리</h2>
      <ul>
        <li>등록되어 있는 개인정보를 조회하거나 수정할 수 있습니다.</li>
        <li>동의를 거부하거나 서비스 이용 해지를 요청할 수 있습니다.</li>
        <li>서비스 내 &lsquo;정보 수정&rsquo; 또는 고객센터를 통해 열람 및 정정이 가능합니다.</li>
        <li>서비스 내 &lsquo;탈퇴&rsquo; 또는 고객센터를 통해 탈퇴가 가능합니다.</li>
        <li>오류 정정을 요청한 경우 정정을 완료하기 전까지 해당 정보를 이용하지 않습니다.</li>
        <li>제3자에게 제공한 경우 정정 처리결과를 지체 없이 통지합니다.</li>
      </ul>

      <h2>8. 개인정보 자동 수집 장치(쿠키)</h2>

      <h3>쿠키 사용</h3>
      <p>
        회사는 이용자들에게 맞춤 서비스를 제공하기 위해 이용자의 정보를 저장하고
        수시로 불러오는 &lsquo;쿠키(cookie)&rsquo;를 사용합니다. 쿠키는 방문 사이트
        서비스, 접속 형태, 접속 시간 등을 분석하는 데 사용됩니다.
      </p>

      <h3>쿠키 선택권</h3>
      <ul>
        <li>모든 쿠키를 허용</li>
        <li>쿠키가 저장될 때마다 확인</li>
        <li>모든 쿠키의 저장을 거부</li>
      </ul>
      <p>
        단, 쿠키 저장을 거부할 경우 로그인이 필요한 일부 서비스는 이용이 어려울 수
        있습니다.
      </p>

      <h3>기기식별번호 자동 수집</h3>
      <p>
        게임서비스 애플리케이션 실행 시 기기식별번호가 자동 수집됩니다.
        친구등록/추천 기능 제공을 위해 고유식별번호 및 친구목록이 자동 수집되며, 수집
        거부 시 게임 서비스 정상 이용이 불가합니다.
      </p>

      <h2>9. 개인정보의 기술적/관리적 보호 대책</h2>

      <h3>가. 해킹 등에 대비한 대책</h3>
      <ul>
        <li>정기적 자료 백업</li>
        <li>암호화 통신(SSL 등)</li>
        <li>침입차단시스템 운영</li>
        <li>보안 기술적 장치 구축</li>
      </ul>

      <h3>나. 취급 직원의 관리</h3>
      <ul>
        <li>개인정보 취급 담당자 최소화</li>
        <li>별도 비밀번호 부여 및 정기적 갱신</li>
        <li>수시 교육 실시</li>
      </ul>

      <h3>다. 개인정보보호전담기구</h3>
      <p>
        개인정보취급방침 이행사항을 확인하고 문제 발견 시 즉시 수정합니다.
      </p>

      <h3>책임 제한</h3>
      <p>
        이용자 본인의 부주의나 회사의 고의 또는 중대한 과실이 아닌 사유로
        개인정보가 유출되어 발생한 문제에 대해 회사는 일체의 책임을 지지 않습니다.
      </p>

      <h2>10. 제3자 웹사이트, 링크, 광고 및 서비스</h2>
      <p>
        이용자는 서비스를 사용하는 동안 회사가 통제할 수 없으며 회사가 책임지지
        않는 다른 사이트로 이동할 수 있음을 인지해야 합니다. 제3자는 IP 주소, 쿠키,
        웹 비콘 등을 통해 광고를 제공할 수 있습니다.
      </p>
      <p>관련 제3자 개인정보 보호정책:</p>
      <ul>
        <li>
          <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
        <li>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google</a>
        </li>
        <li>
          <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple</a>
        </li>
      </ul>

      <h2>11. 개인정보관리책임자 및 담당자</h2>
      <ul>
        <li><strong>이름:</strong> 이정훈</li>
        <li><strong>직위:</strong> 대표</li>
        <li><strong>이메일:</strong> jhlee@zilliongames.net</li>
        <li><strong>전화:</strong> 070-8028-4407</li>
      </ul>

      <h2>12. 기타 신고 기관</h2>
      <ul>
        <li>
          KISA 개인정보침해신고센터:{" "}
          <a href="http://privacy.kisa.or.kr" target="_blank" rel="noopener noreferrer">privacy.kisa.or.kr</a>{" "}
          (02-405-5118)
        </li>
        <li>
          정보보호마크인증위원회:{" "}
          <a href="http://www.eprivacy.or.kr" target="_blank" rel="noopener noreferrer">www.eprivacy.or.kr</a>{" "}
          (02-550-9531~2)
        </li>
        <li>
          대검찰청 첨단범죄수사과:{" "}
          <a href="http://www.spo.go.kr" target="_blank" rel="noopener noreferrer">www.spo.go.kr</a>{" "}
          (02-3480-2000)
        </li>
        <li>
          경찰청 사이버안전국:{" "}
          <a href="http://www.ctrc.go.kr" target="_blank" rel="noopener noreferrer">www.ctrc.go.kr</a>{" "}
          (182)
        </li>
      </ul>

      <h2>13. 고지의 의무</h2>
      <p>
        현 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 시에는 시행일자 최소
        7일 전부터 (개인정보의 수집 및 활용, 제3자 제공 등 중요사항의 변경은
        시행일 30일 전부터) 질리언게임즈 홈페이지 또는 각 게임별 커뮤니티를 통하여
        공지할 것입니다.
      </p>

      <h2>부칙</h2>
      <p>본 개인정보처리방침은 2023년 03월 20일부터 시행됩니다.</p>
    </>
  );
}

/* ───────────────────── English ───────────────────── */
function EnglishContent() {
  return (
    <>
      <p>
        Zillion Games Co., Ltd. (hereinafter referred to as the
        &ldquo;Company&rdquo;) complies with the Personal Information Protection
        Act, the Protection of Communications Secrets Act, the
        Telecommunications Business Act, and other relevant laws and regulations
        to protect the rights and interests of users.
      </p>

      <h2>1. Personal Information Collected</h2>

      <h3>Information Collected Upon Registration</h3>
      <ul>
        <li>Unique identification number from platform providers</li>
        <li>Username or nickname</li>
        <li>Device identification number (Device ID, UDID, IMEI)</li>
        <li>Cookies</li>
      </ul>

      <h3>Information Generated During Service Use</h3>
      <ul>
        <li>User status information</li>
        <li>Visit date and time</li>
        <li>Service usage records</li>
        <li>Violation records</li>
        <li>Cookies</li>
      </ul>

      <h3>Payment and Customer Inquiry Information</h3>
      <ul>
        <li>Credit card information, carrier information</li>
        <li>Purchase history and gift card numbers</li>
        <li>Payment-related information</li>
        <li>Email address</li>
        <li>Real name and family relationship proof (when required)</li>
      </ul>

      <h3>Methods of Collection</h3>
      <p>
        Personal information is automatically collected through platforms in
        partnership with our service, or voluntarily provided by users during
        registration and use of the service.
      </p>

      <h2>2. Purpose of Collection and Use</h2>

      <h3>a. Device Identification Number</h3>
      <p>
        Device identification numbers are used as guest accounts, stored via
        hashing, and original values are not preserved.
      </p>

      <h3>b. Fulfillment of Service Contracts</h3>
      <ul>
        <li>Provision of free/paid content</li>
        <li>Billing, identity verification</li>
        <li>Purchases, fee payments, and debt collection</li>
      </ul>

      <h3>c. Member Management</h3>
      <ul>
        <li>Identity verification and individual identification</li>
        <li>Prevention of fraudulent use by unauthorized members</li>
        <li>Confirmation of intent to register</li>
        <li>Record retention for dispute resolution</li>
        <li>Complaint handling and notice delivery</li>
      </ul>

      <h3>d. New Service Development and Marketing</h3>
      <ul>
        <li>Development of new services and personalized offerings</li>
        <li>Advertisement placement based on statistical characteristics</li>
        <li>Service validity verification</li>
        <li>Provision of events and promotional information, access frequency analysis</li>
      </ul>

      <h2>3. Sharing and Disclosure of Personal Information</h2>
      <p>
        The Company uses personal information within the scope notified at the
        time of collection and does not disclose personal information to third
        parties without prior consent of the user.
      </p>
      <p>Exceptions include:</p>
      <ul>
        <li>When the user has given prior consent to disclosure</li>
        <li>When required by law or requested by investigative agencies pursuant to legal procedures</li>
      </ul>

      <h2>4. Entrustment of Personal Information Processing</h2>
      <p>
        The Company may entrust personal information for service improvement and
        will provide notice of any related changes.
      </p>

      <h2>5. Retention and Use Period</h2>
      <p>
        Personal information is promptly destroyed when the purpose of
        collection and use has been achieved. However, the following information
        is retained for the specified periods:
      </p>

      <h3>Retention per Company Policy</h3>
      <ul>
        <li>Fraudulent use records: 1 year</li>
      </ul>

      <h3>Retention per Applicable Laws</h3>
      <ul>
        <li>Records of contracts or subscription withdrawal: 5 years (E-Commerce Act)</li>
        <li>Records of payment and supply of goods: 5 years (E-Commerce Act)</li>
        <li>Records of consumer complaints or dispute resolution: 3 years (E-Commerce Act)</li>
        <li>Records of identity verification: 6 months (Information and Communications Network Act)</li>
        <li>Records of visits: 3 months (Protection of Communications Secrets Act)</li>
      </ul>

      <h2>6. Destruction Procedures and Methods</h2>

      <h3>Destruction Procedures</h3>
      <p>
        Information entered for service registration is transferred to a
        separate database after the purpose is fulfilled and destroyed after a
        specified period in accordance with internal policies and relevant laws.
      </p>

      <h3>Destruction Methods</h3>
      <ul>
        <li>Printed personal information: Shredded or incinerated</li>
        <li>Electronic files: Deleted using technical methods that prevent reproduction</li>
      </ul>

      <h2>7. Rights of Users and Legal Representatives</h2>
      <ul>
        <li>Users may view or modify their registered personal information.</li>
        <li>Users may refuse consent or request termination of service use.</li>
        <li>Users may view and correct information through the in-service &ldquo;Edit Information&rdquo; feature or customer center.</li>
        <li>Users may withdraw through the in-service &ldquo;Withdraw&rdquo; feature or customer center.</li>
        <li>When a correction is requested, the information will not be used until the correction is completed.</li>
        <li>If provided to a third party, the correction result will be notified without delay.</li>
      </ul>

      <h2>8. Automatic Collection Devices (Cookies)</h2>

      <h3>Use of Cookies</h3>
      <p>
        The Company uses cookies to store and retrieve user information for
        personalized service delivery. Cookies are used to analyze visited
        service pages, access types, and access times.
      </p>

      <h3>Cookie Options</h3>
      <ul>
        <li>Allow all cookies</li>
        <li>Confirm each time a cookie is stored</li>
        <li>Refuse all cookie storage</li>
      </ul>
      <p>
        However, refusing cookies may limit access to some services that require
        login.
      </p>

      <h3>Automatic Collection of Device Identifiers</h3>
      <p>
        Device identifiers are automatically collected upon launching the game
        application. Unique identifiers and friend lists are collected for
        friend registration/recommendation features. Refusing collection will
        prevent normal use of game services.
      </p>

      <h2>9. Technical and Administrative Security Measures</h2>

      <h3>a. Anti-Hacking Measures</h3>
      <ul>
        <li>Regular data backups</li>
        <li>Encrypted communications (SSL, etc.)</li>
        <li>Intrusion prevention systems</li>
        <li>Security technical infrastructure</li>
      </ul>

      <h3>b. Personnel Management</h3>
      <ul>
        <li>Minimization of personnel with access to personal information</li>
        <li>Separate passwords with regular updates</li>
        <li>Regular training sessions</li>
      </ul>

      <h3>c. Privacy Protection Organization</h3>
      <p>
        Monitors compliance with the privacy policy and immediately corrects any
        issues found.
      </p>

      <h3>Limitation of Liability</h3>
      <p>
        The Company is not liable for problems arising from personal information
        leaks caused by the user&apos;s own negligence or circumstances that do not
        constitute the Company&apos;s intentional act or gross negligence.
      </p>

      <h2>10. Third-Party Websites, Links, Advertisements, and Services</h2>
      <p>
        Users should be aware that they may navigate to other sites beyond the
        Company&apos;s control during service use. Third parties may serve
        advertisements through IP addresses, cookies, and web beacons.
      </p>
      <p>Related third-party privacy policies:</p>
      <ul>
        <li>
          <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
        <li>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google</a>
        </li>
        <li>
          <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple</a>
        </li>
      </ul>

      <h2>11. Privacy Officer</h2>
      <ul>
        <li><strong>Name:</strong> Lee Jeong-hoon</li>
        <li><strong>Position:</strong> CEO</li>
        <li><strong>Email:</strong> jhlee@zilliongames.net</li>
        <li><strong>Phone:</strong> 070-8028-4407</li>
      </ul>

      <h2>12. User Rights</h2>
      <p>Users may request the following:</p>
      <ul>
        <li>Access, correction, and deletion of data</li>
        <li>Restriction of processing</li>
        <li>Objection to automated decision-making</li>
        <li>Data portability</li>
      </ul>
      <p>
        <strong>Contact:</strong> csgb@zilliongames.net
      </p>

      <h2>13. International Transfers</h2>
      <p>
        Zillion Games is a Korean company. Data is transferred to and stored on
        Amazon Cloud Services in Korea. For GDPR compliance, we rely on:
      </p>
      <ul>
        <li>Standard data protection contractual clauses</li>
        <li>Performance of a contract for service provision</li>
        <li>User consent</li>
      </ul>

      <h2>14. Notice for California Residents</h2>
      <p>
        <strong>Right to Opt-Out of Sale:</strong> The Company does not sell
        personal information for monetary consideration. However, advertising or
        marketing partners may receive:
      </p>
      <ul>
        <li>Identifiers (advertising IDs, IP addresses, names, emails)</li>
        <li>Internet activity information (technical information for ad selection/delivery)</li>
      </ul>
      <p>
        <strong>Right to Non-Discrimination:</strong> Users will not be
        discriminated against for exercising their CCPA rights.
      </p>

      <h2>15. Age Restrictions</h2>
      <p>
        The service is intended for users aged 13 and above. If we discover
        personal information of anyone under 13, it will be deleted immediately.
      </p>

      <h2>16. Changes to This Policy</h2>
      <p>
        This policy may be updated as needed. Changes will be announced on this
        page and through other appropriate means at least 7 days before
        implementation (30 days for significant changes).
      </p>

      <h2>Supplementary Provisions</h2>
      <p>This Privacy Policy is effective as of March 20, 2023.</p>
    </>
  );
}
