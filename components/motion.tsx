import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "framer-motion";

// Transition presets
export const transitions = {
  spring: {
    type: "spring" as const,
    stiffness: 300,
    damping: 24,
  },
  smooth: {
    type: "tween" as const,
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1],
  },
  snappy: {
    type: "tween" as const,
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1],
  },
} as const;

// Animation variants
export const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
} as const satisfies Record<string, Variants>;

// FadeIn component
interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animation?: keyof typeof animations;
  delay?: number;
  duration?: number;
}

export function FadeIn({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.4,
  className,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={animations[animation]}
      initial="hidden"
      animate="visible"
      transition={{
        ...(shouldReduceMotion ? { duration: 0 } : { duration }),
        delay,
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Staggered list container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} satisfies Variants;

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.spring,
  },
} satisfies Variants;
