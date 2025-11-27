"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import GuideCardInfo from "../GuideCardInfo/GuideCardInfo";

const GuideCardOne = () => {
  return (
    <div className="max-w-[428px] w-full min-w-[300px] bg-[#FAFAFA] rounded-[16px] border border-gray-200 overflow-x-hidden">
      <div className="w-full h-[260px] bg-[url('/assets/images/lines.svg')]">
        <div className="bg-linear-to-b from-[#FAFAFA]/0 from-70% to-[#FAFAFA] w-full h-full relative flex justify-end sm:pl-4 pl-2 pt-2">
          <div className="h-[249px] relative flex-1">
            {" "}
            <motion.div
              initial={{ y: "10px" }}
              whileInView={{ y: "180px" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-6 -right-6 z-10 flex items-center gap-1 bg-linear-to-r from-[#C357D2] to-[#FE8529] rounded-[7px] px-[8px] p-[4px] pb-[6px]"
            >
              <Image
                src="/assets/icons/paper.svg"
                alt="paper"
                width={14}
                height={14}
              />
              <span className="sm:text-sm text-xs  text-[#FAFAFA]">
                Scanning
              </span>
            </motion.div>
          </div>
          <div className="max-w-[80%] w-full relative">
            <div className="w-full overflow-x-hidden">
              <motion.div
                initial={{ x: "-200px" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full min-w-[344px] h-[249px]"
              >
                <Image
                  src="/assets/images/image 13.svg"
                  alt="code demo"
                  width={344}
                  height={249}
                  className="object-contain w-full  h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <GuideCardInfo
        title="Reads & ingests"
        desc="Astra scans your existing documentation, APIs, and changelogs"
      />
    </div>
  );
};

export default GuideCardOne;
