import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

interface SpringyLetterProps {
  letter: string;
}

const SpringyLetter = ({ letter }: SpringyLetterProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const controls = useAnimationControls();

  const springAnimation = () => {
    if (isPlaying) return;

    setIsPlaying(true);
    controls.start({
      transform: [
        "scale(1,1)",
        "scale(1.2,.6)",
        "scale(.7,1.3)",
        "scale(1.2,.8)",
        "scale(.8,1.2)",
        "scale(1,1)",
      ],
      transition: {
        times: [0, 0.3, 0.45, 0.65, 0.8, 1],
      },
    });
  };

  return (
    <motion.span
      animate={controls}
      whileHover={{ color: "#2f74b3" }}
      onMouseOver={() => springAnimation()}
      onAnimationComplete={() => setIsPlaying(false)}
      className="inline-block font-bold text-text-main fluid-4xl"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export default SpringyLetter;
