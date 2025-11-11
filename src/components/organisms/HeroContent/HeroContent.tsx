import HeroCardFive from "@/components/molecules/HeroCardFive/HeroCardFive";
import HeroCardFour from "@/components/molecules/HeroCardFour/HeroCardFour";
import HeroCardOne from "@/components/molecules/HeroCardOne/HeroCardOne";
import HeroCardThree from "@/components/molecules/HeroCardThree";
import HeroCardTwo from "@/components/molecules/HeroCardTwo/HeroCardTwo";

const HeroContent = () => {
  return (
    <div className=" w-full p-2 border-[0.6px] bg-linear-to-b from-[#BD16F3]/30 from-40% to-[#6C1F85]/50 to-100% rounded-[15.21px] px-[6.34px] py-[5.07px] border-white/30 shadow-[0_-10px_30px_-5px_rgba(189,22,243,0.4)] backdrop-blur-3xl">
      <div className="grid grid-cols-3 gap-2 w-fit">
        <div className="space-y-2">
          <HeroCardOne />
          <HeroCardTwo />
        </div>
        <HeroCardThree />
        <div className="space-y-2">
          <HeroCardFour />
          <HeroCardFive />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
