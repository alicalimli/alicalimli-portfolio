import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Chip } from "../../components";
import { useCursorContext } from "../../setup/context-provider/ContextProvider";

const transition = { duration: 0.3 };

const projectCardVariant = {
  hover: {},
};

const projectCardImgVariant = {
  animate: { scale: 1, transition },
  hover: { scale: 1.05, transition },
};

const projectOverlayVariant = {
  animate: { opacity: 0.15, transition },
  hover: { opacity: 0, transition },
};

interface ProjectCardProps {
  proj: {
    name: string;
    role: string;
    desc: string;
    img: string;
    tools: string[];
  };
}

const ProjectCard = ({ proj }: ProjectCardProps) => {
  const { projectCursor, defaultCursor } = useCursorContext();

  const projectMouseEnter = () => projectCursor();

  const projectMouseLeave = () => defaultCursor();
  return (
    <motion.li
      key={proj.name}
      variants={projectCardVariant}
      whileHover="hover"
      initial="initial"
      animate="animate"
      onMouseEnter={projectMouseEnter}
      onMouseLeave={projectMouseLeave}
    >
      <Link className="flex flex-col gap-4" to={`projects/${proj.name}`}>
        <a className="flex w-full flex-col gap-8">
          <div className="relative inline-block w-full px-6 py-12 bg-bg-secondary lg:py-16 lg:px-12">
            <motion.img
              variants={projectCardImgVariant}
              src={proj.img}
              className="h-full w-full object-contain"
            />
            <motion.div
              variants={projectOverlayVariant}
              className="absolute inset-0 z-10 h-full w-full bg-bg-main"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm  text-muted-secondary">{proj.role}</span>
            <h2 className="text-4xl font-bold text-text-main">{proj.name}</h2>
            <hr className="my-4 border-muted-secondary" />
            <p className="text-lg text-muted-main">{proj.desc}</p>
          </div>
        </a>
        <Chip texts={proj.tools} />
      </Link>
    </motion.li>
  );
};

export default ProjectCard;
