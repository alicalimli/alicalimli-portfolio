import { motion, useAnimationControls } from "framer-motion";
import React from "react";

interface SpanTextProps {
  letter: string;
}

const Spantext = ({ letter }: SpanTextProps) => {
  const controls = useAnimationControls();

  console.log(letter);
  const springAnimation = () => {
    controls.start({
      color: ["#2f74b3", "#fff"],
    });
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => springAnimation()}
      className="text-6xl font-bold text-text-main"
    >
      {letter}
    </motion.span>
  );
};

export default Spantext;
