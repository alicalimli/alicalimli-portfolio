import { SpringyText } from "../../components";
import TwLink from "../../components/tw-link/TwLink";

const navLinksArr = [
  {
    link: "About",
    path: "about",
  },
  {
    link: "Projects",
    path: "projects",
  },
  {
    link: "Contact",
    path: "contact",
  },
];

const Header = () => {
  const navLinks = navLinksArr.map((navLink, i) => (
    <TwLink key={navLink.link + i} name={navLink.link} path={navLink.path} />
  ));

  return (
    <nav className="flex gap-4">
      <div className="flex flex-col gap-2">
        <SpringyText text="Ali Calimli" />
        <h1 className="max-w-xs  text-muted-main fluid-lg">
          Web Developer that focuses on front-end development
        </h1>
      </div>
      <ul className="ml-auto hidden gap-4 sm:flex">{navLinks}</ul>
    </nav>
  );
};

export default Header;
