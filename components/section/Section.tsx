import React from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => {
  const sectionClass = twMerge(`
    mx-auto
    max-w-7xl 
    pb-32
    px-vw-14
    pt-8
    ${className}
  `);

  return (
    <section>
      <div className={sectionClass}>{children}</div>
    </section>
  );
};

export default Section;
