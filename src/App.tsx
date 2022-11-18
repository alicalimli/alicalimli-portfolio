import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CustomCursor } from "./components";
import { Hero } from "./sections";

function App() {
  return (
    <main>
      <CustomCursor />
      <Hero />
    </main>
  );
}

export default App;
