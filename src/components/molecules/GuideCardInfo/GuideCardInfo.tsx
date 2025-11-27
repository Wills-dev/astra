"use client";

import { motion } from "framer-motion";

interface GuideCardInfoProps {
  title: string;
  desc: string;
}

const GuideCardInfo = ({ title, desc }: GuideCardInfoProps) => {
  return (
    <div className="bg-[#FAFAFA] sm:px-4 px-2 space-y-2 py-4">
      <motion.h6
        animate={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="font-smeibold max-sm:text-sm text-gray-800"
      >
        {title}
      </motion.h6>
      <motion.p
        animate={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-gray-600 sm:text-sm text-xs"
      >
        {desc}
      </motion.p>
    </div>
  );
};

export default GuideCardInfo;
