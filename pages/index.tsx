import Head from "next/head";
import React from "react";
import { ProjectsSection, AboutSection, ContactSection } from "../sections";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ali Calimli</title>
      </Head>
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
