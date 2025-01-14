import { useEffect, useRef } from "react";
import codingBoy from "../../public/lottie/95348-coding-boy.json";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { Chip, PrimaryButton, Section, SpringyText } from "../../components";
import Link from "next/link";
import { WEBSITE_DATA } from "../../data";

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
        className="mb-24 flex items-center justify-center gap-4 md:justify-start"
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
          <SpringyText
            className="justify-center"
            text={WEBSITE_DATA.aboutSectionTitle}
          />
          <p className="text-muted-main fluid-lg">
            {WEBSITE_DATA.aboutSectionDescription} <br />
          </p>

          {/* <Link href="/about" className="mt-8 w-fit">
            <PrimaryButton name="More About Me" />
        </Link> */}
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
