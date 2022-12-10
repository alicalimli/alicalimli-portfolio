import { useState } from "react";
import { motion } from "framer-motion";
import NavigationMenu from "./NavigationMenu";

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navBtnHandler = () => setShowMenu((state) => !state);
  return (
    <>
      <button
        onClick={navBtnHandler}
        className="
        fixed
        right-0
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
        sm:hidden
      "
      >
        <motion.div
          animate={
            showMenu ? { rotate: "45deg", y: "10px" } : { rotate: "0deg" }
          }
          className="
          h-0.5
          w-10
          bg-muted-secondary
        "
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        />
        <motion.div
          animate={showMenu ? { width: 0 } : { width: "2.5rem" }}
          className="
          h-0.5
          w-10
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
          w-10
          bg-muted-secondary
        "
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
      </button>
      <NavigationMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default HamburgerMenu;
