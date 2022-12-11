import React from "react";
import { profile } from "../../assets";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { SpringyText } from "../../components";
import TwLink from "../../components/tw-link/TwLink";

const socialsArr = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/alicalimli/" },
  { name: "Twitter", link: "https://twitter.com/alicalimli_dev" },
  { name: "Github", link: "https://github.com/alicalimli" },
];

const Contact = () => {
  const socials = socialsArr.map((social) => (
    <li key={social.name}>
      <TwLink className="text-lg text-white" href={social.link}>
        {social.name}
      </TwLink>
    </li>
  ));

  return (
    <section className="section ">
      <main className="flex gap-16">
        <div className="flex flex-col gap-12">
          <header className="flex flex-col gap-2">
            <SpringyText text="Lets Collaborate!" />
            <h1 className="max-w-xl text-muted-main fluid-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, consectetur!
            </h1>
          </header>
          <ContactForm />
        </div>
        <div className="hidden w-1/2 flex-col gap-4 lg:flex xl:w-1/4">
          <img src={profile} className="h-28 w-28 rounded-full" />
          <div>
            <h3 className="fluid-md text-muted-main">Email</h3>
            <TwLink
              className="text-lg text-white"
              href="mailto:alicalimli76@gmail.com"
            >
              alicalimli76@gmail.com
            </TwLink>
          </div>
          <div>
            <h3 className="fluid-md text-muted-main">Socials</h3>
            <ul className="flex flex-col">{socials}</ul>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
