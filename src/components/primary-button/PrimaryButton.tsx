interface PrimaryButtonProps {
  className?: string;
  onClick: () => void;
}

const PrimaryButton = ({ className, onClick }: PrimaryButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className={`
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
          border-muted-secondary
          hover:border-accent-primary
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
        Project Archive
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
          bg-accent-primary
          text-[#fff]
          opacity-0
          duration-300
          group-hover:top-0
          group-hover:opacity-100
        "
      >
        Project Archive
      </div>
    </button>
  );
};

export default PrimaryButton;
