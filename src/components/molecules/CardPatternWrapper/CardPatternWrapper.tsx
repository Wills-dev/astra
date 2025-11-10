import CardPattern from "@/components/atoms/CardPattern/CardPattern";

import { cardPatternStyling } from "@/lib/constants";

const CardPatternWrapper = () => {
  return (
    <div className="w-full grid grid-cols-5 grid-rows-5 gap-2 overflow-x-hidden absolute">
      {cardPatternStyling?.map((style) => (
        <CardPattern key={style?.id} extraStyle={style?.style} />
      ))}
    </div>
  );
};

export default CardPatternWrapper;
