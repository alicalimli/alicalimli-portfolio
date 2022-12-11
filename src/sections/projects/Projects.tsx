import { useNavigate } from "react-router-dom";
import { acmessenger, moviematrix } from "../../assets";
import { Navbar, PrimaryButton } from "../../components";
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

const Projects = () => {
  const navigate = useNavigate();

  const archiveBtnHandler = () => navigate("/projects");

  const featuredProjects = featuredProjectsArr.map((proj) => (
    <ProjectCard key={proj.name} proj={proj} />
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
        <Navbar type="main" />
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
        <PrimaryButton
          name="Projects Archive"
          className="mx-auto mt-8"
          onClick={archiveBtnHandler}
        />
      </main>
    </section>
  );
};

export default Projects;
