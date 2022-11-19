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
      </div>
    </section>
  );
};

export default Contact;
