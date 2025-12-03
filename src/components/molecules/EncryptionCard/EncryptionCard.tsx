"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TrustedCardsHeader from "../TrustedCardsHeader/TrustedCardsHeader";
import Image from "next/image";
import EncryptionCardContent from "../EncryptionCardContent/EncryptionCardContent";
import { encryptionSteps } from "@/lib/constants";
import DashedLine from "@/components/atoms/DashedLine/DashedLine";

const EncryptionCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const [lineData, setLineData] = useState<
    {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
    }[]
  >([
    { startX: 0, startY: 0, endX: 0, endY: 0 },
    { startX: 0, startY: 0, endX: 0, endY: 0 },
    { startX: 0, startY: 0, endX: 0, endY: 0 },
  ]);

  const controls = {
    // CARD POSITIONING
    cardGap: 70, // Gap between cards (px)
    cardInitialOffset: 0, // Starting position offset (px)

    // LINE SHAPE CONTROLS
    curve1XPercent: 0.2, // Control Point 1: X position (0-1 = 0%-100% of horizontal distance)
    curve1YOffset: -40, // Control Point 1: Y offset (negative = up, positive = down)
    curve2XPercent: 0.5, // Control Point 2: X position (0-1)
    curve2YOffset: 20, // Control Point 2: Y offset
  };

  const updateLinePoints = () => {
    if (!imageRef.current || !containerRef.current) return;

    const imageRect = imageRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const newLineData = cardRefs.current.map((cardRef) => {
      if (!cardRef) return { startX: 0, startY: 0, endX: 0, endY: 0 };

      const cardRect = cardRef.getBoundingClientRect();

      const startX = imageRect.right - containerRect.left;
      const startY = imageRect.top + imageRect.height / 2 - containerRect.top;

      const endX = cardRect.left - containerRect.left;
      const endY = cardRect.top + cardRect.height / 2 - containerRect.top;

      return { startX, startY, endX, endY };
    });

    setLineData(newLineData);
  };

  useEffect(() => {
    setTimeout(updateLinePoints, 100);
    window.addEventListener("resize", updateLinePoints);
    return () => window.removeEventListener("resize", updateLinePoints);
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(updateLinePoints, 16);
      setTimeout(() => clearInterval(interval), 2000);
    }
  }, [isInView]);

  // FIX: Use array index instead of card.id
  const getPathData = (arrayIndex: number) => {
    const lineDataItem = lineData[arrayIndex];
    if (!lineDataItem) return "";

    const { startX, startY, endX, endY } = lineDataItem;
    if (!startX || !endX) return "";

    const horizontalDiff = endX - startX;
    const verticalDiff = endY - startY;

    if (isInView) {
      // 🎯 THE KEY TO STACKED CURVES (like the reference image):
      // Use the SAME control point percentages for all lines
      // The curves will naturally stack because cards are at different Y positions

      const cp1X = startX + horizontalDiff * controls.curve1XPercent;
      const cp1Y = startY + controls.curve1YOffset; // Consistent offset from start

      const cp2X = startX + horizontalDiff * controls.curve2XPercent;
      const cp2Y = endY + controls.curve2YOffset; // Offset relative to each card

      return `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
    } else {
      return `M ${startX} ${startY} L ${endX} ${endY}`;
    }
  };

  const getCardYOffset = (index: number) => {
    if (!isInView) return 0;
    return controls.cardInitialOffset + index * controls.cardGap;
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:col-span-2 sm:col-span-3 col-span-6 lg:col-start-5 col-start-1 lg:row-start-1 sm:row-start-3 lg:row-end-3 sm:row-end-6 h-[419px] bg-[linear-gradient(169.71deg,#D89A6B_-4.67%,#653009_94.5%)] rounded-2xl sm:px-6 px-2 sm:py-8 py-6 overflow-hidden relative"
    >
      <div className="space-y-8 relative" ref={containerRef}>
        <TrustedCardsHeader
          title="End-to-end encryption"
          description="Your data stays private and protected with AES-256 encryption at rest and TLS 1.3 securing every transfer."
        />

        {/* SVG Layer for all lines */}
        <svg
          className="absolute inset-0 w-full h-full -left-2 pointer-events-none"
          style={{ overflow: "visible" }}
        >
          {encryptionSteps?.map((card, index) => (
            <g key={card.id}>
              {/* Animated line for each card - USE INDEX not card.id */}
              <motion.path
                d={getPathData(index)}
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.2,
                  ease: "easeInOut",
                }}
              />
            </g>
          ))}
        </svg>

        <div className="relative flex items-start justify-between gap-12">
          <motion.div
            ref={imageRef}
            className="relative flex-shrink-0 z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/images/container.svg"
              alt="contain"
              width={121}
              height={140}
              className="object-contain w-[121px] h-[140px]"
            />
          </motion.div>

          {/* <div className="relative flex-1 pt-8">
            <div className="relative">
         
              <EncryptionCardContent
                text={encryptionSteps[0].text}
                cardRefs={cardRefs}
                id={0}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                updateLinePoints={updateLinePoints}
              />

           
              {encryptionSteps.slice(1).map((card, index) => {
                const arrayIndex = index + 1;
                return (
                  <EncryptionCardContent
                    key={card.id}
                    text={card.text}
                    cardRefs={cardRefs}
                    id={arrayIndex}
                    initial={{ opacity: 0, y: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: getCardYOffset(arrayIndex) }
                        : { opacity: 0, y: 0 }
                    }
                    transition={{
                      duration: 0.7,
                      delay: 0.7 + arrayIndex * 0.15,
                      ease: "easeOut",
                    }}
                    updateLinePoints={updateLinePoints}
                  />
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
      <DashedLine />
      <DashedLine className="w-[232px] h-[107px] -left-[58px] top-[403px]" />
      <DashedLine className="w-[232px] h-[107px] left-[238px] top-[378px]" />
      <DashedLine className="w-[232px] h-[107px] left-[243px] top-[383px]" />
      <DashedLine className="w-[175px] h-[137px] -left-[125px] top-[202px] border-t-0 z-0" />
      <DashedLine className="w-[175px] h-[137px] -left-[130px] top-[197px] border-t-0 z-0" />
      <DashedLine className="w-[359px] h-[135px] left-[131px] top-[203.29px] border-t-0 z-0" />
      <DashedLine className="w-[359px] h-[135px] left-[136px] top-[198.29px] border-t-0 z-0" />
    </motion.div>
  );
};

export default EncryptionCard;
