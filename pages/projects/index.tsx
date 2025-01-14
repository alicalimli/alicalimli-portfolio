import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  PrimaryButton,
  ProjectCard,
  Section,
  SpringyText,
} from "../../components";
import { useCursorContext } from "../../hooks";
import Image from "next/image";
import { motion } from "framer-motion";
import data, { WEBSITE_DATA } from "../../data";
import Link from "next/link";

const Projects = () => {
  const { defaultCursor, otherProjectCursor } = useCursorContext();

  const [imgPath, setImgPath] = useState("acmessenger");

  const otherProjMouseEnter = (projImg: string) => {
    setImgPath(projImg);
    otherProjectCursor();
  };

  const [mousePos, setMousePos] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    // Returns function if hover is not supported
    if (window.matchMedia("(hover: none)").matches) return;

    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setMousePos({ x, y });
    });
  }, []);

  const projectMouseLeave = () => defaultCursor();

  const featuredProjects = WEBSITE_DATA.featuredProjects.map((proj) => (
    <li key={proj.name}>
      <ProjectCard proj={proj} />
    </li>
  ));

  const imgVariant = {
    animate: {
      top: mousePos.y,
      left: mousePos.x,
      x: "-50%",
      y: "-60%",
      transition: {
        type: "spring",
        mass: 0.3,
      },
    },
  };

  const otherProjects = WEBSITE_DATA.otherProjects.map((proj) => (
    <li
      key={proj.name}
      onMouseEnter={() => otherProjMouseEnter(proj.img)}
      onMouseLeave={projectMouseLeave}
      className="
        group 
      "
    >
      <motion.div
        variants={imgVariant}
        animate={"animate"}
        className={`
          pointer-events-none
          absolute
          top-0
          left-0
        `}
      >
        <img
          src={proj.img}
          alt={""}
          className={`
            invisible
            z-10
            aspect-square
        w-[400px]
        scale-50
        rounded-[8px]
            border
            border-[#fff]/20 bg-[#111]
            object-cover
            opacity-0
            duration-400
            ease-in-out
            group-hover:visible
            group-hover:scale-100
            group-hover:opacity-100
          `}
        />
      </motion.div>

      <a
        rel="noopener noreferrer"
        target="_blank"
        href={proj.link}
        className="
          flex
          items-center
          gap-4
          border-t
          border-muted-secondary/20
          p-4 
          py-8
          text-muted-secondary/80
          duration-400
          ease-in-out
          group-hover:scale-x-105
          group-hover:text-white
          hover:border-white
        "
      >
        <h2
          className="
            fluid-2xl
          "
        >
          {proj.name}
        </h2>
        <p className="fluid-md ml-auto">{proj.role}</p>
      </a>
    </li>
  ));

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <main className="flex flex-col gap-4">
        <Section className="flex flex-col gap-8">
          <SpringyText className="justify-center" text="Featured Projects" />
          <ul
            className="
            grid 
            grid-cols-1 
            gap-16 
            md:grid-cols-2 
          "
          >
            {featuredProjects}
          </ul>
        </Section>

        <div id="other-projects">
          {" "}
          <Section>
            <SpringyText
              className="mb-8 justify-center"
              text="Other Projects"
            />
            <ul className="flex flex-col">{otherProjects}</ul>
          </Section>
        </div>

        <Link className="mx-auto mt-8" href={"/#contact-section"}>
          {" "}
          <PrimaryButton name={"Contact Me"} className="mx-auto" />
        </Link>
      </main>
    </>
  );
};

export default Projects;
