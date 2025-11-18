import Image from "next/image";

import WaitListForm from "@/components/molecules/WaitListForm/WaitListForm";

const HeroWriteUp = () => {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-center gap-2.5 bg-white/10 w-[216.32px] h-[31px] rounded-full">
        <Image
          src="/assets/icons/robot.svg"
          alt="rocket-icon"
          width={16}
          height={16}
          className=""
        />
        <span className="text-[14px] text-gray-200">AI-powered experience</span>
      </div>
      <h1 className="font-heading font-medium text-[48px] text-white m-0 p-0">
        Documentation That <span className="text-white/50 italic">Thinks </span>
        With You
      </h1>
      <p className="text-gray-300 max-w-[657px] w-full">
        From quick start guides to API references, the AI assistant surfaces
        answers, insights, and updates tailored to every user’s journey.
      </p>
      <WaitListForm />
    </div>
  );
};

export default HeroWriteUp;
