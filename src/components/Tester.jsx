import React, { useEffect, useState} from "react";
import { ethers } from 'ethers'
import TestContract from '../artifacts/contracts/NBCoin.sol/NBCoin.json'



function Tester() {
	const [accountBalance, setAccountBalance] = useState("");
	const [tokenNameTestVal, setTokenNameTestVal] = useState("");
	const [totalSupplyVal, setTotalSupplyVal] = useState("");
	const [ownerNameVal, setOwnerNameVal] = useState("");
	
		// A Web3Provider wraps a standard Web3 provider, which is
	// what Metamask injects as window.ethereum into each page
	const provider = new ethers.providers.Web3Provider(window.ethereum)

	

	// The Metamask plugin also allows signing transactions to
	// send ether and pay to change state within the blockchain.
	// For this, you need the account signer...
	const signer = provider.getSigner()
	if (typeof window.ethereum !== 'undefined') {
		  console.log('MetaMask is installed!');
		}

					// You can also use an ENS name for the contract address
	const daiAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

	// The Contract object
	const daiContract = new ethers.Contract(daiAddress, TestContract.abi, signer); 

	async function getAccount() {
	  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
	  const account = accounts[0];
	  const balance = await provider.getBalance(account);
	  setAccountBalance(account + " Balance: " + ethers.utils.formatEther(balance));
	  console.log();

	}

	/*async function getRpcName() {


		const tokenNameTest = await daiContract.getTokenName();
		const totalSupply = await daiContract.getTotalSupply();
		const ownerName = await daiContract.getOwner();

		setTokenNameTestVal(tokenNameTest);
		setTotalSupplyVal(totalSupply);
		setOwnerNameVal(ownerName);


	} */
	daiContract.on("Transfer", (from, to, amount, event) => {
	    console.log(`${ from } sent ${ ethers.utils.formatEther(amount) } to ${ to}`);
	    // The event object contains the verbatim log data, the
	    // EventFragment and functions to fetch the block,
	    // transaction and receipt and event functions
	});
	async function sendToAddy() {
	const daiWithSigner = daiContract.connect(signer);
	const dai = ethers.utils.parseUnits("1.0", 18);
	var tx = daiWithSigner.transfer("0xbcd4042de499d14e55001ccbb24a551f3b954096", dai);
	}

	async function burnCoins() {
		const daiWithSigner = daiContract.connect(signer);
		// burn 3 NBC
		const burnAmt = ethers.utils.parseUnits("1.0", 18);
		await daiContract.newBurner("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
		await daiContract.burn("0xbcd4042de499d14e55001ccbb24a551f3b954096", burnAmt);
	}
  return (
    <div className="login">
      	<div className="container">
		<div className="row justify-content-md-center">
				<div className="col-4"><button className="btn btn-primary login-connect" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
	    Login with Email
	  </button>
	  <div className="collapse" id="collapseExample">
		  <div className="card card-body">
		    <form>
			  <div className="form-group">
			    <label htmlFor="exampleInputEmail1">Email address</label>
			    <input type="email" classNa	me="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
			    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
			  </div>
			  <div className="form-group">
			    <label htmlFor="exampleInputPassword1">Password</label>
			    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			  </div>
			  <div className="form-check">
			    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
			    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
		  </div>
		</div></div>

		<div className="row justify-content-md-center">
			<div className="col-4"><button onClick={getAccount} className="login-connect enableEthereumButton"><img src="metamask.svg" width="50" />Connect with Custom RPC</button>
			<h4>Accounts: <span className="showAccount">{accountBalance}</span></h4></div>
		</div>
		<div className="row justify-content-md-center">
			<div className="col-4">
			<h4>Contract Name: <span className="showAccount">{tokenNameTestVal}</span></h4>
			<h4>Total Supply: <span className="showAccount">{totalSupplyVal}</span></h4>
			<h4>Owner Name: <span className="showAccount">{ownerNameVal}</span>
			<div className="col-4"><button onClick={sendToAddy} className="login-connect enableCustomRpcButton">Send to addy</button>
			<button onClick={burnCoins} className="login-connect enableCustomRpcButton">Burn Coins</button>
			</div></h4>


			</div>
		</div>


		</div>
	</div>

    </div>
  );
}

export default Tester;