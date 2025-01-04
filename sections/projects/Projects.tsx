import { Navbar, PrimaryButton, ProjectCard, Section } from "../../components";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export const projects: ItemProps[] = [
  {
    title: "ACMessenger",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Facmessenger.webp?alt=media&token=fdc201e4-bf18-493a-b9ab-58d41149741b",
    description:
      "A Fullstack Chatapp that I've built to learn more about React and its popular libraries like redux, and also learn to use Firebase.",
    cta: "Visit Website",
    role: "Design & Development",
    link: "https://ac-messenger-p.web.app/",
    sourceCode: "https://github.com/alicalimli/ac-messenger",
    technologies: [
      "ReactJS",
      "Typescript",
      "Firebase",
      "TailwindCSS",
      "Redux Toolkit",
    ],
  },
  {
    title: "MovieMatrix",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fmoviematrix.webp?alt=media&token=f7ed9cfc-639e-4836-acae-4fe355082803",
    sourceCode: "https://github.com/alicalimli/movie-matrix-app/",
    description:
      "A Vanilla JS Project that I have built to deepen my knowledge about HTML, CSS and JavaScript and practice consuming API’s as well.",
    cta: "Visit Website",
    role: "Design & Development",
    link: "https://moviematrix.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  const featuredProjects = projects.map((proj) => (
    <li key={proj.name}>
      <ProjectCard proj={proj} />
    </li>
  ));

  return (
    <Section className="flex flex-col gap-16">
      <Navbar />

      <main
        id="projects-section"
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
    </Section>
  );
};

export default Projects;
