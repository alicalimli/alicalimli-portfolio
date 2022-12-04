import { useNavigate } from "react-router-dom";
import { acmessenger, moviematrix } from "../../assets";
import { PrimaryButton } from "../../components";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

const featuredProjectsArr = [
  {
    name: "Moviematrix",
    role: "Design & Development",
    img: moviematrix,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus dolorum alias, nisi similique voluptatibus maiores, facilis autem ducimus ipsam velit quasi quisquam hic? Debitis placeat eligendi fugiat quo sunt.",
    tools: ["Javascript", "CSS", "HTML"],
  },
  {
    name: "ACMessenger",
    img: acmessenger,
    role: "Design & Development",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus dolorum alias, nisi similique voluptatibus maiores, facilis autem ducimus ipsam velit quasi quisquam hic? Debitis placeat eligendi fugiat quo sunt.",
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
  const navigate = useNavigate();

  const archiveBtnHandler = () => navigate("/projects");

  const featuredProjects = featuredProjectsArr.map((proj) => (
    <ProjectCard proj={proj} />
  ));

  return (
    <section
      className="
        flex 
        flex-col 
        gap-8 
        p-8 
        md:py-8 
        md:px-16 
        xl:py-14 
        xl:px-24
      "
    >
      <Navbar />
      <ul
        className="
            grid 
            grid-cols-1 
            gap-16 
            sm:grid-cols-2 
          "
      >
        {featuredProjects}
      </ul>
      <PrimaryButton
        name="Projects Archive"
        className="mt-8"
        onClick={archiveBtnHandler}
      />
    </section>
  );
};

export default Hero;
