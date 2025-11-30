"use client";

import { motion } from "framer-motion";

import GuideLayout from "@/components/templates/GuideLayout/GuideLayout";

const GuideCardTwo = () => {
  const apiReference = [
    { title: "Entities extracted", count: 247 },
    { title: "Relationships mapped", count: 892 },
    { title: "Endpoints indexed", count: 94 },
  ];
  return (
    <GuideLayout
      title="Transforms & connects"
      description="Convert static content into an intelligent knowledge graphical"
    >
      <div className="bg-linear-to-b from-[#FAFAFA]/0 from-40% to-[#FAFAFA] w-full h-full relative flex  flex-col items-center  p-4 max-sm:px-2 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ once: true }}
          className="max-w-[359px] w-full rounded-[15px] bg-white/80 p-[3px]"
        >
          <div className=" w-full flex items-center justify-between bg-[#F5F5F6] p-[8px] pl-[12px] rounded-[12px] border border-gray-100">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 text-[#BA4BE2]"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="sm:text-sm text-xs text-gray-600">API Reference</p>
            </div>
            <div className="py-[4px] px-[6px]  bg-white rounded-[6px] sm:text-xs text-[10px]">
              <span>1247 lines</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "backInOut" }}
          viewport={{ once: true }}
          className="max-w-[380px] w-full bg-[#F5F5F6] border border-[#ECECED] p-[14px] rounded-[12px] space-y-2"
        >
          {apiReference?.map((reference) => (
            <div
              key={reference?.title}
              className="flex ites-center justify-between"
            >
              <p className="text-[#85888E] sm:text-sm text-xs">
                {reference?.title}
              </p>
              <p className="font-medium sm:text-sm text-xs text-[#61646C]">
                {reference?.count}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </GuideLayout>
  );
};

export default GuideCardTwo;
