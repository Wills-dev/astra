"use client";

import { motion } from "framer-motion";

import { complaintsImages } from "@/lib/constants";

import TrustedCardsHeader from "../TrustedCardsHeader/TrustedCardsHeader";
import ComplaintImageCard from "@/components/atoms/ComplaintImageCard/ComplaintImageCard";

const CompliantCard = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:col-span-4 col-span-6 col-start-1 row-start-1 h-[229px] rounded-2xl bg-[linear-gradient(96.46deg,#FF7ECE_-61.98%,#5B29B1_2.54%,#AE4F8A_84.91%)]
  relative overflow-hidden sm:px-6 px-2 sm:py-8 py-6"
    >
      <div className=" w-full h-full opacity-5 bg-cover bg-center bg-no-repeat bg-[url('/assets/images/complaint-bg.jpg')] absolute top-0 left-0" />
      <div className="flex flex-col justify-between gap-2 h-full">
        <TrustedCardsHeader
          title="Compliant & safe"
          description="Astra is GDPR, SOC 2 Type 1&2, and HIPAA compliant, meeting all the industry compliance standards."
        />
        <div className="flex gap-2">
          {complaintsImages?.map((img, index) => (
            <ComplaintImageCard
              key={img?.id}
              src={img.src}
              alt={img.alt}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CompliantCard;
