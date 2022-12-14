import { PrimaryButton, ProjectCard } from "../../components";
import React from "react";
import Link from "next/link";

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

const Projects = () => {
  const featuredProjects = featuredProjectsArr.map((proj) => (
    <li key={proj.name}>
      <ProjectCard proj={proj} />
    </li>
  ));

  return (
    <section className="section">
      <main
        className="
          flex 
          flex-col 
          gap-8 
        "
      >
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
        <Link className="mx-auto mt-8" href={"/projects"}>
          {" "}
          <PrimaryButton name="Projects Archive" />
        </Link>
      </main>
    </section>
  );
};

export default Projects;
