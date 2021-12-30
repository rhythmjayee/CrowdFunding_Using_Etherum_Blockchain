import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

//require('dotenv').config();

//const deployedContractAddress = process.env.deployedContractAddress;
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x296c816EbF5Dd94966738442021cC1a1D3161FA4"
);

export default instance;
