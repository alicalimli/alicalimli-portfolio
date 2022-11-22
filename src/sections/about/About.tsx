import { Chip } from "../../components";

const myTools = [
  "HTML",
  "CSS",
  "JavaScript",
  "TailwindCSS",
  "React",
  "Typescript",
  "Firebase",
  "Redux Toolkit",
  "Framer Motion",
  "Linux",
  "Bootstrap",
];

const About = () => {
  return (
    <section className="flex gap-16 p-8 lg:py-14 lg:px-24">
      <div className="flex max-w-xl flex-col gap-8">
        <header className="flex gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl font-bold text-text-main">
              A little about me
            </h1>
            <h1 className="text-xl text-muted-main">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              illo necessitatibus pariatur! Beatae earum recusandae, id magnam
              hic error dicta quaerat officiis unde similique ad rem? Doloribus
              dignissimos natus quibusdam!
            </h1>
          </div>
        </header>
        <main className="flex flex-col gap-2">
          <p className="text-lg text-muted-main">
            technologies and tools that i use:
          </p>
          <Chip texts={myTools} />
        </main>
      </div>
    </section>
  );
};

export default About;
