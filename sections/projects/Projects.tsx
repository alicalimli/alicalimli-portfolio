import { Navbar, PrimaryButton, ProjectCard, Section } from "../../components";
import React, { useEffect } from "react";
import Link from "next/link";
import data from "../../data.json";

const Projects = () => {
  const featuredProjects = data.featuredProjects.map((proj) => (
    <li key={proj.name}>
      <ProjectCard proj={proj} />
    </li>
  ));

  return (
    <Section className="flex flex-col gap-16">
      <Navbar />
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
    </Section>
  );
};

export default Projects;
