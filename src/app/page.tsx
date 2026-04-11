import Header from "@/components/Header";
import FullPageNav from "@/components/FullPageNav";
import FullPageClass from "@/components/FullPageClass";
import SectionHero from "@/components/sections/SectionHero";

import SectionStats from "@/components/sections/SectionStats";

import SectionGame1 from "@/components/sections/SectionGame1";
import SectionGame2 from "@/components/sections/SectionGame2";
import SectionBenefits from "@/components/sections/SectionBenefits";
import SectionContact from "@/components/sections/SectionContact";

export default function Home() {
  return (
    <>
      <FullPageClass />
      <Header />
      <FullPageNav />
      <div className="fullpage-container">
        <SectionHero />
        <SectionStats />
        <SectionGame1 />
        <SectionGame2 />
        <SectionBenefits />
        <SectionContact />
      </div>
    </>
  );
}
