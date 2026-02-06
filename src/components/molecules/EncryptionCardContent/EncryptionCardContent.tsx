"use client";

import Image from "next/image";
import { motion, MotionProps, Transition } from "framer-motion";

interface EncryptionCardContentProps {
  text: string;
  id: number;
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  transition?: Transition;
  updateLinePoints?: () => void;
}

const EncryptionCardContent = ({
  text,
  initial,
  whileInView,
  transition,
  updateLinePoints,
}: EncryptionCardContentProps) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={{ once: true, amount: 0.3 }}
      onAnimationComplete={updateLinePoints}
      className="bg-[#91603B] sm:py-2 py-1.5 sm:px-2.5 px-1.5 rounded-md text-white sm:text-xs text-[6px] flex items-center w-fit min-w-fit whitespace-nowrap sm:gap-8 gap-4 z-20"
    >
      <span>{text}</span>
      <Image
        src="/assets/icons/tick.svg"
        alt="lock"
        width={16}
        height={16}
        className="object-contain"
      />
    </motion.div>
  );
};

export default EncryptionCardContent;
