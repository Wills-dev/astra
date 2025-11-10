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
