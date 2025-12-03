"use client";

import { AnimatePresence, motion } from "framer-motion";

import { socialHandles } from "@/lib/constants";
import Image from "next/image";

const LowerFooter = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-between w-full">
      <p className="text-[#85888E] sm:text-sm text-xs font-medium">
        © 2025 Astra Technologies. All rights reserved.
      </p>
      <ul className="flex items-center gap-6 flex-wrap">
        {socialHandles?.map((social, index) => {
          const delay = index * 0.5;
          return (
            <AnimatePresence key={social.name}>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay, ease: "easeOut" }}
              >
                <motion.a
                  whileHover="hover"
                  initial="initial"
                  animate="initial"
                  href={social?.link}
                  className="flex gap-2 items-center"
                >
                  <motion.span
                    variants={{
                      initial: {
                        rotate: 0,
                      },
                      hover: {
                        rotate: 360,
                      },
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="block"
                  >
                    <Image
                      src={social?.imgUrl}
                      alt={social?.name}
                      width={18}
                      height={18}
                      className="object-obtain w-[18px] h-[18px]"
                    />
                  </motion.span>
                  <motion.p
                    variants={{
                      initial: {
                        scale: 1,
                      },
                      hover: {
                        scale: 1.1,
                      },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-[#1F242F] font-medium sm:text-sm text-xs font-heading capitalize"
                  >
                    {social?.name}
                  </motion.p>
                </motion.a>
              </motion.li>
            </AnimatePresence>
          );
        })}
      </ul>
    </div>
  );
};

export default LowerFooter;
