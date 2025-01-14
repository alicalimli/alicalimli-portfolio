import { Navbar, PrimaryButton, ProjectCard, Section } from "../../components";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { WEBSITE_DATA } from "../../data";

const Projects = () => {
  const featuredProjects = WEBSITE_DATA.featuredProjects.map((proj) => (
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
        <Link className="mx-auto mt-8" href={"/projects#other-projects"}>
          {" "}
          <PrimaryButton name="Projects Archive" />
        </Link>
      </main>
    </Section>
  );
};

export default Projects;
