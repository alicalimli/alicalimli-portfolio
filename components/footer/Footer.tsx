import { useRouter } from "next/router";
import TwLink from "../tw-link/TwLink";
import React from "react";
import { WEBSITE_DATA } from "../../data";

const Footer = () => {
  const { pathname } = useRouter();
  const currentYear = new Date().getFullYear();

  const socials = WEBSITE_DATA.socials.map((social) => (
    <li key={social.name}>
      <TwLink className="text-sm text-white" href={social.link}>
        {social.name}
      </TwLink>
    </li>
  ));

  if (pathname === "/visual-content-handbook") return <></>;

  return (
    <footer
      className="
        mt-8 
        flex 
        flex-col 
        flex-wrap 
        items-center 
        justify-center 
        gap-2 
        p-4 px-8 
        sm:flex-row"
    >
      <p
        className="
          text-center 
          text-sm text-white
        "
      >
        © Copyright {currentYear} {WEBSITE_DATA.fullName}.
      </p>
      <ul
        className="
          ml-0  
          flex 
          flex-wrap
          justify-center 
          gap-x-4 
          sm:ml-auto
        "
      >
        {socials}
      </ul>
    </footer>
  );
};

export default Footer;
