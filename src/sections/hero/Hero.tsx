import React from "react";
import { acmessenger, moviematrix } from "../../assets";

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
  const navLinks = navLinksArr.map((navLink) => (
    <li className="text-text-main text-lg">{navLink}</li>
  ));

  const featuredProjects = featuredProjectsArr.map((proj) => (
    <li key={proj.name}>
      <a className="flex flex-col w-full gap-4 ">
        <div className="w-full h-96 inline-block bg-bg-secondary p-12">
          <img src={proj.img} className="object-contain h-full w-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm  text-muted-secondary">{proj.role}</span>
          <h2 className="text-text-main text-4xl font-bold">{proj.name}</h2>

          <p className="text-muted-main text-lg">{proj.desc}</p>
        </div>
      </a>
    </li>
  ));

  return (
    <section className="flex flex-col gap-8 p-8 lg:py-14 lg:px-24">
      <nav className="flex gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-text-main font-bold text-6xl">Ali Calimli</h1>
          <h1 className="text-muted-main  text-xl max-w-xs">
            Web Developer that focuses on front-end development
          </h1>
        </div>
        <ul className="flex gap-4 ml-auto">{navLinks}</ul>
      </nav>
      <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 fitcol">
        {featuredProjects}
      </ul>
    </section>
  );
};

export default Hero;
