export const WEBSITE_DATA = {
  fullName: "Ali Calimli",
  email: "alicalimli.dev@gmail.com",
  profilePicture: "/images/profile.jpeg",
  briefDescription: "I build awesome and high-quality web applications.",

  meta: {
    title: "",
    description: "",
    keywords: "",
    openGraphURL: "https://alicalimli.com",
    opengraphType: "website",
  },

  socials: [
    { name: "Twitter", link: "https://twitter.com/alicalimli_dev" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/alicalimli/" },
    { name: "Github", link: "https://github.com/alicalimli" },
    { name: "Blog", link: "https://alicalimli.hashnode.dev/" },
  ],

  aboutSectionTitle: "A Little About Me",
  aboutSectionDescription:
    "Focused on building awesome and high-quality websites that are also visually appealing and easy to use. I have a strong foundation in HTML, CSS, and JavaScript, and I'm proficient in using React. I love learning something new and I'm always looking to improve my skills and stay up-to-date on the latest front-end technologies.",

  contactSectionTitle: "Get In Touch!",
  contactSectionSubtitle:
    "Let's chat! Hit me up on the form below or in any of my socials.",

  // displayed in main page
  featuredProjects: [
    {
      title: "ACMessenger",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Facmessenger.webp?alt=media&token=fdc201e4-bf18-493a-b9ab-58d41149741b",
      description:
        "A Fullstack Chatapp that I've built to learn more about React and its popular libraries like redux, and also learn to use Firebase.",
      cta: "Visit Website",
      role: "Design & Development",
      link: "https://ac-messenger-p.web.app/",
      sourceCode: "https://github.com/alicalimli/ac-messenger",
      technologies: [
        "ReactJS",
        "Typescript",
        "Firebase",
        "TailwindCSS",
        "Redux Toolkit",
      ],
    },
    {
      title: "MovieMatrix",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fmoviematrix.webp?alt=media&token=f7ed9cfc-639e-4836-acae-4fe355082803",
      sourceCode: "https://github.com/alicalimli/movie-matrix-app/",
      description:
        "A Vanilla JS Project that I have built to deepen my knowledge about HTML, CSS and JavaScript and practice consuming API’s as well.",
      cta: "Visit Website",
      role: "Design & Development",
      link: "https://moviematrix.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ],

  // displayed in projects page
  otherProjects: [
    {
      name: "Quizzical",
      role: "Development",
      link: "https://quizzical-ali.netlify.app/",
      img: "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fquizzical.webp?alt=media&token=526c087c-cc2a-41e7-9649-6a4b83da42cb",
    },
    {
      name: "Clipboard",
      role: "Development",
      link: "https://clipboard-ali.netlify.app/",
      img: "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fclipboard.webp?alt=media&token=68b0f75a-ca19-4b21-a13c-750d55b23b5c",
    },
    {
      name: "Todo list",
      role: "Design & Development",
      link: "https://todo-list-ali.netlify.app/",
      img: "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Ftodolist.webp?alt=media&token=20a8b1ef-ae13-444a-9bed-73492fecbc30",
    },
  ],
};
