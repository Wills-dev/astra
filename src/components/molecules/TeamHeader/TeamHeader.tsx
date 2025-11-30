import TitleButton from "@/components/atoms/TitleButton/TitleButton";
import React from "react";

const TeamHeader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[575px]  flex flex-col items-center gap-1">
        <TitleButton
          title="Easy integration"
          srcIcon="/assets/icons/setting.svg"
          parentStyle="bg-white/50 w-[142px] h-[28px]"
          childStyle="text-xs text-[#ECECED]"
        />
        <h2 className="sm:text-[48px] text-2xl font-medium font-heading leading-[100%] tracking-[-0.006em] text-center text-white">
          Built for Developers & Teams
        </h2>
        <p className="text-center py-4 text-[#CECFD2] max-sm:text-sm">
          Developers can embed Astra directly into docs, portals, or internal
          dashboards with just a few lines of code.
        </p>
      </div>
    </div>
  );
};

export default TeamHeader;
