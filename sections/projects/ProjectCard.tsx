import React from "react";
import { Chip } from "../../components";
import { useCursorContext } from "../../setup/context-provider/ContextProvider";
import Link from "next/link";
import Image from "next/image";

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
    <li
      key={proj.name}
      className="group"
      onMouseEnter={projectMouseEnter}
      onMouseLeave={projectMouseLeave}
    >
      <Link
        onClick={() => projectMouseLeave()}
        className="flex flex-col gap-4"
        href={`projects/${proj.name}`}
      >
        <a
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
              h-96 w-full 
              bg-bg-secondary 
            "
          >
            <div>
              <Image
                src={`/images/${proj.img}.png`}
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
            </div>
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
                border-muted-secondary
              "
            />
            <p className="text-lg text-muted-main">{proj.desc}</p>
          </div>
        </a>
        <Chip texts={proj.tools} />
      </Link>
    </li>
  );
};

export default ProjectCard;
