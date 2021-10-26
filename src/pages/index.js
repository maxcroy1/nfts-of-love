import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { Seo, Layout, About, Minting, FAQ } from "../components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background: black;
        color: white;
        text-align: center;
    }

    h2 {
        font-family: 'Tauri', sans-serif;
        font-size: 1.4rem;
    }

    h3 {
        font-family: 'Tauri', sans-serif;
        font-size: 1.2rem;
    }

    p {
        font-family: 'Martel', serif;
        font-size: .8rem;
    }

    a {
        color: white;
    }

    [class*="col-"] {
        width: 100%;
    }

    @media only screen and (min-width: 600px) {
        /* For tablets: */
        .col-s-1 {width: 8.33%;}
        .col-s-2 {width: 16.66%;}
        .col-s-3 {width: 25%;}
        .col-s-4 {width: 33.33%;}
        .col-s-5 {width: 41.66%;}
        .col-s-6 {width: 50%;}
        .col-s-7 {width: 58.33%;}
        .col-s-8 {width: 66.66%;}
        .col-s-9 {width: 75%;}
        .col-s-10 {width: 83.33%;}
        .col-s-11 {width: 91.66%;}
        .col-s-12 {width: 100%;}
    }

    @media only screen and (min-width: 768px) {
        /* For desktop: */
        .col-1 {width: 8.33%;}
        .col-2 {width: 16.66%;}
        .col-3 {width: 25%;}
        .col-4 {width: 33.33%;}
        .col-5 {width: 41.66%;}
        .col-6 {width: 50%;}
        .col-7 {width: 58.33%;}
        .col-8 {width: 66.66%;}
        .col-9 {width: 75%;}
        .col-10 {width: 83.33%;}
        .col-11 {width: 91.66%;}
        .col-12 {width: 100%;}
    }

    .row::after {
        content: "";
        clear: both;
        display: table;
    }
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Seo />
      <Layout>
        <About />
        <Minting />
        <FAQ />
      </Layout>
    </>
  );
};

export default IndexPage;
