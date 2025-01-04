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
import data from "../../data.json";
import { projects } from "../../sections/projects/Projects";

const otherProjectsArr = [
  {
    name: "Quizzical",
    role: "Development",
    link: "https://quizzical-ali.netlify.app/",
    img: "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fquizzical.webp?alt=media&token=526c087c-cc2a-41e7-9649-6a4b83da42cb",
  },
  {
    name: "Clipboard",
    role: "Development",
    link: "https://clipboard-ali.netlify.app/",
    img: "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fclipboard.webp?alt=media&token=68b0f75a-ca19-4b21-a13c-750d55b23b5c",
  },
  {
    name: "Todo list",
    role: "Design & Development",
    link: "https://todo-list-ali.netlify.app/",
    img: "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Ftodolist.webp?alt=media&token=20a8b1ef-ae13-444a-9bed-73492fecbc30",
  },
];

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

  const featuredProjects = projects.map((proj) => (
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

  const otherProjects = otherProjectsArr.map((proj) => (
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

        <Section>
          <SpringyText className="mb-8 justify-center" text="Other Projects" />
          <ul className="flex flex-col">{otherProjects}</ul>
        </Section>

        <PrimaryButton name={"Contact Me"} className="mx-auto" />
      </main>
    </>
  );
};

export default Projects;
