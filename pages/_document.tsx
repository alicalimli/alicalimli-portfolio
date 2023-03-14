import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="theme-dark">
        <Head />
        <link rel="shortcut icon" href="/favicon.webp" />

        <body className="overflow-hidden bg-bg-main">
          <Main />
          <div id="nav-btn" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
