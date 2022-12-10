import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { CustomCursor, HamburgerMenu } from "./components";
import { About, Contact, Footer, Projects } from "./sections";

function App() {
  const [showNavBtn, setShowNavBtn] = useState(false);

  const scrollContainerRef = useRef<HTMLElement>(null);

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
    <main ref={scrollContainerRef} className="h-screen overflow-y-scroll">
      <HamburgerMenu showNavBtn={showNavBtn} setShowNavBtn={setShowNavBtn} />
      <CustomCursor />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
