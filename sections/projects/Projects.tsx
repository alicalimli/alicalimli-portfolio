import { Navbar, PrimaryButton, ProjectCard, Section } from "../../components";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "../../config/supabaseClient";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from("projects").select();

      data && setProjects(data as any);
    };
    fetchProjects();
  }, []);

  const featuredProjects = projects.map((proj) => (
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
