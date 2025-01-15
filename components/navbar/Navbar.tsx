import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Section from "../section/Section";
import SpringyText from "../springy-text/SpringyText";
import TwLink from "../tw-link/TwLink";
import { WEBSITE_DATA } from "../../data";

interface NavbarProps {
  type?: "main" | "secondary";
}

const Name = WEBSITE_DATA.fullName;

const Navbar = ({ type = "secondary" }: NavbarProps) => {
  const { pathname } = useRouter();
  const isCurrentPath = (path: string) => path === pathname;

  const navLinksArr = [
    {
      link: "About",
      path: "/#about-section",
    },
    {
      link: "Projects",
      path: "/#projects-section",
    },
    {
      link: "Contact",
      path: "/#contact-section",
    },
  ];

  const navLinks = (
    <ul className="ml-auto hidden gap-4 sm:flex">
      {navLinksArr.map((navLink, i) => (
        <TwLink
          active={isCurrentPath(navLink.path)}
          className="text-lg"
          key={navLink.link + i}
          to={navLink.path}
        >
          {navLink.link}
        </TwLink>
      ))}
    </ul>
  );

  if (pathname === "/visual-content-handbook") return <></>;

  return (
    <>
      {pathname === "/" ? (
        <nav className="flex gap-4">
          <div className="flex flex-col gap-2">
            <SpringyText text={Name} />
            <h1 className="max-w-md  text-muted-main fluid-lg">
              {WEBSITE_DATA.briefDescription}
            </h1>
          </div>
          {navLinks}
        </nav>
      ) : (
        <nav className="flex items-center gap-4 p-4 px-8 lg:p-8 lg:px-16">
          <Link href="/" className="font-bold text-white fluid-xl">
            {Name}
          </Link>
          {navLinks}
        </nav>
      )}
    </>
  );
};

export default Navbar;
