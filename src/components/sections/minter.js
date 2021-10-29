import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { connectWallet, getCurrentWalletConnected } from "../../utils/interact";
import { pinJSONToIPFS } from "../../utils/pinata";

const Minter = () => {
  const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
  const contractABI = require("../../utils/contract-abi.json");
  const contractAddress = "0xB8A5389108EC77973782e11d39c4BA9b63d28218";
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [donation, setDonation] = useState(0.0058);
  const [web3Loaded, setWeb3Loaded] = useState(false);

  let web3;

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  useEffect(() => {
    if (!window.AlchemyWeb3 || web3Loaded) {
      return;
    } else {
      web3 = window.AlchemyWeb3.createAlchemyWeb3(alchemyKey);
      setWeb3Loaded(true);
      console.log(web3);
    }
  });

  const mintNFT = async (donation) => {
    //error handling
    if (donation < 0.0058) {
      return {
        success: false,
        status: "Our minimum donation is 0.0058 ETH",
      };
    }

    //make metadata
    const metadata = new Object();
    metadata.image = "";
    metadata.description = "";

    //make pinata call
    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
      return {
        success: false,
        status: "😢 Something went wrong while uploading your tokenURI.",
      };
    }
    const tokenURI = pinataResponse.pinataUrl;

    //load smart contract
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

    //set up your Ethereum transaction
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .mintNFT(window.ethereum.selectedAddress, tokenURI)
        .encodeABI(), //make call to NFT smart contract
    };

    //sign the transaction via Metamask
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return {
        success: true,
        status:
          "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
          txHash,
      };
    } catch (error) {
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }
  };

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { status } = await mintNFT(donation);
    setStatus(status);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
          setStatus("Connect to Metamask using the button above.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const ConnectWallet = styled.button`
    background-color: black;
    color: white;
    border: 1px solid white;
    font-family: 'Tauri', sans-serif;
    font-size: 1.3rem;

    @media only screen and (min-width: 600px) {
      font-size: 2.1rem;
    }
  `;

  const Status = styled.h2`
    margin: 3vh auto;

    @media only screen and (min-width: 600px) {
      width: 450px;
    }
  `;

  return (
    <div className="Minter">
      <ConnectWallet id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " + 
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </ConnectWallet>
      <Status id="status">{status}</Status>
      <div hidden={!walletAddress ? true : false}>
        <form>
          <input
            type="number"
            placeholder="0.0058"
            step="0.0001"
            min="0.0058"
            onChange={(event) => setDonation(event.target.value)}
          />
        </form>
        <br/>
        <ConnectWallet id="mintButton" onClick={onMintPressed}>
          Mint NFT
        </ConnectWallet>
      </div>
    </div>
  );
};

export default Minter;
