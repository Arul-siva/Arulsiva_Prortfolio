import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent",
      border: "2px solid #bef264",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#bef264",
      mixBlendMode: "difference" as any,
      border: "none",
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: "#bef264",
    },
    text: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: "transparent",
    }
  };

  return (
    <>
      {/* Main Circle Cursor - Increased stiffness/damping for faster follow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden lg:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 800, // Increased from 500
          damping: 20,    // Decreased from 28 for snappier movement
          mass: 0.5
        }}
      />
      
      {/* Center Dot - Very fast */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden lg:block"
        variants={dotVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 1500, // Increased from 1000
          damping: 30      // Decreased from 50
        }}
      />
    </>
  );
};

export default CursorFollower;
