import { useEffect, useRef } from "react";
import codingBoy from "../../public/lottie/95348-coding-boy.json";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { Chip, PrimaryButton, Section, SpringyText } from "../../components";
import Link from "next/link";

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

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: codingBoy,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const About = () => {
  // const navigate = useNavigate();

  return (
    <Section>
      <main
        id="about-section"
        className="flex items-center justify-center gap-4 md:justify-start"
      >
        <header
          className="
          flex 
          w-full 
          max-w-2xl
          flex-col
          items-center
          gap-2
          text-center
          md:items-start
          md:text-left
        "
        >
          <SpringyText className="justify-center" text="A Little About Me" />
          <p className="text-muted-main fluid-lg">
            Focused on building awesome and high-quality websites that are also
            visually appealing and easy to use. I have a strong foundation in
            HTML, CSS, and JavaScript, and I'm proficient in using React. I love
            learning something new and I'm always looking to improve my skills
            and stay up-to-date on the latest front-end technologies. <br />
          </p>

          <Link href="/about" className="mt-8 w-fit">
            <PrimaryButton name="More About Me" />
          </Link>
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
      </main>
    </Section>
  );
};

export default About;
