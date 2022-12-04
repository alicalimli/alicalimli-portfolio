interface PrimaryButtonProps {
  name: string;
  onClick: () => void;
  className?: string;
  type?: "solid" | "outline";
}

const PrimaryButton = ({
  className,
  type = "outline",
  name,
  onClick,
}: PrimaryButtonProps) => {
  const getBtnTypeClass = () => {
    if (type === "outline") {
      return "border-muted-secondary";
    }
    if (type === "solid") {
      return "bg-accent-primary border-accent-primary";
    }
  };

  return (
    <button
      onClick={() => onClick()}
      className={`
          ${getBtnTypeClass()}
          ${className}
          bg-transparent
          group
          relative
          m-auto
          max-w-lg
          cursor-pointer
          overflow-hidden rounded-full
          border
          p-6
          px-12
          text-['#fff']
          duration-300
          hover:border-accent-tinted
      `}
    >
      <p
        className="
          text-[#fff]
          duration-300
          group-hover:-translate-y-full
          group-hover:opacity-0
        "
      >
        {name}
      </p>
      <div
        className="
          absolute
          top-full
          left-0
          grid
          h-full
          w-full
          place-items-center
          bg-accent-tinted
          text-[#fff]
          opacity-0
          duration-300
          group-hover:top-0
          group-hover:opacity-100
        "
      >
        {name}
      </div>
    </button>
  );
};

export default PrimaryButton;
