import { SpringyText } from "../../components";

const navLinksArr = ["Projects", "About", "Contact"];

const Navbar = () => {
  const navLinks = navLinksArr.map((navLink, i) => (
    <li key={navLink + i} className="text-lg text-text-main">
      {navLink}
    </li>
  ));

  return (
    <nav className="flex gap-4">
      <div className="flex flex-col gap-2">
        <SpringyText text="Ali Calimli" />
        <h1 className="max-w-xs  text-xl text-muted-main">
          Web Developer that focuses on front-end development
        </h1>
      </div>
      <ul className="ml-auto flex gap-4">{navLinks}</ul>
    </nav>
  );
};

export default Navbar;
