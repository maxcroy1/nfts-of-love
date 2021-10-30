import * as React from "react";
import styled from "styled-components";

const Minter = () => {
  const ConnectWallet = styled.a`
    background-color: black;
    color: white;
    font-family: "Tauri", sans-serif;
    font-size: 1.3rem;

    @media only screen and (min-width: 600px) {
      font-size: 2.1rem;
    }
  `;

  return (
    <>
      <ConnectWallet href="https://opensea.io/collection/nfts-of-love" target="_blank">
        View the Collection on OpenSea
      </ConnectWallet>
    </>
  );
};

export default Minter;
