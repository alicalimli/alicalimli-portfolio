import React from "react";
import { motion } from "framer-motion";
import { Chip } from "../../components";
import { useCursorContext } from "../../setup/context-provider/ContextProvider";
import Link from "next/link";
import Image from "next/image";

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
      <Link
        onClick={() => projectMouseLeave()}
        className="flex flex-col gap-4"
        href={`projects/${proj.name}`}
      >
        <a className="flex w-full flex-col gap-8">
          <div className="relative inline-block h-96 w-full bg-bg-secondary ">
            <Image
              src={`/images/${proj.img}.png`}
              alt={`${proj.name} screenshot`}
              className="h-full w-full px-6 py-12 lg:py-12 lg:px-8"
              layout="fill"
              objectFit="contain"
            />
            <motion.div
              variants={projectOverlayVariant}
              className="absolute inset-0 z-10 h-full w-full bg-bg-main"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm  text-muted-secondary">{proj.role}</span>
            <h2 className="break-all text-4xl font-bold text-text-main">
              {proj.name}
            </h2>
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
