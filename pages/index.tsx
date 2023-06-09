import Head from "next/head";
import React from "react";
import {
  ProjectsSection,
  AboutSection,
  ContactSection,
  BlogsSection,
} from "../sections";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ali Calimli - Frontend Developer</title>
        <meta
          name="description"
          content="Ali Calimli - Front-End Developer specializing in creating visually stunning web applications."
        />
        <meta
          name="keywords"
          content="front-end developer, web developer, HTML, CSS, JavaScript, React, portfolio, ali, ali calimli, alicalimli"
        />
        <meta property="og:title" content="Ali Calimli - Frontend Developer" />
        <meta
          property="og:description"
          content="Ali Calimli - Front-End Developer specializing in creating visually stunning web applications."
        />
        <meta property="og:url" content="https://alicalimli.com" />
        <meta property="og:type" content="website" />
      </Head>
      <ProjectsSection />
      <BlogsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
