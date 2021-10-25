import * as React from "react";

const Minting = () => {
  return (
    <>
      <h2>Minting and More</h2>
      <p>
        Each NFT can be minted at a price of your choosing, with each mint
        resulting in the transfer of a unique Non-Fungible Token of Love to your
        ERC-721 compatible wallet (We recommend{" "}
        <a href="https://metamask.io/" target="_blank">
          MetaMask
        </a>{" "}
        based on its popularity and ease of use).
        <br />
        <br />
        Please remember, gas fees are EXPENSIVE these days, so even though these
        NFTs are "pay what you want", be mindful of how much gas is at the time
        of your donation before signing your mint request.
        <br />
        <br />
        Due to the time constraints faced in putting this project together in
        time, your NFT will share the artwork of others in this series. While
        the artwork for each NFT is not unique (at least this year), a number
        indicating your NFT's order at time of mint will be applied (so if
        you're the first to mint, you'll get an NFT with "#1" featured in the
        artwork), so your NFT's uniqueness will be visually indicated.
      </p>
    </>
  );
};

export default Minting;
