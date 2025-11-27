"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { auditLogs, auditSteps } from "@/lib/constants";

import AuditStepCard from "../AuditStepCard/AuditStepCard";
import TrustedCardsHeader from "../TrustedCardsHeader/TrustedCardsHeader";

const AuditCard = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:col-span-2 sm:col-span-3 col-span-6 col-start-1 lg:row-start-2 sm:row-start-6 lg:row-end-5  sm:row-end-10 h-[459px] rounded-2xl  sm:py-8 py-6 overflow-hidden relative bg-[linear-gradient(184.6deg,#8A40A5_-3.72%,#FFB379_102.89%)]"
    >
      <div className=" w-full h-full opacity-20 bg-cover bg-center bg-no-repeat bg-[url('/assets/images/bbg.jpg')] absolute top-0 left-0" />
      <div className="space-y-4 h-full">
        <div className="sm:px-6 px-2">
          <TrustedCardsHeader
            title="Complete audit logs"
            description="Monitor every action in real time with immutable, compliance-ready logs. Integrate effortlessly with your existing SIEM tools."
          />
        </div>
        <div className="space-y-2 sm:px-6 px-2">
          {auditLogs?.map((log) => (
            <div key={log.id} className="flex items-center gap-2">
              <Image
                src="/assets/icons/tick-white.svg"
                alt="main icon"
                width={16}
                height={16}
                className="object-obtain"
              />
              <p className="text-gray-100 sm:text-sm text-xs">{log.action}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3 overflow-x-hidden sm:pl-6 pl-2">
          {auditSteps?.map((step, index) => (
            <AuditStepCard
              key={step?.id}
              desc={step.desc}
              action={step.action}
              bgIcon={step.bgIcon}
              mainIcon={step.mainIcon}
              timeStamp={step.timeStamp}
              text={step.text}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AuditCard;
