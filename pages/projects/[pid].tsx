import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Project = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>{pid}</title>
      </Head>
      <div className="text-5xl text-white">Project {pid}</div>
    </>
  );
};

export default Project;
