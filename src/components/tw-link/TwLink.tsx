import { Link } from "react-router-dom";

interface TwLinkProps {
  name: string;
  path: string;
  active?: boolean;
}

const TwLink = ({ name, path, active = false }: TwLinkProps) => {
  return (
    <Link
      to={path}
      className="
        group 
        relative
        h-fit
        py-2
        text-lg
        duration-300
        text-text-main
        hover:-translate-y-1
      "
    >
      {name}
      <div
        className={`
          ${active ? "w-full" : "w-0"}
          absolute
          bottom-0
          h-px
          w-0
          duration-300
          bg-white
          group-hover:w-full
        `}
      />
    </Link>
  );
};

export default TwLink;
