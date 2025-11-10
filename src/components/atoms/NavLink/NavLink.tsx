import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/anim";

interface NavLinkProps {
  label: string;
  link: string;
  color?: string;
  index?: number;
}

const NavLink = ({
  color = "#F5F5F6",
  label,
  link,
  index = 0,
}: NavLinkProps) => {
  return (
    <motion.div
      className="relative group"
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
    >
      <Link
        href={link}
        className={`block capitalize group-hover:scale-105 transition-all duration-300`}
        style={{ color }}
      >
        {label}
      </Link>
      <span
        className={`absolute block left-0 bottom-0 w-0 h-0.5  transition-all duration-300 group-hover:w-full`}
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

export default NavLink;
