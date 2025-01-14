import React from "react";
import ContactForm from "./ContactForm";
import { Section, SpringyText } from "../../components";
import TwLink from "../../components/tw-link/TwLink";
import Image from "next/image";
import { WEBSITE_DATA } from "../../data";

const Contact = () => {
  const socials = WEBSITE_DATA.socials.map((social) => (
    <li key={social.name}>
      <TwLink className="text-lg text-white" href={social.link}>
        {social.name}
      </TwLink>
    </li>
  ));

  return (
    <Section className="pb-12">
      <main id="contact-section" className="flex gap-16">
        <div className="flex w-full flex-col gap-12">
          <header
            className="flex flex-col items-center           
            gap-2
            text-center
            md:items-start
            md:text-left"
          >
            <SpringyText
              className="justify-center"
              text={WEBSITE_DATA.contactSectionTitle}
            />
            <h1 className="text-muted-main fluid-lg ">
              {WEBSITE_DATA.contactSectionSubtitle}
            </h1>
          </header>
          <ContactForm />
        </div>
        <div className="hidden w-1/2 flex-col gap-4 lg:flex">
          <Image
            src={WEBSITE_DATA.profilePicture}
            width={112}
            height={112}
            className="rounded-full"
            alt={`${WEBSITE_DATA.fullName}'s Profile Picture`}
          />
          <div>
            <h3 className="fluid-md text-muted-secondary">Email</h3>
            <TwLink
              className="text-lg text-white"
              href={`mailto:${WEBSITE_DATA.email}`}
            >
              {WEBSITE_DATA.email}
            </TwLink>
          </div>
          <div>
            <h3 className="fluid-md text-muted-secondary">Socials</h3>
            <ul className="flex flex-col">{socials}</ul>
          </div>
        </div>
      </main>
    </Section>
  );
};

export default Contact;
