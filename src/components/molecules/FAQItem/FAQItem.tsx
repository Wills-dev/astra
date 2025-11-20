"use client";

import { motion } from "framer-motion";

import { FAQ } from "@/lib/types";
import { itemVariants } from "@/lib/anim";

import FAQMetricBadge from "../FAQMetricBadge/FAQMetricBadge";

interface FAQItemProps {
  faq: FAQ;
}

const FAQItem = ({ faq }: FAQItemProps) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      className="flex items-center justify-between gap-4 py-4 sm:px-6 px-2 border-b border-gray-200 cursor-pointer"
    >
      <p className="text-sm max-sm:text-xs text-gray-700 transition-colors duration-300">
        {faq.question}
      </p>
      <FAQMetricBadge percentage={faq.percentage} />
    </motion.div>
  );
};

export default FAQItem;
