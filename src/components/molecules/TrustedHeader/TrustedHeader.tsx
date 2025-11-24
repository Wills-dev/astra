import TitleButton from "@/components/atoms/TitleButton/TitleButton";

const TrustedHeader = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center">
        <TitleButton
          title="Certified & trusted"
          srcIcon="/assets/icons/verified.svg"
          parentStyle="bg-gray-50 w-[150px] h-[27px]"
          childStyle="text-xs text-gray-900"
        />
        <h2 className="sm:text-[40px] text-xl font-medium font-heading leading-[100%] tracking-[-0.006em] text-center">
          Secure and Reliable by Design
        </h2>
      </div>
    </div>
  );
};

export default TrustedHeader;
