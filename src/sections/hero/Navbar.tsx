import { Link } from "react-router-dom";
import { SpringyText } from "../../components";

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

const Navbar = () => {
  const navLinks = navLinksArr.map((navLink, i) => (
    <Link
      to={navLink.path}
      key={navLink.link + i}
      className="text-lg text-text-main"
    >
      {navLink.link}
    </Link>
  ));

  return (
    <nav className="flex gap-4">
      <div className="flex flex-col gap-2">
        <SpringyText text="Ali Calimli" />
        <h1 className="max-w-xs  text-muted-main fluid-lg">
          Web Developer that focuses on front-end development
        </h1>
      </div>
      <ul className="ml-auto flex gap-4">{navLinks}</ul>
    </nav>
  );
};

export default Navbar;
