import { acmessenger, moviematrix } from "../../assets";
import { Spantext } from "../../components";
import ProjectCard from "./ProjectCard";

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

const nameArr = "Ali Calimli".split("");

const Hero = () => {
  const navLinks = navLinksArr.map((navLink, i) => (
    <li key={navLink + i} className="text-lg text-text-main">
      {navLink}
    </li>
  ));

  const name = nameArr.map((letter: string) => <Spantext letter={letter} />);

  const featuredProjects = featuredProjectsArr.map((proj) => (
    <ProjectCard proj={proj} />
  ));

  return (
    <section className="flex flex-col gap-8 p-8 lg:py-14 lg:px-24">
      <nav className="flex gap-4">
        <div className="flex flex-col gap-2">
          <div>{name}</div>
          <h1 className="max-w-xs  text-xl text-muted-main">
            Web Developer that focuses on front-end development
          </h1>
        </div>
        <ul className="ml-auto flex gap-4">{navLinks}</ul>
      </nav>
      <ul className="fitcol grid grid-cols-1 gap-16 md:grid-cols-2">
        {featuredProjects}
      </ul>
    </section>
  );
};

export default Hero;
