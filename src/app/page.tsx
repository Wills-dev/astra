"use client";

import FaqWrapper from "@/components/organisms/FaqWrapper/FaqWrapper";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import TrustedSection from "@/components/organisms/TrustedSection/TrustedSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FaqWrapper />
      <TrustedSection />
    </div>
  );
}
