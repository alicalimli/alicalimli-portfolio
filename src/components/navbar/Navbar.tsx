import React from "react";
import { Link, useLocation } from "react-router-dom";
import SpringyText from "../springy-text/SpringyText";
import TwLink from "../tw-link/TwLink";

interface NavbarProps {
  type?: "main" | "secondary";
}

const Name = "Ali Calimli";

const Navbar = ({ type = "secondary" }: NavbarProps) => {
  const { pathname } = useLocation();
  const isCurrentPath = (path: string) => path === pathname;

  const navLinksArr = [
    {
      link: "About",
      path: "/about",
    },
    {
      link: "Projects",
      path: "/projects",
    },
    {
      link: "Contact",
      path: "/contact",
    },
  ];

  const navLinks = (
    <ul className="ml-auto hidden gap-4 sm:flex">
      {navLinksArr.map((navLink, i) => (
        <TwLink
          active={isCurrentPath(navLink.path)}
          key={navLink.link + i}
          name={navLink.link}
          path={navLink.path}
        />
      ))}
    </ul>
  );

  return (
    <>
      {type === "main" ? (
        <nav className="flex gap-4">
          <div className="flex flex-col gap-2">
            <SpringyText text={Name} />
            <h1 className="max-w-xs  text-muted-main fluid-lg">
              Web Developer that focuses on front-end development
            </h1>
          </div>
          {navLinks}
        </nav>
      ) : (
        <nav className="flex items-center gap-4 p-4 px-8 lg:p-8 lg:px-16">
          <Link to="/" className="text-white fluid-xl">
            {Name}
          </Link>
          {navLinks}
        </nav>
      )}
    </>
  );
};

export default Navbar;
