import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CustomCursor } from "./components";
import { About, Contact, Projects } from "./sections";

function App() {
  return (
    <main>
      <CustomCursor />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

export default App;
