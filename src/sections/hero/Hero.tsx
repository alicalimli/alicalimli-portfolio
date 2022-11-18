import React from "react";

const navLinksArr = ["Projects", "About", "Contact"];

const Hero = () => {
  const navLinks = navLinksArr.map((navLink) => (
    <li className="text-text-main text-lg">{navLink}</li>
  ));

  return (
    <section className="py-8 px-16">
      <nav className="flex gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-text-main font-bold text-6xl">Ali Calimli</h1>
          <h1 className="text-muted-main  text-xl max-w-xs">
            Web Developer that focuses on front-end development
          </h1>
        </div>
        <ul className="flex gap-4 ml-auto">{navLinks}</ul>
      </nav>
    </section>
  );
};

export default Hero;
