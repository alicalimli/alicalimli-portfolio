import React from "react";
import { profile } from "../../assets";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const socialsArr = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/alicalimli/" },
  { name: "Twitter", link: "https://twitter.com/alicalimli_dev" },
  { name: "Github", link: "https://github.com/alicalimli" },
];

const Contact = () => {
  const socials = socialsArr.map((social) => (
    <li key={social.name}>
      <a
        href={social.link}
        rel="noopener noreferrer"
        target="_blank"
        className="text-muted-main"
      >
        {social.name}
      </a>
    </li>
  ));

  return (
    <section className="section ">
      <main className="flex gap-16">
        <div className="flex flex-col gap-12">
          <header className="flex flex-col gap-2">
            <h1 className="text-6xl font-bold text-text-main fluid-4xl">
              Lets Collaborate!
            </h1>
            <h1 className="max-w-xl text-muted-main fluid-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, consectetur!
            </h1>
          </header>
          <ContactForm />
        </div>
        <div className="hidden w-1/4 flex-col gap-4 md:flex">
          <img src={profile} className="h-28 w-28 rounded-full" />
          <div>
            <h3 className="text-3xl text-text-main">Email</h3>
            <a
              href="mailto:alicalimli76@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="text-muted-main"
            >
              alicalimli76@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-3xl text-text-main">Socials</h3>
            <ul className="flex flex-col">{socials}</ul>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
