import CardLayout from "@/components/atoms/CardLayout/CardLayout";
import InfoBlock from "../InfoBlock/InfoBlock";

import Image from "next/image";

const HeroCardFour = () => {
  return (
    <CardLayout>
      <div className="w-[262.33px] h-[150.81px] flex">
        <Image
          src="/assets/images/cards.svg"
          alt="Hero Card Four"
          width={262}
          height={151}
          className="w-auto h-full object-contain rounded-[10.14px]"
        />
      </div>
      <InfoBlock
        iconUrl="/assets/icons/insight.svg"
        title="Insights"
        description="Understand user behavior in your docs. See which topics trigger the most questions and where users need more clarity, all surfaced by the assistant."
      />
    </CardLayout>
  );
};

export default HeroCardFour;
