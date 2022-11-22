interface ChipProps {
  texts: string[];
}

const Chip = ({ texts }: ChipProps) => {
  const chips = texts.map((text: string) => (
    <span className="p-2 px-4 bg-bg-secondary text-white">{text}</span>
  ));

  return <div className="flex flex-wrap gap-2">{chips}</div>;
};

export default Chip;
