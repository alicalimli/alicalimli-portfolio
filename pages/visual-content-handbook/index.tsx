import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineTwitter,
  AiOutlineArrowDown,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

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
      "Completely animated visuals showing what the code does & explaining concepts.",
  },
  {
    src: "/previews/visual-preview.webm",
    title: "Visual Preview",
    type: "video",
    description:
      "A static visual but shows a sample preview of what the code does.",
  },
  {
    src: "/previews/static-visual.png",
    title: "Static Visual",
    type: "img",
    description:
      "Explain concepts & show what the code can do without any motions.",
  },
];

const index = () => {
  const footerRef = useRef<HTMLElement>(null);
  const footerFormEmbed = useRef<any>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  const [isChrome, setIsChrome] = useState(false);

  useEffect(() => {
    if (
      /Chrome/.test(navigator.userAgent) &&
      /Google Inc/.test(navigator.vendor)
    ) {
      setIsChrome(true);
    } else {
      setIsChrome(false);
    }
  }, []);

  const onNavWaitlistBtnClick = () => {
    if (!footerRef?.current || !footerFormEmbed?.current) return;

    footerRef.current.scrollIntoView({ behavior: "smooth" });

    footerFormEmbed.current.classList.add("animate-pulse");

    setTimeout(() => {
      footerFormEmbed?.current.classList.remove("animate-pulse");
    }, 3000);
  };

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (!blobRef?.current) return;

      blobRef.current.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const renderPreviews = previewsArray.map(
    ({ src, title, type, description }, index) => {
      const isEven = index % 2 === 0;

      return (
        <motion.li
          initial={{ opacity: 0, x: !isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: (index + 1) * 0.05,
            ease: "easeInOut",
          }}
          key={title}
          className={`flex flex-col items-center justify-between gap-4 md:gap-8 ${
            !isEven ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="rounded-2xl bg-gradient-to-b from-[#191919] to-[#111] p-8">
            {type === "video" || type === "webm" ? (
              <div className="relative w-full sm:w-96">
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
              <img src={src} className=" w-full sm:w-96 " alt={title} />
            ) : null}
          </div>

          <div className="max-w-md">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-lg ">{description}</p>
          </div>
        </motion.li>
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
    <>
      {isChrome ? (
        <>
          <div ref={blobRef} id="blob" className="hidden md:block" />
          <div id="blur" className="hidden md:block" />
        </>
      ) : null}

      <div
        id="visual-handbook-page"
        className="mx-auto flex max-w-[1200px] flex-col justify-center px-vw-12"
      >
        <nav className="mx-auto flex w-full py-8">
          <a
            href="https://bio.link/alicalimli"
            className="flex items-center gap-4"
          >
            <img src="/images/blue-profile.png" className="h-16 w-16" />
            <h6 className="fluid-lg">
              Ali <span className="hidden md:inline-block">Calimli</span>
            </h6>
          </a>

          <div className="ml-auto flex items-center gap-4">
            <a className="" href="#explore-section">
              Explore
            </a>
            <button
              onClick={onNavWaitlistBtnClick}
              className="flex items-center justify-center rounded-full p-3 px-6 bg-accent-primary"
            >
              Join waitlist
            </button>
          </div>
        </nav>

        <main className="">
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="relative mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center gap-2 pb-16 text-center "
          >
            <h1 className="text-4xl font-semibold md:text-5xl xl:text-6xl ">
              <span className="text-accent-primary">Learn how to</span> create
              coding visuals that people like
            </h1>
            <p className=" mb-4 max-w-4xl opacity-90 fluid-lg">
              A guide on how I make my web development visuals that I put in
              this{" "}
              <a
                rel="noopener noreferrer"
                href="https://www.webdevvisuals.com/visuals"
                target="_blank"
                className="underline text-accent-tinted"
              >
                website
              </a>
              , By joining the waitlist you'll be subscribed to my newsletter.
            </p>
            <div>
              <iframe
                className="mx-auto w-full md:w-[600px]"
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
              <p className="mt-2 text-start opacity-60 ">
                You'll get an early access when the product is ready.
              </p>
            </div>

            <span className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 opacity-60">
              Explore more{" "}
              <AiOutlineArrowDown className="animate-bounce text-lg" />
            </span>
          </motion.header>

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

            <ul className="flex flex-col gap-12">{renderPreviews}</ul>
          </div>
        </main>

        <motion.footer
          ref={footerRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="my-16 mt-32"
        >
          <div className="">
            <div className="mb-2 ">
              <h2 className="text-2xl font-semibold">Join the waitlist now</h2>
              <p className="text-md opacity-90">
                You'll get an early access when its ready
              </p>
            </div>

            <iframe
              ref={footerFormEmbed}
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
        </motion.footer>
      </div>
    </>
  );
};

export default index;
