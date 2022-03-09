import axios from "axios";
import { ethers } from "ethers";
import abi from "../abi";
import { CONFIG } from "../constants";

let provider = null;
let signer = null;
let contract = null;

const connect = () => {
  if (window.ethereum) {
    window.ethereum
      .request({ method: CONFIG.REQUEST_METHOD })
      .then((result) => {})
      .catch((error) => {
        alert(error.message);
      });
  }
};

const configure = async () => {
  provider = new ethers.providers.Web3Provider(window.ethereum);

  signer = provider.getSigner(0);

  contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, abi, signer);
};

export const init = () => {
  connect();
  configure();
};

export const retreive = () => {
  const data = contract.retrieve();
  return data;
};

export const store = (str) => contract.store(str);

export const getTransactions = () =>
  axios.get(
    `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${CONFIG.CONTRACT_ADDRESS}&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=${CONFIG.API_KEY}`
  );
