import { twMerge } from "tailwind-merge";

interface AnchorTagProps {
  name: string;
  href: string;
  className?: string;
}

const AnchorTag = ({ name, href, className = "" }: AnchorTagProps) => {
  const anchorTagClass = twMerge(`
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

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={anchorTagClass}
    >
      {name}
      <div
        className="
          absolute
          bottom-0
          h-px
          w-0
          duration-300
          bg-white
          group-hover:w-full
        "
      />
    </a>
  );
};

export default AnchorTag;
