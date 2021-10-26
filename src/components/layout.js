import * as React from "react";
import styled from "styled-components";

const Header = styled.h1`
  font-family: "Cormorant Garamond", serif;
  font-size: 2.3rem;

  @media only screen and (min-width: 600px) {
    /* For tablets: */
    font-size: 4rem;
  }

  @media only screen and (min-width: 770px) {
    /* For desktop: */
    font-size: 5rem;
  }
`;

const Container = styled.div`
  margin: 5vh auto;
  padding: 0 10vw;

  @media only screen and (min-width: 600px) {
    /* For tablets: */
    width: 80%;
    padding: 0;
  }

  @media only screen and (min-width: 768px) {
    /* For desktop: */
    width: 85%;
    max-width: 900px;
    padding: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>Non-Fungible Tokens Of Love</Header>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
