"use client";

import { motion } from "framer-motion";

import Image from "next/image";

interface AuditStepCardProps {
  mainIcon: string;
  bgIcon: string;
  action: string;
  desc: string;
  timeStamp: string;
  text: string;
  index: number;
}

const AuditStepCard = ({
  mainIcon,
  bgIcon,
  action,
  desc,
  timeStamp,
  text,
  index,
}: AuditStepCardProps) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: index * 0.5 }}
      className="flex items-center gap-2 overflow-x-hidden"
    >
      <div className="w-[28px] min-w-[28px] h-[28px] rounded-full flex justify-center items-center bg-white/20">
        <Image
          src={mainIcon}
          width={16}
          height={16}
          className="object-contain"
          alt={action}
        />
      </div>
      <div className="bg-white/20 py-[6px] pl-[8px] pr-[10px] flex items-center rounded-md gap-1 text-[#FAFAFA]">
        <div className="bg-black/10 py-[2px] px-[5px] rounded-[4px]  text-[10px] leading-[15px] font-medium">
          {action}
        </div>
        <p className="text-[11px] font-medium leading-[17px] whitespace-nowrap">
          {text}
        </p>
        <div className="flex items-center p-[2px] pl-[5px]  gap-[4px] rounded-[4px] bg-black/10">
          <Image
            src={bgIcon}
            width={12}
            height={12}
            className="object-contain"
            alt={desc}
          />
          <p className="text-[10px] leading-[15px] font-medium whitespace-nowrap">
            {desc}
          </p>
          <span className="block px-[4px] py-[2px] rounded-[3px] bg-white/20 text-[9px]">
            {timeStamp}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default AuditStepCard;
