import { useEffect, useState } from "react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavigationMenu from "./NavigationMenu";
import { Portal } from "../../components";

const navBtnVariant = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};

interface HamburgerMenuProps {
  showNavBtn: boolean;
  setShowNavBtn: (state: boolean) => void;
}

const HamburgerMenu = ({ showNavBtn, setShowNavBtn }: HamburgerMenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const navBtnHandler = () => setShowMenu((state: boolean) => !state);

  return (
    <Portal>
      <AnimatePresence>
        {showNavBtn && (
          <motion.button
            key="nav-btn"
            onClick={navBtnHandler}
            variants={navBtnVariant}
            initial="initial"
            animate="animate"
            exit="initial"
            className="
            fixed
            right-0
            top-0
            z-30
            my-8
            mx-4
            flex
            h-20
            w-20
            flex-col
            items-center
            justify-center
            gap-2
            overflow-hidden
            rounded-full
            bg-[#111]
          "
          >
            <motion.div
              animate={
                showMenu ? { rotate: "45deg", y: "10px" } : { rotate: "0deg" }
              }
              className="
              h-0.5
              w-8
              bg-muted-secondary
            "
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
            />
            <motion.div
              animate={showMenu ? { width: 0 } : { width: "2rem" }}
              initial={{ width: "2rem" }}
              className="
              h-0.5
              bg-muted-secondary
            "
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
            <motion.div
              animate={
                showMenu ? { rotate: "-45deg", y: "-10px" } : { rotate: "0deg" }
              }
              className="
              h-0.5
              w-8
              bg-muted-secondary
            "
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>
      <NavigationMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </Portal>
  );
};

export default HamburgerMenu;
