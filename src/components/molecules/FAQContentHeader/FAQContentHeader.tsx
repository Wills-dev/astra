"use client";

import { motion } from "framer-motion";
import { tabContainerVariants, headerVariants } from "@/lib/anim";
import TabButton from "@/components/atoms/TabButton/TabButton";

import { FAQCategory } from "@/lib/types";

interface FAQHeaderProps {
  categories: FAQCategory[];
  activeTab: number;
  onTabChange: (index: number) => void;
  selectedTimePeriod: string;
  onTimePeriodChange: (period: string) => void;
}

const FAQContentHeader = ({
  categories,
  activeTab,
  onTabChange,
  selectedTimePeriod,
  onTimePeriodChange,
}: FAQHeaderProps) => {
  return (
    <div className="bg-linear-to-r from-[#D9B4F6] to-[#F2DFAD] border border-gray-100 sm:px-6 px-3 pt-7 pb-5 rounded-t-xl">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between gap-2 mb-4"
      >
        <h6 className="text-gray-800 sm:text-xl text-sm font-bold">
          Most asked questions
        </h6>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white px-3 py-1.5 rounded-full sm:text-xs text-[10px] shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <select
            value={selectedTimePeriod}
            onChange={(e) => onTimePeriodChange(e.target.value)}
            className="p-0 m-0 bg-transparent outline-none border-none cursor-pointer"
          >
            <option value="7days">Past 7 days</option>
            <option value="4weeks">Past 4 weeks</option>
            <option value="3months">Past 3 months</option>
            <option value="year">Past year</option>
          </select>
        </motion.div>
      </motion.div>

      <motion.div
        variants={tabContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center flex-wrap"
      >
        {categories.map((category, index) => (
          <TabButton
            key={category.title}
            title={category.title}
            query={index === activeTab ? category.query : undefined}
            isActive={index === activeTab}
            onClick={() => onTabChange(index)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FAQContentHeader;
