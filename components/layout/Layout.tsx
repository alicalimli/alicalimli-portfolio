import { useRouter } from "next/router";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { HamburgerMenu, Navbar, Footer, CustomCursor } from "../../components";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  const [showNavBtn, setShowNavBtn] = useState(false);

  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    scrollContainerRef.current?.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const tailwindSMBreakpoint = 640;
    const isMobile = window.innerWidth < tailwindSMBreakpoint;

    isMobile
      ? setShowNavBtn(true)
      : container.addEventListener("scroll", (e) => {
          const scrolled = container.scrollTop;
          setShowNavBtn(scrolled > 400 ? true : false);
        });
  }, []);

  return (
    <>
      <main ref={scrollContainerRef} className=" h-screen  overflow-y-scroll">
        <HamburgerMenu showNavBtn={showNavBtn} setShowNavBtn={setShowNavBtn} />
        <CustomCursor />
        <Navbar />
        <div className="flex flex-col gap-16">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
