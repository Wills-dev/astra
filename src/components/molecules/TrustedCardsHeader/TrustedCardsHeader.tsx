"use client";

import { motion } from "framer-motion";

interface TrustedCardsHeaderProps {
  description: string;
  title: string;
}

const TrustedCardsHeader = ({
  title,
  description,
}: TrustedCardsHeaderProps) => {
  return (
    <div className="space-y-1">
      <motion.h6
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="sm:text-lg font-semibold text-white"
      >
        {title}
      </motion.h6>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="sm:text-sm text-xs text-gray-200 leading-5 tracking-[0]"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default TrustedCardsHeader;
