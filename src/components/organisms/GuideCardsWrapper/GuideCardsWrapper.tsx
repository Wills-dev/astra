import GuideCardOne from "@/components/molecules/GuideCardOne/GuideCardOne";
import GuideCardTwo from "@/components/molecules/GuideCardTwo/GuideCardTwo";

const GuideCardsWrapper = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-6">
      <GuideCardOne />
      <GuideCardTwo />
      <GuideCardTwo />
    </div>
  );
};

export default GuideCardsWrapper;
