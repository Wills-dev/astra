"use client";

import { motion } from "framer-motion";
import { tabVariants } from "@/lib/anim";

interface TabButtonProps {
  title: string;
  query?: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({ title, query, isActive, onClick }: TabButtonProps) => {
  return (
    <motion.button
      variants={tabVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={`
        pl-3 pr-1 py-1 rounded-full text-xs
        transition-colors duration-300 font-body font-light
        ${
          isActive
            ? "bg-white text-gray-900 shadow-md"
            : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
        }
      `}
    >
      {title}
      {isActive && query && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 0.3 }}
          transition={{ delay: 0.2 }}
          className="ml-2 text-[10px] bg-gray-100 px-2 py-1 rounded-full"
        >
          {query}
        </motion.span>
      )}
    </motion.button>
  );
};

export default TabButton;
