import FAQCard from "../FAQCard/FAQCard";

const FaqContent = () => {
  return (
    <div className="flex-1 flex justify-end">
      <div className="bg-[#D46CF21F]  w-fit rounded-[12px] sm:py-20 py-10">
        <div className="lg:px-16 md:px-10 px-2  border-y border-[#EBD3F2]">
          <FAQCard />
        </div>
      </div>
    </div>
  );
};

export default FaqContent;
