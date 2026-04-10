"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TermsPage() {
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
              {lang === "ko" ? "서비스 이용약관" : "Terms of Service"}
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
        <article className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-[#6C63FF] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800">
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
              <Link
                href="/privacy"
                className="hover:text-gray-700 transition-colors"
              >
                {lang === "ko" ? "개인정보처리방침" : "Privacy Policy"}
              </Link>
              <span className="text-gray-700 font-medium">
                {lang === "ko" ? "이용약관" : "Terms of Service"}
              </span>
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
      <h2>1. 약관 동의</h2>
      <p>
        이용자가 회사의 서비스에 접속하거나 이용하려면 본 약관에 동의해야 합니다.
        미성년자는 법정보호자의 동의를 얻은 후 서비스를 이용할 수 있습니다. 본
        약관은 App Store, Google Play, Facebook 등 모든 관련 서비스에 적용됩니다.
      </p>

      <h2>2. 약관 변경</h2>
      <p>
        회사는 관계 법령을 위배하지 않는 범위 내에서 약관을 개정할 수 있습니다.
        이용자가 계속 서비스를 이용하면 갱신된 약관에 동의한 것으로 간주합니다.
        동의하지 않을 경우 즉시 서비스 이용을 중단해야 합니다.
      </p>

      <h2>3. 개인정보 보호정책</h2>
      <p>
        개인정보 취급에 관한 사항은{" "}
        <Link href="/privacy" className="text-[#6C63FF]">
          개인정보처리방침
        </Link>
        을 참조하시기 바랍니다.
      </p>

      <h2>4. 계정</h2>
      <ul>
        <li>이용자가 로그인 세부정보의 보안에 대한 책임을 집니다.</li>
        <li>
          계정 삭제 시 모든 연계 정보(게임 레벨, 가상 화폐 등)의 이용권을
          상실합니다.
        </li>
        <li>계정에 대한 소유권이나 재산상 이득을 취할 수 없습니다.</li>
        <li>
          회사는 사전 통지 없이 계정을 제한, 중단, 수정, 삭제할 수 있습니다.
        </li>
      </ul>

      <h2>5. 서비스의 제공</h2>
      <ul>
        <li>약관 동의 후 즉시 서비스를 이용할 수 있습니다.</li>
        <li>부가적 서비스를 함께 제공할 수 있습니다.</li>
        <li>
          회원 등급별로 이용시간, 이용횟수, 서비스 범위를 차등하여 제공할 수
          있습니다.
        </li>
      </ul>

      <h2>6. 서비스 이용</h2>
      <p>
        서비스는 회사의 영업방침에 따라 정해진 시간에 제공되며, 기본적으로 24시간
        운영됩니다. 다음의 경우 서비스가 일시 정지될 수 있습니다:
      </p>
      <ul>
        <li>시스템 정기점검, 서버 증설, 네트워크 불안정</li>
        <li>정전, 서비스 설비 장애, 기간통신사업자 보수</li>
        <li>전시, 사변, 천재지변 등 통제 불가능한 상황</li>
      </ul>
      <p>
        유료 콘텐츠는 명시된 요금 지급 시 이용 가능합니다. 다운로드 애플리케이션
        사용 시 이동통신사 별도 요금이 발생할 수 있습니다. 모바일 기기 변경, 번호
        변경, 해외 로밍 시 일부 기능 이용이 불가능할 수 있으며 회사는 이에 대한
        책임을 지지 않습니다.
      </p>

      <h2>7. 서비스의 변경 및 중지</h2>
      <p>
        원활한 서비스 제공을 위해 서비스 내용을 변경할 수 있으며 사전에
        공지합니다. 긴급업데이트 등은 사후 공지할 수 있습니다. 영업양도,
        게임제공계약 만료, 매출 감소 등으로 인해 서비스를 중단할 수 있으며, 중단
        30일 전에 게임 초기화면에 공지합니다.
      </p>

      <h2>8. 정보 수집</h2>
      <ul>
        <li>회사는 이용자 간 채팅 등 통신내용을 저장할 수 있습니다.</li>
        <li>
          분쟁 조정, 민원 처리, 게임 질서 유지 목적으로만 해당 정보를
          열람합니다.
        </li>
        <li>
          사전 고지가 원칙이며, 금지행위 조사 시에는 사후 고지할 수 있습니다.
        </li>
        <li>모바일 기기 정보를 수집할 수 있습니다(개인정보 제외).</li>
        <li>
          서비스 개선을 위해 추가정보를 요청할 수 있습니다(이용자가 승낙 또는
          거절 가능).
        </li>
      </ul>

      <h2>9. 이용자의 의무</h2>
      <p>다음 행위는 금지되며, 위반 시 계정 조치를 받을 수 있습니다:</p>
      <ul>
        <li>허위사실 기재, 타인 정보 사용</li>
        <li>비정상적 방법으로 게임 정보 취득, 매매, 양도</li>
        <li>직원 가장, 타인 명의 도용</li>
        <li>타인의 신용카드, 은행 계좌 도용으로 콘텐츠 구매</li>
        <li>다른 회원의 개인정보 무단 수집, 유포</li>
        <li>도박 유도, 음란 정보 교류, 혐오 표현 유포</li>
        <li>무단 영리 목적 이용</li>
        <li>정보 무단 복제, 유통, 버그 악용</li>
        <li>지적재산권, 초상권 침해</li>
        <li>바이러스, 악성 코드 전송</li>
        <li>애플리케이션 변경, 해킹, 소스 코드 유출</li>
        <li>대리 육성 등의 행위</li>
        <li>법령 위반 또는 사회통념 위반 행위</li>
        <li>결제 어뷰징이 의심되는 경우</li>
      </ul>
      <p>
        계정 및 모바일 기기 관리 책임은 이용자에게 있으며, 결제 비밀번호 등 보안
        수단을 반드시 설정해야 합니다.
      </p>

      <h2>10. 가상 화폐 및 가상 상품</h2>
      <ul>
        <li>
          보석, 골드 등 가상 화폐 또는 게임 내 사용 가능한 아이템을 포함합니다.
        </li>
        <li>19세 미만인 경우 법정대리인의 동의가 필요합니다.</li>
        <li>현금 또는 기타 결제 수단으로 구매할 수 있습니다.</li>
        <li>
          가상 화폐 및 상품은 금전적 가치가 없으며, 현금이나 실제 재화로 교환할
          수 없습니다.
        </li>
        <li>회사에게서만 획득 가능하며, 타인에게 양도할 수 없습니다.</li>
        <li>
          구입은 최종적이며 거래 완료 시 환불이 불가능합니다(즉시 지급).
        </li>
        <li>
          회사는 사전고지 없이 가상 화폐 또는 상품을 관리, 조정, 변경, 제거할 수
          있습니다.
        </li>
        <li>
          계정 정지 또는 삭제 시 모든 가상 화폐 및 상품을 상실하며 보상이
          없습니다.
        </li>
      </ul>

      <h2>11. 환불 정책</h2>
      <ul>
        <li>서비스 내 모든 가상 화폐 또는 상품 구매는 원칙적으로 환불 불가입니다.</li>
        <li>
          예외: 법령에 따라 구매 철회가 필요한 경우 또는 구매 후 7일 이내
          미사용 시
        </li>
        <li>7일 이내라도 일부 사용 시 철회가 불가합니다.</li>
        <li>추가 제공 상품의 일부를 사용한 경우에도 철회가 불가합니다.</li>
        <li>선물 받은 가상 화폐 및 상품은 철회 또는 환금이 불가합니다.</li>
        <li>동일한 결제 수단으로 환불되며, 시기는 결제수단에 따라 상이합니다.</li>
        <li>
          9세 미만 미성년자의 법정대리인 동의 없는 거래는 취소할 수
          있습니다(신분증 제출 요청 가능).
        </li>
      </ul>

      <h2>12. 저작권</h2>
      <ul>
        <li>
          회사가 제작한 서비스 내 모든 콘텐츠의 저작권은 회사에 귀속됩니다.
        </li>
        <li>
          이용자는 회사가 제공한 정보를 회사 또는 제공업체의 사전동의 없이 영리
          목적으로 이용할 수 없습니다.
        </li>
        <li>
          이용자 콘텐츠(대화, 이미지, 사운드 등)에 대해 회사는 편집, 공연, 전송,
          배포, 2차적 저작물 작성 등 모든 형태로 이용할 수 있으며, 기간과 지역의
          제한이 없습니다.
        </li>
        <li>
          게임과 관련성 없는 이용자 콘텐츠는 이용자의 명시적 동의 없이 이용할 수
          없습니다.
        </li>
        <li>
          금지행위에 해당하는 게시물은 사전통지 없이 삭제 또는 이동될 수
          있습니다.
        </li>
        <li>회원탈퇴 후에도 본 조항은 계속 적용됩니다.</li>
      </ul>

      <h2>13. 정보의 제공 및 광고 게재</h2>
      <ul>
        <li>회사는 서비스 유지를 위해 광고를 게재할 수 있습니다.</li>
        <li>
          배너 또는 링크를 통해 타인이 제공하는 광고나 서비스로 연결될 수
          있습니다.
        </li>
        <li>
          연결된 영역의 서비스는 회사 영역이 아니므로 회사가 책임지지 않습니다.
        </li>
        <li>
          회사는 이용자의 개인정보를 통해 SMS, 스마트폰 알림, 이메일로 광고성
          정보를 발송할 수 있습니다.
        </li>
        <li>
          이용자는 언제든 수신을 거부할 수 있으며, 거부 시 광고성 정보를 발송하지
          않습니다.
        </li>
      </ul>

      <h2>14. 책임 제한</h2>
      <p>
        회사, 임직원, 파트너, 공급업체 등은 이용자의 서비스 사용으로 인한
        직접적 또는 결과적 손해에 대해 책임을 지지 않습니다.
      </p>

      <h2>15. 보증 면책 조항</h2>
      <p>
        서비스 이용은 전적으로 이용자의 책임이며, 서비스는 &ldquo;있는
        그대로&rdquo; 제공됩니다. 회사는 명시적, 묵시적 어떠한 형태의 보증도 하지
        않으며, 중단 없는 작동, 오류 시정, 바이러스 없음 등을 보증하지 않습니다.
      </p>

      <h2>16. 준거법</h2>
      <p>본 약관은 대한민국 법률에 따라 규율되고 해석됩니다.</p>

      <h2>17. 서비스 중단</h2>
      <p>
        회사는 특별한 사유나 사전 고지 없이 서비스 접근을 중단할 수 있으며, 모든
        정보를 파기할 수 있습니다. 약관의 모든 조항은 해지 후에도 효력을
        유지합니다.
      </p>

      <h2>문의</h2>
      <p>
        본 약관에 대한 문의사항은{" "}
        <a href="mailto:cs@zilliongames.net">cs@zilliongames.net</a>으로
        연락해주시기 바랍니다.
      </p>
    </>
  );
}

/* ───────────────────── English ───────────────────── */
function EnglishContent() {
  return (
    <>
      <h2>1. Acceptance of the Terms and Conditions</h2>
      <p>
        Users must agree to these terms before accessing Zillion Games services.
        Users under 13 years of age cannot use our services. Users aged 13-17 or
        minors must have legal guardian approval. Users bear responsibility for
        their interactions and communications on the platform.
      </p>

      <h2>2. Changes to the Terms and Conditions</h2>
      <p>
        The Company reserves the right to modify these Terms without advance
        notice. Changes are posted on the website, and continued use of the
        service constitutes acceptance of updated terms. Users who disagree
        should stop using the service immediately.
      </p>

      <h2>3. Privacy Policy</h2>
      <p>
        Please refer to the{" "}
        <Link href="/privacy" className="text-[#6C63FF]">
          Privacy Policy
        </Link>{" "}
        for information about how the Company handles user data.
      </p>

      <h2>4. Account</h2>
      <ul>
        <li>
          Users are solely responsible for maintaining login confidentiality and
          all account activities.
        </li>
        <li>
          Account termination results in loss of associated data (levels, virtual
          currency, goods).
        </li>
        <li>
          Guest accounts receive an identifier; changing devices may result in
          loss of paid virtual goods.
        </li>
        <li>
          Third-party service connections (Facebook, Google Play) may share
          profile information.
        </li>
        <li>
          Users cannot obtain ownership rights in accounts; the Company may
          suspend or delete accounts without notice.
        </li>
      </ul>

      <h2>5. Provision of Services</h2>
      <p>
        The Company makes services available upon agreement acceptance. Some
        services may have specified start dates. Additional services may be
        provided beyond those listed in these terms. Service access may be
        differentiated by user level.
      </p>

      <h2>6. Use of Services</h2>
      <p>
        These Terms constitute the entire agreement and supersede prior
        agreements. The Company may terminate services and deny access
        immediately without notice if users violate any provision. You agree that
        you will not be compensated under any circumstances for virtual goods or
        accounts lost due to access revocation.
      </p>
      <p>
        Services operate 24 hours unless otherwise stated. The Company may
        temporarily suspend services for:
      </p>
      <ul>
        <li>System maintenance, server updates, or network issues</li>
        <li>Power outages, equipment failures, or carrier maintenance</li>
        <li>Unforeseen events like natural disasters or emergencies</li>
      </ul>
      <p>
        Paid content requires specified fees. Network usage may incur carrier
        charges. Service functionality depends on device compatibility; the
        Company assumes no responsibility for functionality losses during device
        changes or overseas roaming.
      </p>

      <h2>7. Modification and Suspension of Service</h2>
      <p>
        The Company may modify services for operational needs with prior notice.
        Emergency updates may be notified afterward. The Company may suspend all
        services due to business reasons (business transfer, merger, contract
        expiration, revenue decline), with advance notice on the game&apos;s initial
        screen.
      </p>

      <h2>8. Information Collection</h2>
      <ul>
        <li>
          The Company may store chat content and communications between users.
        </li>
        <li>
          Information access occurs for dispute mediation, complaint handling,
          and game order maintenance.
        </li>
        <li>Third-party access requires legal authorization.</li>
        <li>
          The Company collects device information (settings, OS version, carrier
          data) for service improvement.
        </li>
      </ul>

      <h2>9. Obligations of the User</h2>
      <p>
        Users violating these terms face account suspension, including for:
      </p>
      <ul>
        <li>False information on applications or membership changes</li>
        <li>
          Acquiring game information through unauthorized services or abnormal
          methods
        </li>
        <li>Impersonating Company employees</li>
        <li>
          Fraudulent purchases using others&apos; payment methods
        </li>
        <li>
          Unauthorized collection or distribution of other users&apos; personal
          information
        </li>
        <li>
          Engaging in gambling, obscene communications, or harassment
        </li>
        <li>Using services for profit, business, or advertising purposes</li>
        <li>
          Unauthorized copying or distribution of service information
        </li>
        <li>Violating intellectual property or publicity rights</li>
        <li>Transmitting viruses or malicious code</li>
        <li>
          Modifying applications, reverse engineering servers, or creating fake
          servers
        </li>
        <li>Paying others to play games on their behalf</li>
        <li>Violating laws or social norms</li>
        <li>Suspected payment abuse through refunds or non-payment</li>
      </ul>
      <p>
        Users must manage their accounts securely and prevent unauthorized
        access. Users should set payment passwords to prevent fraud.
      </p>

      <h2>10. Virtual Goods and Virtual Money</h2>
      <p>
        Virtual currency (coins, gold coins, points) and virtual items may be
        purchased with real money by legal adults. Purchases must occur through
        the Company or authorized third-party stores only.
      </p>
      <p>
        You do not own Virtual Goods or Virtual Money but instead you purchase a
        limited personal revocable license to use Virtual Goods or Virtual Money
        exclusively within the Services. Virtual items have no cash value and
        cannot be exchanged for real money or goods.
      </p>
      <p>
        All sales are final with no refunds after purchase. The Company reserves
        rights to control, regulate, change, or remove virtual items without
        liability. Transfers outside the service are prohibited and void,
        potentially resulting in account termination. Account suspension or
        deletion results in loss of virtual currency and goods without
        compensation.
      </p>

      <h2>11. Refund Policy</h2>
      <ul>
        <li>
          All purchases of virtual currency or goods within the service are
          non-refundable.
        </li>
        <li>
          Exceptions: When withdrawal is required by law, or within 7 days of
          purchase if unused.
        </li>
        <li>
          Even within 7 days, partial use voids the right to withdrawal.
        </li>
        <li>
          If any part of additionally provided goods has been used, withdrawal is
          not possible.
        </li>
        <li>
          Gifted virtual currency and goods cannot be withdrawn or refunded.
        </li>
        <li>
          Refunds are processed through the same payment method; timing varies
          by method.
        </li>
        <li>
          Transactions by minors under 9 without legal guardian consent may be
          cancelled (ID verification may be required).
        </li>
      </ul>

      <h2>12. Our Rights to Use</h2>
      <p>
        User-submitted content (feedback, suggestions, ideas, communications)
        becomes non-confidential. The Company receives a perpetual, irrevocable,
        royalty-free, worldwide, fully sublicensable, and transferable license to
        use this content commercially or non-commercially without obligation to
        monitor, use, compensate, or respond.
      </p>

      <h2>13. Proprietary Rights and Limited License</h2>
      <p>
        Material from the service cannot be copied, reproduced, or distributed
        without express permission. The Company owns or licenses all content
        including names, logos, designs, text, artwork, and software, protected
        by patent, trademark, and copyright laws in Korea and abroad.
      </p>
      <p>
        The Company grants users a personal, limited, non-exclusive,
        non-transferable license to access services. The Company may modify,
        suspend, or discontinue services without liability. Users cannot modify
        applications, add programs, hack servers, or create unauthorized copies.
      </p>

      <h2>14. Providing Information and Posting Advertisements</h2>
      <ul>
        <li>
          The Company may post advertisements to maintain services.
        </li>
        <li>
          Users may be connected to third-party advertisements or services
          through banners or links.
        </li>
        <li>
          The Company assumes no responsibility for third-party services or
          damages caused by them.
        </li>
        <li>
          The Company may send promotional information via SMS, smartphone
          notifications, and email using user information.
        </li>
        <li>
          Users may opt out at any time, after which promotional information will
          not be sent.
        </li>
      </ul>

      <h2>15. Disclaimers and Limitation of Liability</h2>
      <p>
        Services are provided &ldquo;AS IS&rdquo; and &ldquo;AS
        AVAILABLE.&rdquo; ZILLION GAMES DISCLAIMS, AND YOU AT THIS MOMENT
        IRREVOCABLY WAIVE, ALL WARRANTIES, CONDITIONS, REPRESENTATIONS, AND
        ENDORSEMENTS regarding service availability, accuracy, and content.
      </p>
      <p>
        IN NO EVENT WILL ZILLION GAMES or affiliates be liable for direct,
        indirect, special, incidental, consequential, or punitive damages, even
        if advised of possible damages. Liability is capped at total payments
        made in the preceding 12 months. Some jurisdictions prohibit such
        limitations.
      </p>

      <h2>16. Indemnity</h2>
      <p>
        Users agree to defend, indemnify, and hold the Company, affiliates,
        directors, officers, employees, and partners harmless from claims,
        liabilities, and costs arising from service use violations, including
        claims that user-provided materials infringe third-party rights.
      </p>

      <h2>17. Governing Law and Disputes</h2>
      <p>
        These Terms are governed by Republic of Korea law. Disputes are submitted
        to confidential binding arbitration. However, intellectual property
        violations may be addressed through injunctions in Seoul Central District
        Court&apos;s exclusive jurisdiction. Dispute resolution occurs individually,
        not in class actions.
      </p>

      <h2>18. Notice to California Residents</h2>
      <p>
        Under Cal. Civil Code &sect; 1789.3, the Company is located at 206, 231,
        Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea.
        Service fees vary by selection. Contact:{" "}
        <a href="mailto:cs@zilliongames.net">cs@zilliongames.net</a> or visit
        our website&apos;s Contact Us page.
      </p>

      <h2>19. Waiver; Severability</h2>
      <p>
        Failure to enforce any right does not constitute waiver. Invalid
        provisions do not affect other enforceable portions.
      </p>

      <h2>20. No Assignment</h2>
      <p>
        Users cannot assign these Terms or rights without express written
        consent. Terms benefit the Company&apos;s successors and licensees.
      </p>

      <h2>21. Termination of Service</h2>
      <p>
        The Company may discontinue access to the service without special reason
        or prior notice. All information may be destroyed. All provisions of
        these Terms survive termination.
      </p>

      <h2>Contact Us</h2>
      <p>
        For questions or concerns regarding these Terms, please contact us at{" "}
        <a href="mailto:cs@zilliongames.net">cs@zilliongames.net</a>.
      </p>
    </>
  );
}
