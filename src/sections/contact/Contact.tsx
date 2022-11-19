import React from "react";
import { profile } from "../../assets";

const socialsArr = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/alicalimli/" },
  { name: "Twitter", link: "https://twitter.com/alicalimli_dev" },
  { name: "Github", link: "https://github.com/alicalimli" },
];

const Contact = () => {
  const socials = socialsArr.map((social) => (
    <li key={social.name}>
      <a
        href={social.link}
        rel="noopener noreferrer"
        target="_blank"
        className="text-muted-main"
      >
        {social.name}
      </a>
    </li>
  ));

  return (
    <section className="flex gap-16 p-8 lg:py-14 lg:px-24">
      <div className="flex flex-col gap-8">
        <header className="flex gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl font-bold text-text-main">
              Lets Collaborate!
            </h1>
            <h1 className="max-w-xl  text-xl text-muted-main">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, consectetur!
            </h1>
          </div>
        </header>
        <form className="flex w-full flex-col gap-4">
          <label htmlFor="subject" className="text-text-main">
            <span className="text-xl text-muted-main">Subject</span>
            <input
              type="text"
              id="subject"
              required
              className="w-full border-b bg-black/0 py-2 pr-2 text-2xl border-muted-secondary text-text-main invalid:border-['red'] focus:outline-none"
            />
          </label>
          <label htmlFor="message" className="text-text-main">
            <span className="text-xl text-muted-main">Message</span>
            <textarea
              id="message"
              required
              rows={5}
              cols={33}
              className="w-full resize-none border-b bg-black/0 py-2 pr-2 text-xl border-muted-secondary text-text-main focus:outline-none"
            />
          </label>
          <button className="mt-8 ml-auto rounded-full bg-accent-primary p-4 px-8 text-xl border-muted-secondary text-text-main hover:bg-accent-tinted">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-4">
        <img src={profile} className="h-32 w-32 rounded-full" />
        <div>
          <h3 className="text-3xl text-text-main">Email</h3>
          <a
            href="mailto:alicalimli76@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="text-muted-main"
          >
            alicalimli76@gmail.com
          </a>
        </div>
        <div>
          <h3 className="text-3xl text-text-main">Socials</h3>
          <ul className="flex flex-col">{socials}</ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
