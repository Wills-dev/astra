import TitleButton from "@/components/atoms/TitleButton/TitleButton";

const FaqHeader = () => {
  return (
    <div className="flex-1">
      <div className="max-w-[500px] w-full space-y-2">
        <TitleButton
          title="Insights & analytics"
          srcIcon="/assets/icons/clock.svg"
          parentStyle="bg-white w-[162px] h-[28px]"
          childStyle="text-xs text-gray-900"
        />
        <h2 className="sm:text-[48px] text-2xl font-medium font-heading leading-[100%] tracking-[-0.006em]">
          Know Where Users Struggle and Fix It Faster
        </h2>
        <p className="pt-2 leading-6 tracking-[0.014em] text-gray-600 max-sm:text-sm">
          Astra provides real-time insights into user behavior: what they search
          for, what confuses them, and which sections need more clarity.
        </p>
      </div>
    </div>
  );
};

export default FaqHeader;
