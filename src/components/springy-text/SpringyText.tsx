import SpringyLetter from "./SpringyLetter";

interface SpringyTextProps {
  text: string;
}

const SpringyText = ({ text }: SpringyTextProps) => {
  const words = text.split(" ");

  const getSpringyLetters = (word: string) => {
    const letters = word.split("");

    return letters.map((letter: string, i: number) => (
      <SpringyLetter key={letter + i} letter={letter} />
    ));
  };

  const springyText = words.map((word: any, i: number) => (
    <div>{getSpringyLetters(word)}</div>
  ));

  return <h1 className="flex flex-wrap gap-x-5">{springyText}</h1>;
};

export default SpringyText;
