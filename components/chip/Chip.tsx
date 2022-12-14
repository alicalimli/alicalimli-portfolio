import React from "react";

interface ChipProps {
  texts: string[];
}

const Chip = ({ texts }: ChipProps) => {
  const chips = texts.map((text: string) => (
    <span
      key={text}
      className="rounded-lg p-2 px-4 text-sm bg-bg-secondary text-white"
    >
      {text}
    </span>
  ));

  return <div className="flex flex-wrap gap-2">{chips}</div>;
};

export default Chip;
