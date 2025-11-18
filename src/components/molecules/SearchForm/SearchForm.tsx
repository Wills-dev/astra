import ChatFormButton from "@/components/atoms/ChatFormButton/ChatFormButton";

const SearchForm = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[209.11px] min-w-[209.11px] h-[35.48px] rounded-[7.6px] bg-[#F0F1F1] border-[0.63px] border-[#F0F1F1] backdrop-blur-2xl flex justify-center items-center">
        <div className="h-[30.42px] bg-white w-[204.04px] rounded-[5.07px] flex items-center gap-1 pl-[7.6px]">
          <ChatFormButton
            iconSrc="/assets/icons/search.svg"
            altText="Search Icon"
            className=""
          />
          <p className="text-gray-400 text-[7.6px] font-medium">
            Ask about / users endpoint...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
