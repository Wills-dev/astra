import CardPatternWrapper from "@/components/molecules/CardPatternWrapper/CardPatternWrapper";
import React from "react";

const HeroWrapper = () => {
  return (
    <div className="7xl:max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8">
      <div className="flex justify-end">
        <div className="max-w-3xl w-full">
          <CardPatternWrapper />
        </div>
      </div>
    </div>
  );
};

export default HeroWrapper;
