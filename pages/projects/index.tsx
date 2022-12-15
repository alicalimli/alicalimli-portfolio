import React from "react";
import Head from "next/head";
import { ProjectCard, SpringyText } from "../../components";
import { useCursorContext } from "../../setup/context-provider/ContextProvider";
import Image from "next/image";

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
  },
  {
    name: "Clipboard",
    role: "Development",
    link: "https://clipboard-ali.netlify.app/",
  },
  {
    name: "Todo list",
    role: "Design & Development",
    link: "https://todo-list-ali.netlify.app/",
  },
];

const Projects = () => {
  const { projectCursor, defaultCursor } = useCursorContext();

  const otherProjMouseEnter = () => projectCursor("Visit");

  const projectMouseLeave = () => defaultCursor();

  const featuredProjects = featuredProjectsArr.map((proj) => (
    <li key={proj.name}>
      <ProjectCard proj={proj} />
    </li>
  ));

  const otherProjects = otherProjectsArr.map((proj) => (
    <li
      key={proj.name}
      onMouseEnter={otherProjMouseEnter}
      onMouseLeave={projectMouseLeave}
      className="
        group 
        border-t
        border-white
      "
    >
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={proj.link}
        className="
          flex
          items-center
          gap-4
          p-4
          py-8
          duration-400 
          ease-in-out
          text-white
          group-hover:scale-105
          group-hover:text-accent-tinted
        "
      >
        <h2
          className="
            fluid-lg
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
          <header
            className="flex max-w-xl flex-col           
            items-center
            gap-2
            text-center
            md:items-start
            md:text-left
          "
          >
            <SpringyText className="justify-center" text="My Projects" />
          </header>

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
      </main>
    </>
  );
};

export default Projects;
