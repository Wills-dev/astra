import WaitListForm from "@/components/molecules/WaitListForm/WaitListForm";
import TitleButton from "@/components/atoms/TitleButton/TitleButton";

const HeroWriteUp = () => {
  return (
    <div className="w-full space-y-4">
      <TitleButton
        srcIcon="/assets/icons/robot.svg"
        title="AI-powered experience"
      />
      <h1 className="font-heading font-medium text-[48px] text-white leading-[100%] ">
        Documentation That <span className="text-white/50 italic">Thinks </span>
        With You
      </h1>
      <p className="text-gray-300 max-w-[657px] w-full leading-6 tracking-[-0.006em]">
        From quick start guides to API references, the AI assistant surfaces
        answers, insights, and updates tailored to every user’s journey.
      </p>
      <WaitListForm />
    </div>
  );
};

export default HeroWriteUp;
