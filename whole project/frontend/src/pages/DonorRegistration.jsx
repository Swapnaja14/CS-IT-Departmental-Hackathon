import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractABI from "./donation.json";

const DonorRegistration = () => {
  const contractAddress = "0x02bcf645fb62d3b6aaf742d46611530d25513baf";

  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");
  const [contractBalance, setContractBalance] = useState("");

  const HeartIcon = () => (
    <svg
      className="w-10 h-10 text-red-500 mb-4 animate-pulse"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Function to connect wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        await _provider.send("eth_requestAccounts", []);
        const signer = _provider.getSigner();
        const userAddress = await signer.getAddress();
        const _contract = new ethers.Contract(contractAddress, contractABI, signer);

        setAccount(userAddress);
        setProvider(_provider);
        setContract(_contract);
        console.log("Wallet connected:", userAddress);

        // Fetch contract balance
        const balance = await _provider.getBalance(contractAddress);
        setContractBalance(ethers.utils.formatEther(balance));
      } catch (err) {
        console.error("Connection error:", err);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // Function to donate
  const donate = async () => {
    if (contract && donationAmount > 0) {
      try {
        const etherValue = ethers.utils.parseEther(
          (parseInt(donationAmount) * 0.00000741).toString()
        );
        const tx = await contract.donate({ value: etherValue });
        await tx.wait();
        alert("Donation Successful!");

        // Update contract balance after donation
        const updatedBalance = await provider.getBalance(contractAddress);
        setContractBalance(ethers.utils.formatEther(updatedBalance));
      } catch (error) {
        console.error("Error donating:", error);
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center border-t-4 border-red-400">
        <HeartIcon />
        <h1 className="text-3xl font-bold text-red-600 mb-2">Donate for Healthcare</h1>
        <p className="text-gray-600 mb-6">
          Help provide critical medical aid to those in need. Your ETH donation could save a life. ❤️
        </p>

        {!account ? (
          <button
            onClick={connectWallet}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition duration-200"
          >
            Connect Wallet to Donate
          </button>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-2">
              <strong>Connected Wallet:</strong> {account}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Donations till now:</strong> {(contractBalance)/0.00000741} RS
            </p>
            <input
              type="number"
              placeholder="Amount in ETH"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
            />
            <button
              onClick={donate}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-200"
            >
              Donate Now 💚
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonorRegistration;
