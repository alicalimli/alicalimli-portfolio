import { acmessenger, moviematrix } from "../../assets";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

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
  const featuredProjects = featuredProjectsArr.map((proj) => (
    <ProjectCard proj={proj} />
  ));

  return (
    <section className="flex flex-col gap-8 p-8 lg:py-14 lg:px-24">
      <Navbar />
      <ul className="fitcol grid grid-cols-1 gap-16 md:grid-cols-2">
        {featuredProjects}
      </ul>
    </section>
  );
};

export default Hero;
