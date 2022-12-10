import { AnimatePresence, motion } from "framer-motion";
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
  const navigate = useNavigate();

  const navLinkHandler = (path: string) => {
    setShowMenu(false);
    navigate(path);
  };

  const navLinks = navLinksArr.map((navLink, i) => (
    <motion.button
      variants={navLinkVariant}
      key={navLink.link + i}
      className={`
          text-6xl
          text-text-main
        `}
      onClick={() => navLinkHandler(navLink.path)}
    >
      {navLink.link}
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
          inset-0
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
