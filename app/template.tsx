"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
