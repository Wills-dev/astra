"use client";

import Image from "next/image";

import { motion, MotionProps, Transition } from "framer-motion";

interface EncryptionCardContentProps {
  text: string;
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  id: number;
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  transition?: Transition;
  updateLinePoints: () => void;
}

const EncryptionCardContent = ({
  text,
  cardRefs,
  id,
  initial,
  animate,
  transition,
  updateLinePoints,
}: EncryptionCardContentProps) => {
  return (
    <motion.div
      ref={(el) => {
        cardRefs.current[id] = el;
      }}
      initial={initial}
      animate={animate}
      transition={transition}
      onAnimationComplete={updateLinePoints}
      className="bg-white/10 py-2 px-2.5 rounded-md text-white sm:text-xs text-[8px] flex items-center w-fit gap-8"
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
