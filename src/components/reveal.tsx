"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export default function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      className={className}
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
        delay: 1,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
