const inputClass = `
      peer 
      w-full 
      border-b 
      bg-black/0 
      pr-2 pb-2  
      text-2xl 
      outline-none 
      duration-300 
      border-muted-secondary 
      text-text-main  
      focus-within:border-white
      `;

const spanLabelClass = `
      absolute
      -top-7
      left-0
      text-lg
      duration-300
      text-muted-main
      peer-placeholder-shown:top-0
      peer-placeholder-shown:text-2xl
      peer-placeholder-shown:text-white
      peer-focus-within:-top-7
      peer-focus-within:text-lg
      peer-focus-within:text-muted-main
      `;

const ContactForm = () => {
  return (
    <form className="flex w-full flex-col gap-12">
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
          rows={5}
          placeholder=" "
          cols={33}
          className={inputClass}
        />
        <span className={spanLabelClass}>Message</span>
      </label>
      <button className="mt-8 ml-auto rounded-full bg-accent-primary p-4 px-8 text-xl border-muted-secondary text-text-main hover:bg-accent-tinted">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
