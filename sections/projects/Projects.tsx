import { PrimaryButton, ProjectCard } from "../../components";
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
