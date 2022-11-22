import { SpringyText } from "../../components";

const navLinksArr = ["Projects", "About", "Contact"];
const nameArr = "Ali Calimli".split("");

const Navbar = () => {
  const navLinks = navLinksArr.map((navLink, i) => (
    <li key={navLink + i} className="text-lg text-text-main">
      {navLink}
    </li>
  ));

  const name = nameArr.map((letter: string) => <SpringyText letter={letter} />);
  return (
    <nav className="flex gap-4">
      <div className="flex flex-col gap-2">
        <div>{name}</div>
        <h1 className="max-w-xs  text-xl text-muted-main">
          Web Developer that focuses on front-end development
        </h1>
      </div>
      <ul className="ml-auto flex gap-4">{navLinks}</ul>
    </nav>
  );
};

export default Navbar;
