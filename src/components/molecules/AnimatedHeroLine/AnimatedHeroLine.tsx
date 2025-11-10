import { motion } from "framer-motion";

const AnimatedHeroLine = () => {
  return (
    <div className="relative h-screen w-px bg-linear-to-b from-white/10 from-60% to-white/0 to-100%">
      <motion.div
        initial={{ y: "10vh" }}
        animate={{ y: "48vh" }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#42184E] border-2 border-[#4A3550]"
      />

      {/* Bottom Circle */}
      <motion.div
        initial={{ y: "-10vh" }}
        animate={{ y: "-48vh" }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#42184E] border-2 border-[#4A3550]"
      />
    </div>
  );
};

export default AnimatedHeroLine;
