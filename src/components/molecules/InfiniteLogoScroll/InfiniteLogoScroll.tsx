import Image from "next/image";

import { motion } from "framer-motion";

import { companyLogos } from "@/lib/constants";

const InfiniteLogoScroll = () => {
  const doubledLogos = [...companyLogos, ...companyLogos];

  return (
    <div className="max-w-[487px] w-full overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#24032D] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#24032D] to-transparent z-10" />

      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: [0, -(companyLogos.length * 128)],
        }}
        transition={{
          x: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {doubledLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.name}
            width={120}
            height={60}
            className="w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteLogoScroll;
