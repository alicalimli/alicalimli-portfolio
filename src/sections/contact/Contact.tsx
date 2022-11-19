import React from "react";
import { profile } from "../../assets";

const Contact = () => {
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
            Subject
            <input
              type="text"
              id="subject"
              className="w-full border-b bg-black/0 py-2 pr-2 text-2xl border-muted-main text-text-main focus:outline-none"
            />
          </label>
          <label htmlFor="message" className="text-text-main">
            Message
            <textarea
              id="message"
              rows={5}
              cols={33}
              className="w-full resize-none border-b bg-black/0 py-2 pr-2 text-xl border-muted-main text-text-main focus:outline-none"
            />
          </label>
        </form>
      </div>
      <div className="flex flex-col gap-4">
        <img src={profile} className="h-32 w-32 rounded-full" />
        <div>
          <h3 className="text-3xl text-text-main">Email</h3>
          <p className="text-muted-main">alicalimli76@gmail.com</p>
        </div>
        <div>
          <h3 className="text-3xl text-text-main">Socials</h3>
          <p className="text-muted-main">LinkedIn</p>
          <p className="text-muted-main">Twitter</p>
          <p className="text-muted-main">Github</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
