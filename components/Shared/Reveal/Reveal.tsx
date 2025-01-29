"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { RevealProps } from "./Reveal.types";
import { useEffect, useRef } from "react";

export const fadeIn = (position: string, delay?: number) => {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay || 0.3,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hidden: {
      y: position === "bottom" ? -60 : 0,
      x: position === "right" ? 60 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export function Reveal({ children, position, className, delay }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className={`opacity-0 ${className}`}
        variants={fadeIn(position, delay)}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}