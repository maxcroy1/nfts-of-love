import * as React from "react";
import styled from "styled-components";

const Header = styled.h1`
  font-family: "Cormorant Garamond", serif;
  font-size: 2.3rem;
`;

const Container = styled.div`
  margin: 5vh auto;
  padding: 0 5vw;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>NON-FUNGIBLE TOKENS OF LOVE</Header>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
