import React from "react";
import { profile } from "../../assets";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { SpringyText } from "../../components";
import AnchorTag from "../../components/anchor-tag/AnchorTag";

const socialsArr = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/alicalimli/" },
  { name: "Twitter", link: "https://twitter.com/alicalimli_dev" },
  { name: "Github", link: "https://github.com/alicalimli" },
];

const Contact = () => {
  const socials = socialsArr.map((social) => (
    <li key={social.name}>
      <AnchorTag className="" name={social.name} href={social.link} />
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
        <div className="hidden w-1/4 flex-col gap-4 md:flex">
          <img src={profile} className="h-28 w-28 rounded-full" />
          <div>
            <h3 className="text-3xl text-text-main">Email</h3>
            <AnchorTag
              name="alicalimli76@gmail.com"
              className="text-lg text-muted-main"
              href="mailto:alicalimli76@gmail.com"
            />
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
