import { useState } from "react";
import { motion } from "framer-motion";

import { cardVariants } from "@/lib/anim";
import { faqContents } from "@/lib/constants";

import FAQList from "../FAQList/FAQList";
import FAQContentHeader from "../FAQContentHeader/FAQContentHeader";

const FAQCard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("7days");

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="backdrop-blur-2xl bg-[#FFFFFF4D] max-w-[513px] w-full p-2 rounded-[20px] font-body"
    >
      <div className="shadow-[0px_8px_8px_-4px_#10182808,0px_20px_24px_-4px_#10182814] rounded-xl overflow-hidden">
        <FAQContentHeader
          categories={faqContents}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          selectedTimePeriod={selectedTimePeriod}
          onTimePeriodChange={setSelectedTimePeriod}
        />
        <FAQList faqs={faqContents[activeTab].faqs} activeTab={activeTab} />
      </div>
    </motion.div>
  );
};

export default FAQCard;
