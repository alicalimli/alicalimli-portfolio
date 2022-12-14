import { Html } from "next/document";
import Head from "next/head";
import React from "react";
import { ContactSection } from "../sections";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactSection />
    </>
  );
};

export default Contact;
