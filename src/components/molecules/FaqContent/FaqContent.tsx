import React from "react";

const FaqContent = () => {
  return (
    <div className="flex-1 flex justify-end">
      <div className="bg-[#D46CF21F] max-w-[640px] w-full h-[540px] rounded-[12px] flex items-center justify-center">
        <div className=" backdrop-blur-2xl bg-[#FFFFFF4D] max-w-[513px] w-full h-[368px] p-2 rounded-[20px]">
          <div className="bg-linear-to-r from-0% from-[#D9B4F6] to-100% to-[#F2DFAD] border border-gray-100 px-6 pt-7 pb-5 rounded-t-[12px]">
            <div className="flex items-center justify-between">
              <h6 className="text-gray-800 text-[20px] font-semibold">
                Most asked questions
              </h6>
              <div className="bg-white px-2 py-1.5 rounded-full text-[11px]">
                <select className="p-0 m-0 bg-transparent outline-none border-none">
                  <option value="">Past 7 days</option>
                  <option value="">Past 4 weeks</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqContent;
