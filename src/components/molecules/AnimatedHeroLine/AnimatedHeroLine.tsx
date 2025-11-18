import { motion } from "framer-motion";

const AnimatedHeroLine = () => {
  return (
    <div className="relative h-[550px] w-px bg-linear-to-b from-white/10 from-60% to-white/0 to-100%">
      <motion.div
        initial={{ y: "100px" }}
        animate={{ y: "290px" }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#42184E] border-2 border-[#4A3550]"
      />

      {/* Bottom Circle */}
      <motion.div
        initial={{ y: "550px" }}
        animate={{ y: "300px" }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#42184E] border-2 border-[#4A3550]"
      />
    </div>
  );
};

export default AnimatedHeroLine;
