import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CustomCursor } from "./components";
import { About, Contact, Hero } from "./sections";

function App() {
  return (
    <main>
      <CustomCursor />
      <Hero />
      <About />
      <Contact />
    </main>
  );
}

export default App;
