import React from "react";
import { Chip } from "../../components";
import { useCursorContext } from "../../hooks";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  proj: ProjectProps;
}

const ProjectCard = ({ proj }: ProjectCardProps) => {
  const { projectCursor, defaultCursor } = useCursorContext();

  const projectMouseEnter = () => projectCursor();

  const projectMouseLeave = () => defaultCursor();
  return (
    <Link
      onClick={() => projectMouseLeave()}
      onMouseEnter={projectMouseEnter}
      onMouseLeave={projectMouseLeave}
      className="group flex flex-col gap-4 "
      href={`projects/${proj.name}`}
    >
      <div
        className="
            flex 
            w-full 
            flex-col 
            gap-8
          "
      >
        <div
          className="
              relative 
              inline-block 
              h-72 w-full 
              rounded-md 
              bg-bg-secondary 
              sm:h-96
            "
        >
          <Image
            unoptimized
            src={proj.images[0]}
            alt={`${proj.name} screenshot`}
            layout="fill"
            objectFit="contain"
            className="
                  h-full 
                  w-full 
                  px-6 py-12 
                  duration-400
                  ease-in-out
                  group-hover:scale-105
                  lg:py-12 
                  lg:px-8
                "
          />
          <div
            className="
                pointer-events-none 
                absolute 
                inset-0 
                z-10
                h-full
                w-full 
                opacity-20
                duration-400 
                bg-bg-main
                group-hover:opacity-0
              "
          />
        </div>
        <div className="flex flex-col">
          <span
            className="
                text-sm  
                text-muted-secondary
              "
          >
            {proj.role}
          </span>
          <h2
            className="
              break-all 
              text-4xl 
              font-bold 
              text-text-main
              "
          >
            {proj.name}
          </h2>
          <hr
            className="
                my-4 
                border-muted-secondary/50
              "
          />
          <p className="text-lg text-muted-main">{proj.description}</p>
        </div>
      </div>
      <Chip texts={proj.tools} />
    </Link>
  );
};

export default ProjectCard;
