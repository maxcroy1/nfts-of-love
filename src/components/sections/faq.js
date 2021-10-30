import * as React from "react";

const Faq = () => {
  return (
    <>
      <h2>FAQ</h2>
      <h3>This is my first time minting an NFT, how do I do it?</h3>
      <p>
        Great question! First, setup an ERC-721 compatible wallet, such as{" "}
        <a href="https://metamask.io/" target="_blank">
          MetaMask
        </a>
        .
        <br />
        <br />
        Next, you want to transfer some Ethereum (ETH) into your MetaMask wallet
        to pay for your transaction. For most crypto-beginners, the best way to
        do this would be to open a{" "}
        <a href="https://www.coinbase.com/" target="_blank">
          Coinbase
        </a>{" "}
        account, buy some ETH with funds from your regular bank account, and
        then send your ETH to your MetaMask wallet (here's a{" "}
        <a
          href="https://help.coinbase.com/en/wallet/sending-and-receiving/how-do-i-send-and-receive-crypto-through-wallet"
          target="_blank"
        >
          link
        </a>{" "}
        to Coinbase's explainer on how to sends funds to an external wallet).
        <br />
        <br />
        Once you've confirmed your funds have reached your wallet, all you have
        to do is go to{" "}
        <a
          href="https://opensea.io/collection/nfts-of-love"
          target="_blank"
        >
          OpenSea
        </a>{" "}
        and make your bid!
      </p>
      <h3>How do I know my money isn't going into your pocket?</h3>
      <p>
        Normally, you wouldn't! But thanks to the Ethereum Blockchain, you can
        keep an eye on our wallet to make sure money only comes in for mints,
        and leaves once for our donation. Here's a link to{" "}
        <a
          href="https://etherscan.io/address/0x564252a235c9b04b4ac2ab41c7a588a0264863d5"
          target="_blank"
        >
          Etherscan
        </a>{" "}
        so you can keep an eye on our wallet's address, and we'll be sure to
        update our community over Discord with proof of the donation.
      </p>
      <h3>Who are you guys?</h3>
      <p>
        Thanks for asking! Max is a Software Engineer and Val is an Analyst for
        an auction house. Both of us live in New York City. As Web3 has become
        more prominent, it has impacted both our professional lives and our
        relationship. We are excited to continue to explore technology and art
        in the metaverse with you.
      </p>
    </>
  );
};

export default Faq;
