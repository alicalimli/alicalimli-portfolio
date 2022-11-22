import SpringyLetter from "./SpringyLetter";

interface SpringyTextProps {
  text: string;
}

const SpringyText = ({ text }: SpringyTextProps) => {
  const textArray = text.split("");
  const springyText = textArray.map((letter: string, i: number) => (
    <SpringyLetter key={letter + i} letter={letter} />
  ));

  return <div>{springyText}</div>;
};

export default SpringyText;
