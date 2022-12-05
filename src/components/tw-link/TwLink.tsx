import { Link } from "react-router-dom";

interface TwLinkProps {
  name: string;
  path: string;
}

const TwLink = ({ name, path }: TwLinkProps) => {
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
        hover:-translate-y-2
      "
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
    </Link>
  );
};

export default TwLink;
