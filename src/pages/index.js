import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { Layout, About, Minting, FAQ } from "../components";

const GlobalStyle = createGlobalStyle`
    body {
        background: black;
        color: white;
    }

    a {
        color: white;
    }
`;

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
          <About />
          <Minting />
          <FAQ />
      </Layout>
    </>
  );
};

export default IndexPage;
