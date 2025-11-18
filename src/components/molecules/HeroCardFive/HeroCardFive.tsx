import CardLayout from "@/components/atoms/CardLayout/CardLayout";
import InfoBlock from "../InfoBlock/InfoBlock";
import SearchForm from "../SearchForm/SearchForm";

import { quickSuggestions } from "@/lib/constants";

const HeroCardFive = () => {
  return (
    <CardLayout>
      <div className="h-[150.81px] pt-3 px-2 border-[#F0F1F1B2] rounded-[10.14px] border-[0.63px] bg-[#FAFAFA] space-y-2">
        <SearchForm />
        <div className="flex flex-col items-start space-y-1.5">
          <h6 className="text-[#C3C3C3] text-[7.6px]">Quick suggestions:</h6>
          <div className="space-y-1 w-full">
            {quickSuggestions?.map((suggestion) => (
              <p
                key={suggestion}
                className="p-[5.07px] pl-[7.6px] rounded-[3.8px] bg-white border-[#ECECED] border-[0.63px] w-full text-[7.6px] text-gray-700"
              >
                {suggestion}
              </p>
            ))}
          </div>
        </div>
      </div>
      <InfoBlock
        iconUrl="/assets/icons/api.svg"
        title="API reference"
        description="Ask, don’t search. Get context-aware answers about endpoints, parameters, or examples; instantly generated from your documentation."
      />
    </CardLayout>
  );
};

export default HeroCardFive;
