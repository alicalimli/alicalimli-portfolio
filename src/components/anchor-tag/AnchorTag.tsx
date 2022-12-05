interface AnchorTagProps {
  name: string;
  href: string;
  className?: string;
}

const AnchorTag = ({ name, href, className = "" }: AnchorTagProps) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={`
        ${className}
        group 
        relative
        inline-block
        h-fit
        py-1
        text-lg
        duration-300
        text-muted-main
        hover:-translate-y-2
      `}
    >
      {name}
      <div
        className="
          absolute
          bottom-0
          h-0.5
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
