"use client";

import DocSection from "@/components/organisms/DocSection/DocSection";
import FaqWrapper from "@/components/organisms/FaqWrapper/FaqWrapper";
import GuideSection from "@/components/organisms/GuideSection/GuideSection";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import TeamSection from "@/components/organisms/TeamSection/TeamSection";
import TrustedSection from "@/components/organisms/TrustedSection/TrustedSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FaqWrapper />
      <TrustedSection />
      <GuideSection />
      <TeamSection />
      <DocSection />
    </div>
  );
}
