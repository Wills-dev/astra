import React from "react";

const DocHeader = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-[687px] flex flex-col items-center gap-4">
        <h2 className="sm:text-[48px] text-2xl font-medium font-heading leading-[100%] tracking-[-0.006em] text-center text-white/50">
          You made it here! Now, let’s
          <br />
          <span className="text-white block pt-1">
            Bring Astra to Your Documentation
          </span>
        </h2>
        <p className="text-[#CECFD2] max-sm:text-sm text-center">
          Start transforming your static docs into intelligent conversations
          today.
        </p>
      </div>
    </div>
  );
};

export default DocHeader;
