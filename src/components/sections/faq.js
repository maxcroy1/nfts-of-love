import * as React from "react";

const FAQ = () => {
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
        Next, you want to transfer some Ethereum into your MetaMask wallet so
        you can pay for your transaction. For most crypto-beginners, the best
        way to do this would be to open a{" "}
        <a href="https://www.coinbase.com/" target="_blank">
          Coinbase
        </a>{" "}
        account, buy some Ethereum using your regular bank account or debit
        card, and then send your Ethereum to your MetaMask wallet (here's a{" "}
        <a
          href="https://help.coinbase.com/en/wallet/sending-and-receiving/how-do-i-send-and-receive-crypto-through-wallet"
          target="_blank"
        >
          link
        </a>{" "}
        to Coinbase's explainer on how to do that).
        <br />
        <br />
        Once you've confirmed your funds have reached your wallet, all you have
        to do is select your desired donation amount, press mint on our home
        page, and then sign the transaction when prompted by MetaMask. Be sure
        to look at your{" "}
        <a
          href="https://www.investopedia.com/terms/g/gas-ethereum.asp#:~:text=On%20the%20Ethereum%20blockchain%2C%20gas,smart%20contracts%20and%20other%20transactions."
          target="_blank"
        >
          gas fee
        </a>{" "}
        before signing the transaction to make sure you're not spending too much
        on gas!
      </p>
      <h3>How do I know my money isn't going into your pocket?</h3>
      <p>
        Normally, you wouldn't! But thanks to the Ethereum Blockchain, you can
        keep an eye on our wallet to make sure money only comes in for mints,
        and leaves once our donation. Here's a link to Etherscan so you can keep
        an eye on our wallet's address, and we'll be sure to update our
        community over Discord with proof of the donation.
      </p>
      <h3>Who are you guys?</h3>
      <p>
        Thanks for asking! Max is a Software Engineer, Val works as an Analyst
        for a world-class Auctioneer, and we both live in New York City. As Web3
        has become more prominent, it's become a larger part of our professional
        lives. We couldn't be more excited for the decentralized future!
      </p>
    </>
  );
};

export default FAQ;
