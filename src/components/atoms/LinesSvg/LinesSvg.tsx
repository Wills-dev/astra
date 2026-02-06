import * as React from "react";
import { SVGProps } from "react";
import { motion, Variants } from "framer-motion";

const LinesSvg = (props: SVGProps<SVGSVGElement>) => {
  // Horizontal straight paths (initial state)
  const straightPaths = [
    "M0 31.7314 L31 31.7314", // Horizontal at the end Y position
    "M0 75.7314 L31 75.7314", // Horizontal at the end Y position
    "M0 119.731 L31 119.731", // Horizontal at the end Y position
  ];

  // Curved paths (final state - your original paths)
  const curvedPaths = [
    "M0 0.5C19.0858 0.5 11.9142 31.7314 31 31.7314",
    "M0 0.5C24.1377 0.5 6.86232 75.7314 31 75.7314",
    "M0 0.5C29.1895 0.5 1.81046 119.731 31 119.731",
  ];

  const pathVariants: Variants = {
    hidden: (i: number) => ({
      d: straightPaths[i],
      pathLength: 0,
    }),
    visible: (i: number) => ({
      d: curvedPaths[i],
      pathLength: 1,
      transition: {
        d: {
          duration: 1,
          ease: [0.42, 0, 0.58, 1],
        },
        pathLength: {
          duration: 1.5,
          ease: [0.42, 0, 0.58, 1],
        },
      },
    }),
  };

  return (
    <svg
      width={31}
      height={121}
      viewBox="0 0 31 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Lines">
        <motion.g id="Container <-> Container">
          <motion.path
            id="Vector"
            custom={0}
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            stroke="url(#paint0_linear_947_9527)"
            strokeWidth={1}
          />
        </motion.g>
        <motion.g id="Container <-> Container_2">
          <motion.path
            id="Vector_2"
            custom={1}
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            stroke="url(#paint1_linear_947_9527)"
            strokeWidth={1}
          />
        </motion.g>
        <motion.g id="Container <-> Container_3">
          <motion.path
            id="Vector_3"
            custom={2}
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            stroke="url(#paint2_linear_947_9527)"
            strokeWidth={1}
          />
        </motion.g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_947_9527"
          x1={15.5}
          y1={0.5}
          x2={15.5}
          y2={31.7314}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_947_9527"
          x1={15.5}
          y1={0.5}
          x2={15.5}
          y2={75.7314}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_947_9527"
          x1={15.5}
          y1={0.5}
          x2={15.5}
          y2={119.731}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0.3} />
          <stop offset={1} stopColor="white" stopOpacity={0.5} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LinesSvg;
