import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { Seo, Layout, Timer, About, Minting, Faq } from "../components";

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

    @media only screen and (min-width: 600px) {
        /* For tablets: */
        h2 {
            font-size: 2.3rem;
        }

        p {
            font-size: 1rem;
        }
    }
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Seo />
      <Layout>
        <Timer />
        <About />
        <Minting />
        <Faq />
      </Layout>
    </>
  );
};

export default IndexPage;
