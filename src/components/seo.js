import * as React from "react";
import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Non-Fungible Tokens of Love</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&family=Martel&family=Tauri&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
    </>
  );
};

export default Seo;
