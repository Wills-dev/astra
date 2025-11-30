import GuideCardOne from "@/components/molecules/GuideCardOne/GuideCardOne";
import GuideCardThree from "@/components/molecules/GuideCardThree/GuideCardThree";
import GuideCardTwo from "@/components/molecules/GuideCardTwo/GuideCardTwo";

const GuideCardsWrapper = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-6">
      <GuideCardOne />
      <GuideCardTwo />
      <GuideCardThree />
    </div>
  );
};

export default GuideCardsWrapper;
