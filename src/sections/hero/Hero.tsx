import { acmessenger, moviematrix } from "../../assets";
import { PrimaryButton } from "../../components";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

const featuredProjectsArr = [
  {
    name: "Moviematrix",
    role: "Design & Development",
    img: moviematrix,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tools: ["Javascript", "CSS", "HTML"],
  },
  {
    name: "ACMessenger",
    img: acmessenger,
    role: "Design & Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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

const Hero = () => {
  const featuredProjects = featuredProjectsArr.map((proj) => (
    <ProjectCard proj={proj} />
  ));

  return (
    <section className="flex flex-col gap-8 p-8 lg:py-14 lg:px-24">
      <Navbar />
      <ul className="fitcol grid grid-cols-1 gap-16 md:grid-cols-2">
        {featuredProjects}
      </ul>
      <PrimaryButton />
    </section>
  );
};

export default Hero;
