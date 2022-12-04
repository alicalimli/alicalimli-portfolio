import { useEffect, useRef } from "react";
import { codingBoy } from "../../assets";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { Chip } from "../../components";

const myTools = [
  "HTML",
  "CSS",
  "JavaScript",
  "TailwindCSS",
  "React",
  "Typescript",
  "Firebase",
  "Redux Toolkit",
  "Framer Motion",
  "Linux",
  "Bootstrap",
];

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: codingBoy,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className=" flex items-center gap-4 p-8 lg:px-16 lg:py-7 xl:px-24 xl:py-14">
      <header
        className="
          flex 
          w-full 
          max-w-xl 
          flex-col 
          gap-2
        "
      >
        <h1 className="font-bold text-text-main fluid-4xl">
          A little about me
        </h1>
        <p className="text-muted-main fluid-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero illo
          necessitatibus pariatur! Beatae earum recusandae, id magnam hic error
          dicta quaerat officiis unde similique ad rem? Doloribus dignissimos
          natus quibusdam!
        </p>
      </header>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="
          hidden 
          w-3/4
          max-w-full
          md:block  
          "
        viewport={{ once: true }}
        transition={{ type: "spring", mass: 0.2 }}
      >
        <Lottie options={defaultOptions} />
      </motion.div>
    </section>
  );
};

export default About;
