"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import GuideLayout from "@/components/templates/GuideLayout/GuideLayout";

const GuideCardThree = () => {
  return (
    <GuideLayout
      title="Responds & guides"
      description="Delivers real-time, context-specific answers to user questions."
    >
      <div className="bg-linear-to-b from-[#FAFAFA]/0 from-40% to-[#FAFAFA] w-full h-[260px] relative overflow-visible">
        <motion.div
          initial={{
            opacity: 0,
            rotateY: -90,
            transformPerspective: 1000,
          }}
          whileInView={{
            opacity: 1,
            rotateY: 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-0 right-0 max-w-[316px] w-full h-[332px] min-h-[332px] rounded-[16px] p-[8px] bg-white/50 backdrop-blur-2xl"
        >
          <div className="w-full h-full rounded-[16px] shadow-[0px_100px_200px_0px_#3440542E]">
            <Image
              src="/assets/images/chat-img.png"
              alt="chat image"
              width={300}
              height={316}
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </GuideLayout>
  );
};

export default GuideCardThree;
