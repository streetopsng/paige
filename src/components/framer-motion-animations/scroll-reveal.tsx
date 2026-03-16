// "use client";

// import { motion } from "framer-motion";

// type Direction = "up" | "down" | "left" | "right";

// interface ScrollRevealProps {
//   children: React.ReactNode;
//   direction?: Direction;
//   delay?: number;
//   duration?: number;
//   distance?: number;
// }

// export default function ScrollReveal({
//   children,
//   direction = "up",
//   delay = 0,
//   duration = 1,
//   distance = 40,
// }: ScrollRevealProps) {
//   const getDirection = () => {
//     switch (direction) {
//       case "up":
//         return { y: distance };
//       case "down":
//         return { y: -distance };
//       case "left":
//         return { x: distance };
//       case "right":
//         return { x: -distance };
//       default:
//         return { y: distance };
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, ...getDirection() }}
//       whileInView={{ opacity: 1, x: 0, y: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         duration,
//         delay,
//         ease: "easeOut",
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";
type Variant = "fade" | "slide";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: Variant;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
}

export default function ScrollReveal({
  children,
  variant = "slide",
  direction = "up",
  delay = 0.3,
  duration = 1.4,
  distance = 40,
}: ScrollRevealProps) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  const initial =
    variant === "fade" ? { opacity: 0 } : { opacity: 0, ...getOffset() };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
