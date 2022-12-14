import { useRouter } from "next/router";
import React from "react";

const Project = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <div className="text-5xl text-white">Project {pid}</div>;
};

export default Project;
