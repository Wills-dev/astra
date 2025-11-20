import AnimatedHeroLine from "@/components/molecules/AnimatedHeroLine/AnimatedHeroLine";
import CardPatternWrapper from "@/components/molecules/CardPatternWrapper/CardPatternWrapper";
import HeroContent from "../HeroContent/HeroContent";
import HeroWriteUp from "../HeroWriteUp/HeroWriteUp";
import TopCompaniesWrapper from "../TopCompaniesWrapper/TopCompaniesWrapper";

const HeroWrapper = () => {
  return (
    <div className="2xl:max-w-7xl w-full mx-auto pl-4 sm:pl-6 lg:pl-14 pb-10">
      <div className="flex justify-end gap-2 h-[650px] overflow-y-hidden">
        <AnimatedHeroLine />
        <div className="max-w-3xl w-full relative overflow-x-hidden">
          <CardPatternWrapper />
          <HeroContent />
        </div>
      </div>
      <HeroWriteUp />
      <TopCompaniesWrapper />
    </div>
  );
};

export default HeroWrapper;
