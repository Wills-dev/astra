import CardLayout from "@/components/atoms/CardLayout/CardLayout";
import StepArrow from "@/components/atoms/StepArrow/StepArrow";
import StepCard from "@/components/atoms/StepCard/StepCard";
import InfoBlock from "../InfoBlock/InfoBlock";

const HeroCardOne = () => {
  return (
    <CardLayout>
      <div className="flex flex-col justify-between">
        <div className="h-[166px] py-[50.69px] px-[25.35px] border-[#F0F1F1B2] rounded-[10.14px] border-[0.63px] bg-[#FAFAFA]">
          <div className="h-full w-full flex justify-center items-center">
            <div className="flex items-center">
              <StepCard label="Initialize" />
              <StepArrow />
              <StepCard label="Configure" />
              <StepArrow />
              <StepCard label="Deploy" />
            </div>
          </div>
        </div>
        <InfoBlock
          iconUrl="/assets/icons/frame.svg"
          title="Quick Start Guide"
          description="Get up and running in minutes. The AI assistant walks users through setup, key configurations, and first API calls"
        />
      </div>
    </CardLayout>
  );
};

export default HeroCardOne;
