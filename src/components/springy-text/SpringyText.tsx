import SpringyLetter from "./SpringyLetter";
import { twMerge } from "tailwind-merge";

interface SpringyTextProps {
  text: string;
  className?: string;
}

const SpringyText = ({ text, className }: SpringyTextProps) => {
  const springyTextParentClass = twMerge(`
    ${className}
    flex 
    flex-wrap 
    gap-x-3 
    md:justify-start
  `);

  const words = text.split(" ");

  const getSpringyLetters = (word: string) => {
    const letters = word.split("");

    return letters.map((letter: string, i: number) => (
      <SpringyLetter key={letter + i} letter={letter} />
    ));
  };

  const springyText = words.map((word: any, i: number) => (
    <div key={word}>{getSpringyLetters(word)}</div>
  ));

  return <h1 className={springyTextParentClass}>{springyText}</h1>;
};

export default SpringyText;
