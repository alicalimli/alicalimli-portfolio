import React from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactNode;
  type: "normal" | "wide" | "narrow";
  className?: string;
}

const sectionType = {
  wide: "",
  normal: "px-vw-14 max-w-7xl mx-auto",
  narrow: "px-vw-28 md:px-vw-36 max-w-7xl mx-auto",
};

const Section = ({
  children,
  className = "",
  type = "normal",
}: SectionProps) => {
  const sectionClass = twMerge(
    `
      ${sectionType[type]}
      pb-32
      pt-8
      ${className}
    `
  );

  return (
    <section>
      <div className={sectionClass}>{children}</div>
    </section>
  );
};

export default Section;
