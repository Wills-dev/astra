"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import TrustedCardsHeader from "../TrustedCardsHeader/TrustedCardsHeader";
import EncryptionCardContent from "../EncryptionCardContent/EncryptionCardContent";
import DashedLine from "@/components/atoms/DashedLine/DashedLine";
import LinesSvg from "@/components/atoms/LinesSvg/LinesSvg";

import { encryptionSteps } from "@/lib/constants";

const EncryptionCard = () => {
  const LINE_SPACINGS = [15, 15, 20];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:col-span-2 sm:col-span-3 col-span-6 lg:col-start-5 col-start-1 lg:row-start-1 sm:row-start-3 lg:row-end-3 sm:row-end-6 h-[419px] bg-[linear-gradient(169.71deg,#D89A6B_-4.67%,#653009_94.5%)] rounded-2xl sm:px-6 px-2 sm:py-8 py-6 overflow-hidden relative"
    >
      <div className="space-y-8 relative">
        <TrustedCardsHeader
          title="End-to-end encryption"
          description="Your data stays private and protected with AES-256 encryption at rest and TLS 1.3 securing every transfer."
        />

        <div className="relative flex items-start justify-between gap-12">
          <motion.div
            className="relative shrink-0 z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/images/Container.svg"
              alt="contain"
              width={121}
              height={140}
              className="object-contain w-[121px] h-[140px]"
            />
            <div className="absolute top-[50%] -right-5 ">
              <div className="relative">
                <LinesSvg />
                <div className="absolute sm:w-[222px]  top-3 z-20 left-7.5 flex flex-col items-start w-[150px]">
                  {encryptionSteps.map((card, index) => {
                    const cumulativeSpacing =
                      index === 0
                        ? 0
                        : LINE_SPACINGS.slice(0, index).reduce(
                            (a, b) => a + b,
                            0,
                          );
                    return (
                      <EncryptionCardContent
                        key={card.id}
                        text={card.text}
                        id={index}
                        initial={{
                          opacity: 0,
                          y: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: cumulativeSpacing,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.7 + index * 0.15,
                          ease: [0.42, 0, 0.58, 1],
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <DashedLine />
      <DashedLine className="w-[232px] h-[107px] -left-[58px] top-[403px]" />
      <DashedLine className="w-[232px] h-[107px] left-[238px] top-[378px]" />
      <DashedLine className="w-[232px] h-[107px] left-[243px] top-[383px]" />
      <DashedLine className="w-[175px] h-[137px] -left-[125px] max-sm:-left-[150px] top-[202px] border-t-0 z-0" />
      <DashedLine className="w-[175px] h-[137px] -left-[130px] max-sm:-left-[155px] top-[197px] border-t-0 z-0" />
      <DashedLine className="w-[359px] h-[135px] left-[131px] max-sm:left-[110px] top-[203.29px] border-t-0 z-0" />
      <DashedLine className="w-[359px] h-[135px] left-[136px] max-sm:left-[115px] top-[198.29px] border-t-0 z-0" />
    </motion.div>
  );
};

export default EncryptionCard;
