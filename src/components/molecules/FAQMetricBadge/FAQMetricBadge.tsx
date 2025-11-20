"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { arrowVariants, badgeVariants } from "@/lib/anim";

interface FAQMetricBadgeProps {
  percentage: number;
}

const FAQMetricBadge = ({ percentage }: FAQMetricBadgeProps) => {
  return (
    <motion.div
      variants={badgeVariants}
      whileHover="hover"
      className="bg-gray-100 px-3 py-1.5 flex items-center text-green-500 gap-1.5 border border-gray-100 rounded-md cursor-pointer"
    >
      <span className="sm:text-sm text-xs">+{percentage}%</span>
      <motion.div variants={arrowVariants}>
        <Image
          src="/assets/icons/arrow-up.svg"
          alt="Arrow up Icon"
          width={14}
          height={14}
          className="object-contain max-sm:w-3 max-sm:h-3"
        />
      </motion.div>
    </motion.div>
  );
};

export default FAQMetricBadge;
