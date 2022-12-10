import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CustomCursor, HamburgerMenu } from "./components";
import { About, Contact, Footer, Projects } from "./sections";

function App() {
  return (
    <main className="h-screen overflow-y-scroll">
      <HamburgerMenu />
      <CustomCursor />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
