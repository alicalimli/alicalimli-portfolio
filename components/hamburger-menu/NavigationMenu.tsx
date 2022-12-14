import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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
      delayChildren: 0.15,
      staggerChildren: 0.03,
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
  hover: {
    x: "10%",
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const navLinksArr = [
  {
    link: "Home",
    path: "/",
  },
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

interface NavigationMenuProps {
  showMenu: boolean;
  setShowMenu: (state: boolean) => void;
}

const NavigationMenu = ({ showMenu, setShowMenu }: NavigationMenuProps) => {
  const { pathname, push } = useRouter();

  const isCurrentPath = (path: string) => path === pathname;

  const navLinkHandler = (path: string) => {
    setShowMenu(false);
    push(path);
  };

  const navLinks = navLinksArr.map((navLink, i) => (
    <motion.button
      variants={navLinkVariant}
      key={navLink.link + i}
      className={`
          group
          relative
          text-6xl
          text-text-main
        `}
      onClick={() => navLinkHandler(navLink.path)}
    >
      <span
        className={`
          ${isCurrentPath(navLink.path) ? "translate-x-5" : ""}
          inline-block 
          duration-450 
          group-hover:translate-x-5
        `}
      >
        {navLink.link}
      </span>
      <div
        className={`
          ${isCurrentPath(navLink.path) ? "opacity-100" : "opacity-0"}
          absolute
          -left-6
          top-1/2
          -translate-y-1/2
          rounded-full
          p-1
          duration-450 
          bg-white 
          group-hover:opacity-100
        `}
      />
    </motion.button>
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
            top-0
            right-0
            z-20
            flex
            h-full
            w-full
            flex-col
            items-start 
            justify-center
            gap-8
            p-8
            px-16
            bg-bg-secondary
            sm:w-128
            sm:px-24
          "
        >
          {navLinks}
        </motion.nav>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
