import * as React from "react";
import styled from "styled-components"

const Header = styled.h1`
    color: white;
`

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <Header>Non-Fungible Tokens of Love</Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
