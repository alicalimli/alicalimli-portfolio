import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

const navMenuVariant = {
  initial: {
    x: "100%",
    borderTopLeftRadius: "100vmax",
    borderBottomLeftRadius: "100vmax",
    transition: { duration: 0.45, ease: "easeInOut" },
  },
  animate: {
    x: "0%",
    borderTopLeftRadius: "0vmax",
    borderBottomLeftRadius: "0vmax",
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};

const navLinkVariant = {
  initial: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};

const navLinksArr = [
  {
    link: "Home",
    path: "",
  },
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

interface NavigationMenuProps {
  showMenu: boolean;
  setShowMenu: (state: boolean) => void;
}

const NavigationMenu = ({ showMenu, setShowMenu }: NavigationMenuProps) => {
  const navigate = useNavigate();

  const navLinkHandler = (path: string) => {
    setShowMenu(false);
    navigate(path);
  };

  const navLinks = navLinksArr.map((navLink, i) => (
    <li key={navLink.link + i}>
      <button className="text-5xl" onClick={() => navLinkHandler(navLink.path)}>
        {navLink.link}
      </button>
    </li>
  ));
  return (
    <AnimatePresence>
      {showMenu ? (
        <motion.nav
          key="mobile-nav"
          variants={navMenuVariant}
          initial="initial"
          animate="animate"
          exit="initial"
          className="
          fixed
          inset-0
          z-20
          flex
          h-full
          w-full
          items-center 
          justify-start
          p-8
          px-16
          bg-bg-secondary
        "
        >
          <motion.ul
            variants={navLinkVariant}
            className="
              flex
              flex-col
              gap-8
              text-text-main
            "
          >
            {navLinks}
          </motion.ul>
        </motion.nav>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
