import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCursorContext } from "../../setup/context-provider/ContextProvider";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  const { cursorSettings } = useCursorContext();

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
      scale: 0,
    },
    projectCard: {
      top: mousePos.y,
      left: mousePos.x,
      x: "-50%",
      y: "-60%",
      scale: 1,
    },
  };

  return (
    <motion.div
      className="fixed w-28 h-28 z-10 bg-[#1864ab] rounded-full pointer-events-none grid place-items-center"
      variants={variants}
      animate={cursorSettings.variant}
    >
      <p className="text-white">{cursorSettings.title}</p>
    </motion.div>
  );
};

export default CustomCursor;
