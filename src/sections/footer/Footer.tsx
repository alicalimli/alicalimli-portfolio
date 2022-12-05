import AnchorTag from "../../components/anchor-tag/AnchorTag";

const socialsArr = [
  { name: "Twitter", link: "https://twitter.com/alicalimli_dev" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/alicalimli/" },
  { name: "Github", link: "https://github.com/alicalimli" },
  { name: "Blog", link: "https://alicalimli.hashnode.dev/" },
];

const Footer = () => {
  const socials = socialsArr.map((social) => (
    <li key={social.name}>
      <AnchorTag className="text-sm" name={social.name} href={social.link} />
    </li>
  ));

  return (
    <footer className="mt-8 flex p-4 px-8">
      <p className="text-sm text-muted-main">
        Copyright © 2022 <span className="text-white">Ali Calimli</span>. All
        Rights Reserved
      </p>
      <ul className="ml-auto flex gap-4">{socials}</ul>
    </footer>
  );
};

export default Footer;
