import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { WEBSITE_DATA } from "../data";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="theme-dark">
        <Head>
          <title>{WEBSITE_DATA.meta.title}</title>
          <meta name="description" content={WEBSITE_DATA.meta.description} />
          <meta name="keywords" content={WEBSITE_DATA.meta.keywords} />
          <meta property="og:title" content={WEBSITE_DATA.meta.title} />
          <meta
            property="og:description"
            content={WEBSITE_DATA.meta.description}
          />
          <meta property="og:url" content={WEBSITE_DATA.meta.openGraphURL} />
          <meta property="og:type" content={WEBSITE_DATA.meta.opengraphType} />
          <link rel="icon" href="/favicon.webp" />
        </Head>

        <body className="overflow-hidden bg-bg-main">
          <Main />
          <div id="nav-btn" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
