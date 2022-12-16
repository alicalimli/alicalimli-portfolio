import React, { useEffect, useState } from "react";
import Head from "next/head";
import { PrimaryButton, ProjectCard, SpringyText } from "../../components";
import { useCursorContext } from "../../setup/context-provider/ContextProvider";
import Image from "next/image";
import { motion } from "framer-motion";

const featuredProjectsArr = [
  {
    name: "Moviematrix",
    role: "Design & Development",
    img: "moviematrix",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus dolorum alias, nisi similique voluptatibus maiores, facilis autem ducimus ipsam velit quasi quisquam hic? Debitis placeat eligendi fugiat quo sunt.",
    tools: ["Javascript", "CSS", "HTML"],
  },
  {
    name: "ACMessenger",
    img: "acmessenger",
    role: "Design & Development",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus dolorum alias, nisi similique voluptatibus maiores, facilis autem ducimus ipsam velit quasi quisquam hic? Debitis placeat eligendi fugiat quo sunt.",
    tools: [
      "React",
      "Typescript",
      "Firebase",
      "TailwindCSS",
      "Redux Toolkit",
      "Framer Motion",
    ],
  },
];

const otherProjectsArr = [
  {
    name: "Quizzical",
    role: "Development",
    link: "https://quizzical-ali.netlify.app/",
    img: "moviematrix",
  },
  {
    name: "Clipboard",
    role: "Development",
    link: "https://clipboard-ali.netlify.app/",
    img: "acmessenger",
  },
  {
    name: "Todo list",
    role: "Design & Development",
    link: "https://todo-list-ali.netlify.app/",
    img: "moviematrix",
  },
];

const Projects = () => {
  const { projectCursor, defaultCursor } = useCursorContext();

  const [imgPath, setImgPath] = useState("acmessenger");

  const otherProjMouseEnter = (projImg: string) => {
    setImgPath(projImg);
    projectCursor("Visit");
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

  const featuredProjects = featuredProjectsArr.map((proj) => (
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
        <motion.img
          src={`/images/${proj.img}.png`}
          alt={""}
          className={`
            invisible
            scale-50
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
          duration-400
          ease-in-out
          text-white
          group-hover:scale-x-105
          group-hover:text-muted-secondary/50
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

      <main className="section flex flex-col gap-8">
        <section className="flex flex-col gap-8">
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
        </section>

        <section className="mt-16">
          <ul className="flex flex-col">{otherProjects}</ul>
        </section>

        <PrimaryButton name={"Contact Me"} className="mx-auto mt-16" />
      </main>
    </>
  );
};

export default Projects;
