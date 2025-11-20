import { motion, AnimatePresence } from "framer-motion";

import { FAQ } from "@/lib/types";
import { listContainerVariants } from "@/lib/anim";

import FAQItem from "../FAQItem/FAQItem";

interface FAQListProps {
  faqs: FAQ[];
  activeTab: number;
}

const FAQList = ({ faqs, activeTab }: FAQListProps) => {
  return (
    <motion.div
      className="w-full rounded-b-xl bg-white overflow-hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={listContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={`${faq.question}-${index}`} faq={faq} />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQList;
