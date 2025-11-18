import InfiniteLogoScroll from "@/components/molecules/InfiniteLogoScroll/InfiniteLogoScroll";

const TopCompaniesWrapper = () => {
  return (
    <div className="flex w-full justify-end max-lg:pt-10">
      <div className="max-w-[487px] w-full space-y-2">
        <h6 className="text-white/50 text-xs">
          Trusted by top companies across the globe
        </h6>
        <InfiniteLogoScroll />
      </div>
    </div>
  );
};

export default TopCompaniesWrapper;
