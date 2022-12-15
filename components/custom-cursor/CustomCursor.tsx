import { motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
import { useCursorContext } from "../../setup/context-provider/ContextProvider";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({
    x: -100,
    y: -100,
  });

  const { cursorSettings } = useCursorContext();

  useEffect(() => {
    // Returns function if hover is not supported
    if (window.matchMedia("(hover: none)").matches) return;

    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setMousePos({ x, y });
    });
  }, []);

  const variants = {
    default: {
      top: mousePos.y,
      left: mousePos.x,
      x: "-50%",
      y: "-60%",
      scale: 0,
    },
    projectCard: {
      top: mousePos.y,
      left: mousePos.x,
      x: "-50%",
      y: "-60%",
      scale: 1,
      transition: {
        type: "spring",
        mass: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorSettings.variant}
      className="
        pointer-events-none 
        fixed 
        z-30
        grid 
        h-28 w-28 
        place-items-center 
        rounded-full 
        text-center
      bg-accent-primary
      "
    >
      <p className="text-white">{cursorSettings.title}</p>
    </motion.div>
  );
};

export default CustomCursor;
