import React from "react";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const linksArray = [
  {
    Icon: AiOutlineTwitter,
    href: "https://twitter.com/alicalimli_dev",
  },
  {
    Icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/alicalimli/",
  },
  {
    Icon: AiFillGithub,
    href: "https://github.com/alicalimli/",
  },
];

const previewsArray = [
  {
    src: "/previews/animated-visual.webm",
    title: "Animated Visual",
    type: "video",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sed!",
  },
  {
    src: "/previews/visual-preview.webm",
    title: "Visual Preview",
    type: "video",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sed!",
  },
  {
    src: "/previews/static-visual.png",
    title: "Static Visual",
    type: "img",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sed!",
  },
];

const index = () => {
  const renderPreviews = previewsArray.map(
    ({ src, title, type, description }, index) => {
      const isEven = index % 2 === 0;

      return (
        <div
          key={title}
          className={`flex items-center justify-between gap-8 ${
            !isEven ? "flex-row-reverse" : ""
          }`}
        >
          <div className="rounded-2xl bg-gradient-to-b from-[#191919] to-[#111] p-8">
            {type === "video" || type === "webm" ? (
              <div className="relative w-96">
                <video
                  className="bg-bg-main"
                  preload=""
                  loop
                  muted
                  autoPlay={true}
                >
                  <source src={`${src}`} type="video/webm" />
                </video>
              </div>
            ) : null}

            {type === "img" ? (
              <img src={src} className=" w-96 " alt={title} />
            ) : null}
          </div>

          <div className="max-w-md">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-lg ">{description}</p>
          </div>
        </div>
      );
    }
  );

  const renderLinks = linksArray.map(({ href, Icon }) => (
    <li key={href}>
      <a target="_blank" rel="noopener noreferrer" href={href}>
        <Icon className="text-xl duration-300 hover:text-accent-primary" />
      </a>
    </li>
  ));

  return (
    <div
      id="visual-handbook-page"
      className="mx-auto flex max-w-[1200px] flex-col justify-center px-vw-12"
    >
      <nav className="mx-auto flex w-full py-8">
        <figure className="flex items-center gap-4">
          <img src="/images/blue-profile.png" className="h-16 w-16" />
          <figcaption className="fluid-lg">Ali Calimli</figcaption>
        </figure>

        <div className="ml-auto flex items-center gap-4">
          <a className="" href="#explore-section">
            Explore
          </a>
          <a className="flex items-center justify-center rounded-full p-3 px-6 bg-accent-primary">
            Join the waitlist
          </a>
        </div>
      </nav>

      <main className="">
        <header className="mx-auto mt-20 flex max-w-3xl flex-col items-center justify-center gap-2 text-center ">
          <h1 className=" text-5xl font-semibold ">
            <span className="text-accent-primary">Learn how to</span> create
            attractive visuals that people love
          </h1>
          <p className=" mb-4 opacity-90 fluid-lg">
            A guide on how I make my web development visuals that I share
            online, you can check out every visual I made{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.webdevvisuals.com/visuals"
              target="_blank"
              className="text-underline text-accent-primary"
            >
              here
            </a>
          </p>
          <iframe
            className="mx-auto  w-[600px]"
            src="https://embeds.beehiiv.com/9e9dd62a-dffb-424a-a8f9-91694b124975?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            frameBorder="0"
            scrolling="no"
            style={{
              margin: 0,
              borderRadius: "0px !important",
              backgroundColor: "transparent",
            }}
          ></iframe>
        </header>

        <div
          id="explore-section"
          className="mx-auto mt-24 flex max-w-4xl flex-col gap-8"
        >
          <header className="mx-auto mb-8 text-center">
            <h2 className="text-4xl font-semibold">What you'll learn</h2>
            <p className="text-lg opacity-90">
              The 3 types of visuals I distribute
            </p>
          </header>
          {renderPreviews}
        </div>
      </main>

      <footer className="my-16 mt-32">
        <div className="">
          <div className="mb-2 ">
            <h2 className="text-2xl font-semibold">Join the waitlist now</h2>
            <p className="text-md opacity-90">
              You'll get an early access when its ready
            </p>
          </div>

          <iframe
            className="w-full max-w-lg"
            src="https://embeds.beehiiv.com/9e9dd62a-dffb-424a-a8f9-91694b124975?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            frameBorder="0"
            scrolling="no"
            style={{
              margin: 0,
              borderRadius: "0px !important",
              backgroundColor: "transparent",
            }}
          ></iframe>
        </div>

        <div className="my-4 h-1 w-full bg-bg-secondary" />

        <div className="flex gap-4">
          <p>© 2023 Ali Calimli. All rights reserved.</p>

          <ul className="ml-auto flex gap-1">{renderLinks}</ul>
        </div>
      </footer>
    </div>
  );
};

export default index;
