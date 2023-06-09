import React from "react";
import { useCursorContext } from "../../hooks";

interface BlogCardProps {
  blog: ProjectProps;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const { projectCursor, defaultCursor, githubProjectCursor } =
    useCursorContext();

  const projectMouseEnter = () => projectCursor();

  const projectMouseLeave = () => defaultCursor();

  return (
    <a
      onClick={() => projectMouseLeave()}
      onMouseEnter={projectMouseEnter}
      onMouseLeave={projectMouseLeave}
      rel="noopener noreferrer"
      target="_blank"
      className="group flex flex-col gap-4 rounded-3xl pb-4 duration-200 hover:bg-bg-secondary/50"
      href={blog.link}
    >
      <div
        className="
            flex 
            w-full 
            flex-col 
            gap-6
          "
      >
        <div
          className="
              relative 
              inline-block 
              aspect-[4/3]
              rounded-3xl
              bg-bg-secondary 
            "
        >
          <div
            className="
                  px-6 py-12 
                  lg:py-12 
                  lg:px-8
                "
          >
            {blog.imgType === "image" ? (
              <img
                src={"/hover.webm"}
                alt={`${blog.name} screenshot`}
                className="
                  rounded-2xl
                  object-contain
                  px-6 py-12 
                  duration-400
                  ease-in-out
                  group-hover:scale-105
                  lg:py-12 
                  lg:px-8
                "
              />
            ) : null}

            {blog.imgType === "webm" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                src={blog.image}
                className="
                  rounded-xl
                  object-contain
                "
              />
            ) : null}
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

        <div className="flex flex-col gap-2 px-3">
          {" "}
          <h2
            className="
                  break-all
                  font-semibold
                  text-text-main 
                  fluid-lg
                  "
          >
            {blog.title}
          </h2>
          <p className="fluid-md text-muted-main">{blog.description}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
