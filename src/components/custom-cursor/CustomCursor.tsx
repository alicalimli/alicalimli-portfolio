import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorTitle, setCursorTitle] = useState("View");

  useEffect(() => {
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
    },
    projectCard: {
      top: mousePos.y,
      left: mousePos.x,
      x: "-50%",
      y: "-60%",
      width: "100px",
      height: "100px",
    },
  };

  return (
    <motion.div
      className="fixed w-28 h-28 z-10 bg-[#1864ab] rounded-full pointer-events-none grid place-items-center"
      variants={variants}
      animate={cursorVariant}
    >
      <p className="text-white">{cursorTitle}</p>
    </motion.div>
  );
};

export default CustomCursor;
