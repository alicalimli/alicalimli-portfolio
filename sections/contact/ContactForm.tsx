import { useState } from "react";
import React from "react";
import { PrimaryButton } from "../../components";
import { useRouter } from "next/router";

const inputClass = `
      peer 
      w-full 
      border-b 
      bg-black/0 
      pr-2 pb-2  
      text-2xl 
      outline-none 
      duration-300 
      border-muted-secondary/30
      text-text-main  
      focus-within:border-white
      resize-none
      `;

const spanLabelClass = `
      absolute
      -top-7
      left-0
      text-lg
      duration-300
      text-muted-secondary
      peer-placeholder-shown:top-0
      peer-placeholder-shown:text-2xl
      peer-placeholder-shown:text-white
      peer-focus-within:-top-7
      peer-focus-within:text-lg
      peer-focus-within:text-muted-secondary
      `;

const ContactForm = () => {
  const router = useRouter();

  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    setErrorMsg("");
    setIsSending(true);

    const name = e.target[0].value;
    const email = e.target[1].value;
    const subject = e.target[2].value;
    const message = e.target[3].value;

    try {
      await fetch(
        "https://formsubmit.co/ajax/779a1f0fbd51622e61c543e0ced860ab",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message,
          }),
        }
      );

      setIsSending(false);
      router.push("/success");
    } catch (e) {
      setIsSending(false);
      setErrorMsg(e.message);
    }
  };

  return (
    <form onSubmit={submitForm} className="flex flex-col gap-12">
      <label htmlFor="name" className="relative text-text-main">
        <input
          type="text"
          id="name"
          placeholder=" "
          required
          className={inputClass}
        />
        <span className={spanLabelClass}>Name</span>
      </label>
      <label htmlFor="email" className="relative text-text-main">
        <input
          type="text"
          id="email"
          placeholder=" "
          required
          className={inputClass}
        />
        <span className={spanLabelClass}>Email</span>
      </label>
      <label htmlFor="subject" className="relative text-text-main">
        <input
          type="text"
          id="subject"
          placeholder=" "
          required
          className={inputClass}
        />
        <span className={spanLabelClass}>Subject</span>
      </label>
      <label htmlFor="message" className="relative text-text-main">
        <textarea
          id="message"
          required
          rows={8}
          placeholder=" "
          cols={33}
          className={inputClass}
        />
        <span className={spanLabelClass}>Message</span>
      </label>
      <PrimaryButton
        btnType="submit"
        name={"Send Message"}
        type={isSending ? "loading" : "solid"}
        className="mx-auto  md:mx-0 md:ml-auto"
      />
    </form>
  );
};

export default ContactForm;
