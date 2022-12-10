import React from "react";
import { Link, useLocation } from "react-router-dom";
import TwLink from "../tw-link/TwLink";

const Navbar = () => {
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

  const navLinks = navLinksArr.map((navLink, i) => (
    <TwLink
      active={isCurrentPath(navLink.path)}
      key={navLink.link + i}
      name={navLink.link}
      path={navLink.path}
    />
  ));

  return (
    <nav className="flex items-center gap-4 p-4 px-8 lg:p-8 lg:px-16">
      <Link to="/" className="text-white fluid-xl">
        Ali Calimli
      </Link>
      <ul className="ml-auto flex gap-4">{navLinks}</ul>
    </nav>
  );
};

export default Navbar;
