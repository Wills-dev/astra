import { Variants } from "framer-motion";

export const fadeIn = (
  direction: string,
  type: "spring" | "tween" | "inertia" | "keyframes",
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut" as const,
      },
    },
  };
};

export const circleVariants = {
  initial: (custom: "top" | "bottom") => ({
    y: custom === "top" ? "5%" : "95%",
  }),
  animate: (custom: "top" | "bottom") => ({
    y:
      custom === "top"
        ? ["5%", "1000%", "2000%", "1000%", "5%"]
        : ["2000%", "1000%", "5%", "1000%", "%"],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut" as const,
      times: [0, 0.25, 0.5, 0.75, 1],
    },
  }),
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const tabContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const tabVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    x: 8,
    backgroundColor: "rgba(243, 244, 246, 1)",
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.2,
    },
  },
};

export const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(240, 253, 244, 1)",
    boxShadow: "0 4px 12px rgba(34, 197, 94, 0.2)",
    transition: {
      duration: 0.2,
    },
  },
};

export const arrowVariants: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -3, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
