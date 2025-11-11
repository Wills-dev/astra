import AnimatedHeroLine from "@/components/molecules/AnimatedHeroLine/AnimatedHeroLine";
import CardPatternWrapper from "@/components/molecules/CardPatternWrapper/CardPatternWrapper";
import HeroContent from "../HeroContent/HeroContent";

const HeroWrapper = () => {
  return (
    <div className="7xl:max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8">
      <HeroContent />
      <div className="flex justify-end gap-2">
        <AnimatedHeroLine />
        <div className="max-w-3xl w-full relative">
          <CardPatternWrapper />
        </div>
      </div>
    </div>
  );
};

export default HeroWrapper;
