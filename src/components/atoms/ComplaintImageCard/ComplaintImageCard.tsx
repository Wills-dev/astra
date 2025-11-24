"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/anim";

interface ComplaintImageCardProps {
  src: string;
  alt: string;
  index: number;
}

const ComplaintImageCard = ({ src, alt, index }: ComplaintImageCardProps) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="max-w-[150px] w-full bg-white/10 h-[87px] rounded-lg flex items-center justify-center p-2"
    >
      <Image
        src={src}
        alt={alt || `complaint-image-${index}`}
        width={100}
        height={70}
        className=" h-full w-auto object-contain"
      />
    </motion.div>
  );
};

export default ComplaintImageCard;
