import { twMerge } from "tailwind-merge";
import React from "react";
import Link from "next/link";

interface TwLinkProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  className?: string;
  active?: boolean;
}

const TwLink = ({
  children,
  className,
  to,
  href,
  active = false,
}: TwLinkProps) => {
  const linkClass = twMerge(`
    group 
    relative
    inline-block
    h-fit
    py-1
    text-sm
    duration-300
    text-white
    hover:-translate-y-1
    ${className}
  `);

  const lineTransitionClass = `
    ${active ? "w-full" : "w-0"}
    absolute
    bottom-0
    h-px
    duration-300
    bg-white
    group-hover:w-full
  `;

  return to ? (
    <Link href={to} className={linkClass}>
      {children}
      <div className={lineTransitionClass} />
    </Link>
  ) : (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className={linkClass}
    >
      {children}
      <div className={lineTransitionClass} />
    </a>
  );
};

export default TwLink;
