import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import data from "../../data.json";
import { SpringyText } from "../../components";

const Project = () => {
  // const router = useRouter();
  // const projectsData = data.projectsData;
  // const { pid } = router.query;

  // const project = projectsData.find((proj) => proj.name === pid);

  return (
    <>
      {/* <Head>
        <title>{pid}</title>
      </Head>
      <main className="section full flex flex-col gap-4">
        <section className="section">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              alt=""
              src={`/images/${project?.img}`}
              width={1560}
              height={1560}
            />
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[#111]/60 font-bold text-white fluid-5xl">
              {project.title}
            </div>
          </div>
        </section>
      </main> */}
    </>
  );
};

export default Project;
