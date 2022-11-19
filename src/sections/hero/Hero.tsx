import React from "react";
import { acmessenger, moviematrix } from "../../assets";
import { useCursorContext } from "../../setup/context-provider/ContextProvider";

const navLinksArr = ["Projects", "About", "Contact"];

const featuredProjectsArr = [
  {
    name: "Moviematrix",
    role: "Design & Development",
    img: moviematrix,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "ACMessenger",
    img: acmessenger,
    role: "Design & Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Hero = () => {
  const { projectCursor, defaultCursor } = useCursorContext();

  const navLinks = navLinksArr.map((navLink) => (
    <li className="text-lg text-text-main">{navLink}</li>
  ));

  const projectMouseEnter = () => projectCursor();

  const projectMouseLeave = () => defaultCursor();

  const featuredProjects = featuredProjectsArr.map((proj) => (
    <li
      key={proj.name}
      onMouseEnter={projectMouseEnter}
      onMouseLeave={projectMouseLeave}
    >
      <a className="flex w-full flex-col gap-4 ">
        <div className="inline-block h-96 w-full p-12 bg-bg-secondary">
          <img src={proj.img} className="h-full w-full object-contain" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm  text-muted-secondary">{proj.role}</span>
          <h2 className="text-4xl font-bold text-text-main">{proj.name}</h2>

          <p className="text-lg text-muted-main">{proj.desc}</p>
        </div>
      </a>
    </li>
  ));

  return (
    <section className="flex flex-col gap-8 p-8 lg:py-14 lg:px-24">
      <nav className="flex gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-bold text-text-main">Ali Calimli</h1>
          <h1 className="max-w-xs  text-xl text-muted-main">
            Web Developer that focuses on front-end development
          </h1>
        </div>
        <ul className="ml-auto flex gap-4">{navLinks}</ul>
      </nav>
      <ul className="fitcol grid grid-cols-1 gap-8 md:grid-cols-2">
        {featuredProjects}
      </ul>
    </section>
  );
};

export default Hero;
