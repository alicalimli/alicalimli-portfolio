import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import data from "../../data.json";
import { Section, SpringyText, PrimaryButton } from "../../components";

const Project = () => {
  const router = useRouter();
  const projectsData = data.projectsData;
  const { pid } = router.query;

  const project = projectsData.find((proj) => proj.name === pid);

  const images = project?.images.map((img) => (
    <div key={img} className="relative overflow-hidden rounded-md">
      <Image alt="" src={`/images/${img}`} width={1500} height={1500} />
    </div>
  ));

  return (
    project && (
      <>
        <Head>
          <title>{project.title}</title>
        </Head>
        <main>
          <Section type="narrow" className="flex flex-col gap-8">
            <header className="flex flex-col gap-4">
              <SpringyText
                text={project.title}
                className="border-b border-muted-secondary/20 pb-4 text-white "
              />
              <p className="text-muted-main fluid-lg">{project.desc}</p>
            </header>
            <Image
              alt=""
              src={`/images/${project.banner}`}
              width={1500}
              height={1500}
            />
            {images}
            <div className="mx-auto mt-12 flex gap-4">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className=""
                href={project.link}
              >
                <PrimaryButton name="Visit Website" />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className=""
                href={project.sourceCode}
              >
                <PrimaryButton name="Source Code" />
              </a>
            </div>
          </Section>
        </main>
      </>
    )
  );
};

export default Project;
