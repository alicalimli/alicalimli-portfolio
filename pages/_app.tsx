import React from "react";
import "../styles/globals.css";
import ContextProvider from "../setup/context-provider/ContextProvider";
import { Layout } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
