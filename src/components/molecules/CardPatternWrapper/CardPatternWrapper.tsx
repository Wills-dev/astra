import CardPattern from "@/components/atoms/CardPattern/CardPattern";

import { cardPatternStyling } from "@/lib/constants";

const CardPatternWrapper = () => {
  return (
    <div className="w-[916px] min-w-[916px] grid grid-cols-5 grid-rows-7 gap-2 overflow-x-hidden absolute">
      {cardPatternStyling?.map((style) => (
        <CardPattern key={style?.id} extraStyle={style?.style} />
      ))}
    </div>
  );
};

export default CardPatternWrapper;
